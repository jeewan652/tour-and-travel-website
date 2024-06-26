import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import FlightIcon from "@mui/icons-material/Flight";
import HotelIcon from "@mui/icons-material/Hotel";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import TrainIcon from "@mui/icons-material/Train";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Login from "./Login";
import AccountMenu from "./AccountMenu";
import { useSelector } from "react-redux";
import  logo from "../assets/images/logo51.png"
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const handleClickFlight = () => navigate("/flight");
  const handleClickHotels = () => navigate("/hotel");
  const handleClickHomeWork = () => navigate("/where");
  const handleClickTrain = () => navigate("/train");
  const handleClickVisa = () => navigate("/gift-cards");

  const isLoggedIn = useSelector((store) => store.auth.isLoggedIn);

  return (
    <>
      <nav className={styles.navbarWrapper}>
        <div className={styles.navbarContent}>
          {/* 1st part of navbar .ie. left side of navbar */}
          <div className={styles.leftSideNavbar}>
            {/* logo wrapper */}
            <div className={styles.logoWrapper}>
              <a href="/" className={styles.logoimg}>
              <img src={ logo } alt="logo main" />
              </a>
            </div>
            {/* hamberger menu */}
            <div
              className={styles.hamburgr_menu}
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <CloseIcon style={{ fontSize: "1.4em" }} />
              ) : (
                <MenuIcon style={{ fontSize: "1.4em" }} />
              )}
            </div>
          </div>

          {/* 2nd part of navbar will start which contains logo */}

          <div
            className={
              open ? styles.rightSideNavbarMobile : styles.rightSideNavbar
            }
          >
            {/* icons container */}
            <div className={styles.iconWrapper}>
              <div onClick={handleClickFlight}>
                <span>
                  <FlightIcon
                    className={styles.flightICON}
                    style={{ fontSize: 30, padding: 4 }}
                  ></FlightIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Flights</p>
              </div>
              <div onClick={handleClickHotels}>
                <span>
                  <HotelIcon style={{ fontSize: 30, padding: 4 }}></HotelIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Hotels</p>
              </div>
              <div onClick={handleClickHomeWork}>
                <span>
                  <HomeWorkIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></HomeWorkIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Homestays</p>
              </div>

              
              <div onClick={handleClickVisa}>
                <span>
                  <CreditCardIcon
                    style={{ fontSize: 30, padding: 4 }}
                  ></CreditCardIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Gift</p>
              </div>
              <div onClick={handleClickTrain}>
                <span>
                  <TrainIcon style={{ fontSize: 30, padding: 4 }}></TrainIcon>
                </span>
                <p style={{ marginTop: "0px" }}>Trains</p>
              </div>

              <div
                className={isLoggedIn ? "" : styles.login}
                style={isLoggedIn ? { color: "black" } : {}}
              >
                <div >
                  {isLoggedIn ? <AccountMenu /> : <Login />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
