const pool = require("../db");
const fs = require("fs");
const uuid = require("uuid");
const cloudinary = require("cloudinary");

// News CRUD
exports.news = async (req, res) => {
  try {
    const { pagename, file } = req.body;
    const created_at = new Date();
    const id = uuid.v4();
    const myCloud = await cloudinary.v2.uploader.upload(file, {
      folder: "thepankh/news",
      width: 1000,
      height: 1000,
      Crop: "fill",
    });
    await pool.query(
      "INSERT INTO news (id,pagename,fileid,fileurl,createdat) VALUES ($1, $2, $3,$4,$5) RETURNING *",
      [
        id,
        pagename.toLowerCase(),
        myCloud.public_id,
        myCloud.secure_url,
        created_at,
      ]
    );

    res.status(200).json({
      success: true,
      message: "News Uploaded Succesfully",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      userError: "Server Error",
      error: error.message,
    });
  }
};
