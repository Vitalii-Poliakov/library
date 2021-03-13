import React from "react";

function About() {
  //Scrolls tp the top of the page
  window.scrollTo(0, 0);
  return (
    <div className="about">
      <h1>This Application has been developed by Vitalii Poliakov.</h1>
      <h2>
        <a href="https://github.com/Vitalii-Poliakov/library/tree/master">
          Click here
        </a>{" "}
        to see code for this app
      </h2>
      <h2>
        You can find more of my work at{" "}
        <a href="https://github.com/Vitalii-Poliakov" target="_blank">
          github
        </a>
        .
      </h2>
    </div>
  );
}

export default About;
