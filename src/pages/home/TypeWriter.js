import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter 
      options={{
        strings: [
          "Front End Developer",        
          "I am a Student of ClassVisa",
          "I Love ReactJs!"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;
