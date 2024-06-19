import React, { useContext } from "react";
import { Context } from "../../main";

const About = () => {
  const { mode } = useContext(Context);
  return (
    <article className={mode === "dark" ? "dark-bg about" : "light-bg about"}>
      <div className="container">
        <h2>About</h2>
        <p>
        A blog website is an online platform where individuals or organizations publish written
         content on various topics, ranging from personal experiences and hobbies to professional
          advice and news. Bloggers can share their expertise, opinions, and stories through posts 
          that can include text, images, videos, and links. Readers can interact by commenting and 
          sharing posts on social media. Blog websites often feature categories and tags to organize 
          content, making it easier for users to navigate and find information. They serve as a medium
           for communication, education, and community building, attracting audiences with engaging and
            regularly updated content.
        </p>
    
      </div>
    </article>
  );
};

export default About;
