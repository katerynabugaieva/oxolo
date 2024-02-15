import React, { FC } from "react";
import "./FAQ.css";
import data from "../src/data.json";
import StarIcon from "@mui/icons-material/Star";

const FAQ: FC = () => {
  return (
    <div>
      <div className="content">
        <div className="content-container">
          <div className="titel-container">
            <div className="titel-wrap">
              <div className="titel">
                <h2 className=" titel-h2">
                  <span>General Questions Assessment Details:</span>
                </h2>
              </div>
              <div className="subtitel-container">
                <div className="subtitel">
                  This is section about my attitude to a product as User or a
                  Dev.
                </div>
              </div>
            </div>
          </div>
          <div className="content-wrap">
            <div className="section-list">
              <div className="item-box">
                <button className="item-button" type="button">
                  <a href="#first_impression" className="link">
                    First impression
                  </a>
                  <span className="link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button className="item-button" type="button">
                  <a href="#improvements" className="link">
                    Improvements
                  </a>
                  <span className="MuiTouchRipple-root link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button
                  className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button"
                  type="button"
                >
                  <a href="#Basic" className="link">
                    New feature
                  </a>
                  <span className="MuiTouchRipple-root link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button
                  className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button"
                  type="button"
                >
                  <a href="#Basic" className="link">
                    Diff with manual
                  </a>
                  <span className="MuiTouchRipple-root link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button
                  className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button"
                  type="button"
                >
                  <a href="#Basic" className="link">
                    Why me
                  </a>
                  <span className="MuiTouchRipple-root link-button-text"></span>
                </button>
              </div>
            </div>

            <section id="first_impression">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">First impression</p>
                </div>
                <div className="divider" />
                {data[0].map((impression) => {
                  return (
                    <div className="list-item-container">
                      <h3>Role: {impression.role}</h3>
                      <h6>Key-focus: {impression.point}</h6>
                      <p className="TutorialCard_description__VQssO">
                        {impression.comment}
                      </p>
                      {impression.role === "user" &&
                        [...Array(impression.rating)].map((e, i) => (
                          <StarIcon />
                        ))}
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="improvements">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">Improvements</p>
                </div>
                <div className="divider" />
                {data[1].map((improvements) => {
                  return (
                    <div className="list-item-container">
                      <h3>Role: {improvements.role}</h3>
                      <h6
                        style={{
                          color: improvements.type === "bug" ? "red" : "#000",
                        }}
                      >
                        Key-focus: {improvements.focus}
                      </h6>
                      <p>{improvements.comment}</p>
                      what satisfaction will it bring to user:{" "}
                      {[...Array(improvements.rating)].map((e, i) => (
                        <StarIcon />
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
