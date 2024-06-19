import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiFillInstagram, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { Context } from "../../main";

const Footer = () => {
  const isDashboard = useLocation("http://localhost:5173/dashboard");
  const { mode, setMode } = useContext(Context);

  return (
    <footer
      className={
        isDashboard.pathname === "/dashboard"
          ? "hideFooter"
          : mode === "light"
          ? "light-footer"
          : "dark-footer"
      }
    >
      <div className="container">
        <div className="about">
          <h3>About</h3>
          <p>
          A blog website is an online platform where individuals or organizations publish written content on various topics,
           ranging from personal experiences and hobbies to professional advice and news. Bloggers can share their expertise,
            opinions, and stories through posts that can include text, images, videos, and links.
          </p>
          <p>
            <span>Email:</span>saket@gmail.com
          </p>
          <p>
            <span>Phone:</span>7894561230
          </p>
        </div>
        <div className="quick_links">
          <h3>Quick Links</h3>
          <ul>
            <Link to={"/"}>Home</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/dashboard"}>Dashboard</Link>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Lifestyle</li>
            <li>Technology</li>
            <li>Sports</li>
            <li>Travel</li>
            <li>Business</li>
            <li>Economy</li>
          </ul>
        </div>
        <div className="news_letter">
          <div>
            <h3>Weekly Newletter</h3>
            <p>Get blog articles and offer via email</p>
          </div>
          <div>
            <input type="text" placeholder={`Your Email`} />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo">PERSONAL <span>BLOG</span></div>
        <div className="links">
          <Link to={"https://www.instagram.com/thakur.saketkumar/"} target="_blank">
            <AiFillInstagram />
          </Link>
          <Link to={"https://www.instagram.com/thakur.saketkumar/"} target="_blank">
            <FaGitSquare />
          </Link>
          <Link to={"https://www.youtube.com/"} target="_blank">
            <AiFillYoutube />
          </Link>
          <Link to={"https://www.linkedin.com/in/saket-kumar-5646342a9/"} target="_blank">
            <AiFillLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
