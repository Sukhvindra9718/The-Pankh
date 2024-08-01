const pool = require("../db");
const uuid = require("uuid");
const cloudinary = require("cloudinary")
exports.createVolunteer = async (req, res) => {
  try {
    // Process user registration
    const {
      username,
      phonenumber,
      role,
      facebookurl,
      twitterurl,
      instagramurl,
      linkedinurl,
      file
    } = req.body;
    const myCloud = await cloudinary.v2.uploader.upload(file, {
      folder: "thepankh/volunteer",
      width: 1000,
      height: 1000,
      Crop: "fill",
    });
    const id = uuid.v4();
    await pool.query(
      "INSERT INTO volunteer (id,username,phonenumber,role,facebookurl,twitterurl,instagramurl,linkedinurl,fileid,fileurl,createdat) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *",
      [
        id,
        username,
        phonenumber,
        role,
        facebookurl === '' ? 'https://facebook.com': facebookurl,
        twitterurl === '' ? 'https://twitter.com':twitterurl,
        instagramurl === '' ? 'https://instagram.com':instagramurl,
        linkedinurl === '' ? 'https://linkedin.com':linkedinurl,
        myCloud.public_id,
        myCloud.secure_url,
        new Date(),
      ]
    );
    console.log("created")
    res.status(201).json({success:true,msg:"Volunteer Created"});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
};

exports.getAllVolunteers = async (req, res) => {
    try {
      const volunteers = await pool.query("SELECT * FROM volunteer");
      res.status(200).json({
        success: true,
        volunteers: volunteers.rows,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        error: error.message,
        userError: "Volunteers fetch failed",
      });
    }
  };
  