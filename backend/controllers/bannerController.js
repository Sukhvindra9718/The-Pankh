const pool = require('../db');
const fs = require('fs');
const uuid = require('uuid');


// Images CRUD
exports.addBanner = async (req, res) => {
    try {

        const { pagename } = req.body;
        const filepath = req.file.path;
        const filename = req.file.filename;
        const created_at = new Date();
        const id = uuid.v4();
        console.log(id, pagename, filename, filepath, created_at);
        await pool.query('INSERT INTO banner (id,pagename,filename,filepath,createdat) VALUES ($1, $2, $3,$4,$5) RETURNING *', [id, pagename, filename, filepath,created_at]);

        res.status(200).json({
            success: true,
            message: 'Banner Uploaded Succesfully',
        })
    } catch (error) {
        res.status(500).send({ success: false, userError: 'Server Error', error: error.message });
    }
}

exports.getAllBanners = async (req, res) => {
    try {
        console.log('get all banners');
        const banners = await pool.query('SELECT * FROM banner');
        res.status(200).json({
            success: true,
            banner:banners.rows
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Banners fetch failed'
        })
    }
}

exports.getBannerByID = async (req, res) => {
    try {
        const { id } = req.params;
        const banner = await pool.query('SELECT * FROM banner WHERE id = $1', [id]);
        if(banner.rows.length === 0) {
            return res.status(404).json({ success: false, msg: 'Banner not found' });
        }
        res.status(200).json({
            success: true,
            banner:banner.rows[0]
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Banner fetch failed'
        })
    }
}

exports.deleteBanner = async (req, res) => {
    try {
        const { id } = req.params;
        const banner = await pool.query('SELECT * FROM banner WHERE id = $1', [id]);
        const filePath = banner.rows[0].filepath;
        fs.unlinkSync(filePath);
        await pool.query('DELETE FROM banner WHERE id = $1', [id]);
        res.status(200).json({
            success: true,
            message: 'Banner Deleted Succesfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Banner delete failed'
        })
    }
}