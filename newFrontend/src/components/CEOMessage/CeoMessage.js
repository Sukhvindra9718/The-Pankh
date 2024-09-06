import React from "react";

const CeoMessage = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img
            src="https://res.cloudinary.com/dhk1toauk/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1725383817/Picture2_yjlglk.jpg" // Replace with the actual image URL
            alt="Aarti Thapa"
            style={styles.image}
          />
        </div>
        <div style={styles.textContainer}>
          <p style={styles.quote}>
            "With Immense pleasure, I would like to reflect into the miles of
           journey so far that we have achieved with great success and
           achievements over the years, in reshaping the communities’ fate
           towards progressive path of development, driven by a vision to empower
           the lower strata of the society, especially the underprivileged women,
          youths, children & farmer’s and have made significant impacts in the
           life of beings through empowerment, capacity building and fostering
           for becoming self-reliance."
          </p>
          <p style={styles.author}>Aarti Thapa</p>
          <p style={styles.title}>Founder President & CEO</p>
          <div style={styles.linkContainer}>
            <a href="#" style={styles.link}>
              President's Message ➔
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    width: "100%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    justifyContent: "center",
    padding: "20px 0",
  },
  container: {
    display: "flex",
    alignItems: "center",
    maxWidth: "1200px",
    width: "100%",
    padding: "20px",
    borderRadius: "10px", // If you want the content box to have a different background color
  },
  imageContainer: {
    flex: "0 0 350px",
    marginRight: "20px",
  },
  
  image: {
    width: "100%",
    borderRadius: "50%",
  },
  textContainer: {
    flex: 1,
    color: "#333",
  },
  quote: {
    fontSize: "18px",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  author: {
    color: "#FF6F0F",
    marginBottom: "5px",
    fontSize:"20px"
  },
  title: {
    fontSize: "13px",
    marginBottom: "10px",
    color: "black",
    fontWeight:"bold",
  },
  link: {
    color: "#FF6F0F",
    textDecoration: "none",
  },
  linkContainer: {
    display: "flex",
    justifyContent: "right",
    fontSize: "14px"
  },
};

export default CeoMessage;
