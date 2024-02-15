import React, { FC } from "react";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import logo from "./logo.svg";

import "./Header.css";

const Header: FC = () => {
  return (
    <>
      <header className="header">
        <div className="header_app">
          <div className="container">
            <div className="header_container">
              <div className="logo_item">
                <a href="/" className="header_logoLink" title="Home">
                  <img src={logo} alt="logo" />
                </a>
              </div>

              <div className="header_nav_container">
                <div className="button_arrea">
                  <button className="btn credits-btn" type="button">
                    <div
                      className="credit-details"
                      data-testid="credit-details"
                    >
                      <span className="credit-icon">
                        <svg viewBox="0 0 16 16" className="primary">
                          <path d="M15.9998 7.9999L10.4999 5.49993L7.9999 0L5.49993 5.49993L0 7.9999L5.49993 10.4999L7.9999 15.9998L10.4999 10.4999L15.9998 7.9999Z"></path>
                        </svg>
                      </span>
                      <span data-testid="credit-details-text">Credits: 10</span>
                      <InfoOutlinedIcon className="primary" />
                    </div>
                  </button>

                  <button
                    className="btn btn-primary purchase-plan-btn"
                    type="button"
                  >
                    Purchase plan
                  </button>

                  <div className="profile-wrapper" data-testid="profile-icon">
                    <p className="name">KB</p>
                    <svg viewBox="0 0 6 8" className="left-arrow " fill="none">
                      <path
                        d="M4.66699 0.666504L1.33366 3.99984L4.66699 7.33317"
                        stroke="currentColor"
                        strokeWidth="1.66667"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
