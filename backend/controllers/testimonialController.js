const pool = require("../db");
const uuid = require("uuid");
const cloudinary = require("cloudinary")



exports.createTestimonial = async (req, res) => {
  try {
    // Process user registration
    const {
      name,
      role,
      comment,
      file
    } = req.body;
    const myCloud = await cloudinary.v2.uploader.upload(file, {
      folder: "thepankh/testimonial",
      width: 1000,
      height: 1000,
      Crop: "fill",
    });
    const id = uuid.v4();
    await pool.query(
      "INSERT INTO testimonial (id,name,role,comment,fileid,fileurl,createdat) VALUES ($1, $2, $3,$4,$5,$6,$7) RETURNING *",
      [
        id,
        name,
        role,
        comment,
        myCloud.public_id,
        myCloud.secure_url,
        new Date(),
      ]
    );
    res.status(201).json({success:true,msg:"Testimonial Created"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getAllTestimonial = async (req, res) => {
    try {
      const testimonial = await pool.query("SELECT * FROM testimonial");
      res.status(200).json({
        success: true,
        testimonial: testimonial.rows,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
        userError: "Testimonial fetch failed",
      });
    }
  };
  