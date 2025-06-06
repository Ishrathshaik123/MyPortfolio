import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize:"90%" }}>
          <ul>
          {`\u2023`} Hi Everyone, I am <span className="purple">SK.Ishrath Banu </span>
            from <span className="purple" > Andhra Pradesh, India.</span>
            <br></br><br></br>
            {`\u2023`}  Final-year B.Tech student in Computer Science.
            <br></br><br></br>
            {`\u2023`} Passionate about Data Science.
            <br></br><br></br>
            {`\u2023`} Tech enthusiast driving change through projects and hackathons, solving real-world problems and enhancing daily life.
            </ul>
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
