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
                  <a href="#impression" className="link">
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
                  <span className="link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button className="item-button" type="button">
                  <a href="#feature" className="link">
                    New feature
                  </a>
                  <span className="link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button className="item-button" type="button">
                  <a href="#manual" className="link">
                    Diff with manual
                  </a>
                  <span className="MuiTouchRipple-root link-button-text"></span>
                </button>
              </div>
              <div className="item-box">
                <button className="item-button" type="button">
                  <a href="#why_me" className="link">
                    Why me
                  </a>
                  <span className="link-button-text"></span>
                </button>
              </div>
            </div>

            <section id="impression">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">First impression</p>
                </div>
                <div className="divider" />
                {data[0].map((impression: any, key: number) => {
                  return (
                    <div className="list-item-container" key={key}>
                      <h3>Role: {impression.role}</h3>
                      <h6>Key-focus: {impression.point}</h6>
                      <p>{impression.comment}</p>
                      {impression.role === "user" &&
                        [...Array(impression.rating)].map((keyIcon) => (
                          <StarIcon key={keyIcon} />
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
                {data[1].map((improvements: any, key: number) => {
                  return (
                    <div className="list-item-container" key={key}>
                      <h3>Role: {improvements.role}</h3>
                      <h6
                        style={{
                          color: improvements.type === "bug" ? "red" : "#000",
                        }}
                      >
                        Key-focus: {improvements.focus}
                      </h6>
                      <p>{improvements.comment}</p>
                      what satisfaction will it bring to a user:{" "}
                      {[...Array(improvements.rating)].map((key) => (
                        <StarIcon key={key} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="feature">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">Features</p>
                </div>
                <div className="divider" />
                {data[2].map((feature: any) => {
                  return (
                    <div className="list-item-container">
                      <h3>Role: {feature.role}</h3>
                      <h6>Key-focus: {feature.point}</h6>
                      <p>{feature.comment}</p>
                      what satisfaction will it bring to a user:{" "}
                      {[...Array(feature.rating)].map((key) => (
                        <StarIcon key={key} />
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="manual">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">Difference with a manual video</p>
                </div>
                <div className="divider" />
                {data[3].map((diff: any) => {
                  return (
                    <div className="list-item-container">
                      <h3>Video type: {diff.video}</h3>
                      <ul>
                        What is good:
                        {diff.positive &&
                          diff.positive.map((pros: any, key: number) => (
                            <li key={key}>{pros}</li>
                          ))}
                      </ul>
                      <ul>
                        What will be solved by a human:
                        {diff.negative &&
                          diff.negative.map((pros: any, key: number) => (
                            <li key={key}>{pros}</li>
                          ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </section>

            <section id="why_me">
              <div className="block-container">
                <div className="block-container-titel">
                  <p className="block-titel">Why me?</p>
                </div>
                <div className="divider" />
                {data[4].map((kate: any, key: number) => {
                  return (
                    <>
                      <div
                        className="list-item-container list-item-container-full "
                        key={key}
                      >
                        <h3>Technical skills: </h3>
                        {kate.technical_skills &&
                          kate.technical_skills.map(
                            (pros: any, key: number) => (
                              <li key={key}>{pros}</li>
                            )
                          )}
                      </div>
                      <div
                        className="list-item-container list-item-container-full "
                        key={key}
                      >
                        <h3>Human skills: </h3>
                        {kate.human_being &&
                          kate.human_being.map((pros: any, key: number) => (
                            <li key={key}>{pros}</li>
                          ))}
                      </div>
                      <div
                        className="list-item-container list-item-container-full "
                        key={key}
                      >
                        <h3>What would I do if I had more time: </h3>
                        <h4>
                          I was asked to share something, I just want to show
                          who I am
                        </h4>
                        {kate.next_steps &&
                          kate.next_steps.map((pros: any, key: number) => (
                            <li key={key}>{pros}</li>
                          ))}
                      </div>
                      <div
                        className="list-item-container list-item-container-full "
                        key={key}
                      >
                        <h3>Mottos: </h3>
                        {kate.mottos &&
                          kate.mottos.map((pros: any, key: number) => (
                            <li key={key}>{pros}</li>
                          ))}
                      </div>
                    </>
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
