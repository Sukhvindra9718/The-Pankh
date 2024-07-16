const pool = require('../db');
const fs = require('fs');
const uuid = require('uuid');


// Images CRUD
exports.addCarousal = async (req, res) => {
    try {
        const {title,description} = req.body;
        const filepath = req.file.path;
        const filename = req.file.filename;
        const created_at = new Date();
        const id = uuid.v4();

        await pool.query('INSERT INTO carousal (id,filename,filepath,createdat,title,description) VALUES ($1, $2, $3,$4,$5,$6) RETURNING *', [id, filename, filepath,created_at,title,description]);

        res.status(200).json({
            success: true,
            message: 'Carousal Uploaded Succesfully',
        })
    } catch (error) {
        res.status(500).send({ success: false, userError: 'Server Error', error: error.message });
    }
}

exports.getAllCarousals = async (req, res) => {
    try {
        console.log('get all carousals');
        const carousals = await pool.query('SELECT * FROM carousal');
        res.status(200).json({
            success: true,
            carousal:carousals.rows
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Carousals fetch failed'
        })
    }
}

exports.getCarousalByID = async (req, res) => {
    try {
        const { id } = req.params;
        const carousal = await pool.query('SELECT * FROM carousal WHERE id = $1', [id]);
        if(carousal.rows.length === 0) {
            return res.status(404).json({ success: false, msg: 'Carousal not found' });
        }
        res.status(200).json({
            success: true,
            carousal:carousal.rows[0]
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Carousal fetch failed'
        })
    }
}

exports.deleteCarousal = async (req, res) => {
    try {
        const { id } = req.params;
        const carousal = await pool.query('SELECT * FROM carousal WHERE id = $1', [id]);
        const filePath = carousal.rows[0].filepath;
        fs.unlinkSync(filePath);
        await pool.query('DELETE FROM carousal WHERE id = $1', [id]);
        res.status(200).json({
            success: true,
            message: 'Carousal Deleted Succesfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message,
            userError: 'Carousal delete failed'
        })
    }
}