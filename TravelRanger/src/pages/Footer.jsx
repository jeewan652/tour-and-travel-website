import React from "react";
import style_f from "../CSS/Footer.module.css";

import { FaGithub } from "react-icons/fa";

import { FaFacebookF } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className={style_f.container}>
        <div className={style_f.f_icon}>
          <a href="https://github.com/jeewan652">
            {" "}
            <FaGithub className={style_f.twitter} />
          </a>

          <a href="https://github.com/jeewan652">
            {" "}
            <FaFacebookF className={style_f.facebook} />{" "}
          </a>
          <a href="https://github.com/jeewan652">
            {" "}
            <FaInstagram className={style_f.facebook} />{" "}
          </a>
        </div>

        <div className={style_f.f_cright}>
          <span className={style_f.copyright}> © 2024 Travel Ranger</span>
          <span className={style_f.counteryName}>
            {" "}
            Country:-
            <a href="https://www.makemytrip.com/" className={style_f.country}>
              INDIA
            </a>
            <a href="https://www.makemytrip.com/" className={style_f.country}>
              USA
            </a>
            <a href="https://www.makemytrip.com/" className={style_f.country}>
              UAE
            </a>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
