import React from "react";

function WelcomeNotes() {
  return (
    <div className="container">
      <div style={{ marginTop: "2rem" }}>
        <h3>Greetings & Welcome to PANKH!</h3>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <p>
          We are delighted to have you here! At PANKH, we are dedicated to
          uplifting marginalized and underprivileged communities through
          holistic and sustainable development initiatives. Our passionate team
          is committed to making a meaningful impact across various domains.
        </p>
        <br />
        <div style={{ marginBottom: "1rem" }}>
          <h5> - Leave No One Behind Initiative</h5>
        </div>
        <p>
          Our "Leave No One Behind" initiative ensures inclusive and
          comprehensive development for all sections of society. Here’s a
          glimpse of what we do:
        </p>
        <br />
        <ul>
          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6>Women Empowerment : </h6>
            <p>
              Enhancing skills and creating diverse livelihood opportunities for
              women.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Inclusive Education: </h6>
            <p>
              Ensuring every child has access to quality learning through
              innovative practices.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Health and Sanitation: </h6>
            <p>
              Improving health and sanitation standards for women, children, and
              vulnerable communities.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Sustainable Resource Management: </h6>
            <p>
              Promoting sustainable natural resource management and
              environmentally friendly technologies.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Nutritional Agriculture: </h6>
            <p>
              Encouraging practices that enhance food security and nutrition.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Resource Mapping and Value Chain Development: </h6>
            <p>
              Bolstering agricultural and allied activities through resource
              mapping and product-specific value chains.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6>Farmer Support and Community Development:</h6>
            <p>
              Providing tailored solutions for farmer communities and supporting
              farmer groups and producer companies.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6> Innovative Renewable Energy Solutions Promotion:</h6>
            <p>
              Facilitating the adoption of solar, wind, and biomass technologies
              for energy efficiency and sustainability.
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6>Micro Enterprise Promotion:</h6>
            <p>
              Promoting self-employment through area-specific micro enterprises
              and strengthening community-based organizations (CBOs).
            </p>
          </li>

          <li style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <h6>Integrated Community Development:</h6>
            <p>
              Leading initiatives to uplift targeted communities and areas,
              ensuring no one is left behind.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default WelcomeNotes;
