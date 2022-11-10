import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Nnamdi Nnadi </span>
            from <span className="purple"> Nigeria.</span>
            <br />
            I am a web developer who is passionated in programming and solving complex algorithm in to a
            simple solution and turns yours design ideas into a live website to help your business grow faster.
            using modern web technologies<br />            
          </p>          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
