import React, { FC } from "react";
import "./FAQ.css"

const FAQ: FC = () => {
    return (
        <div>
            <div className="content">
                <div className="content-container">
                    <div className="titel-container">
                        <div className="titel-wrap">
                            <div className="titel">
                                <h2 className=" titel-h2">
                                    <span  >
                                        General Questions Assessment Details:
                                    </span>
                                </h2>
                            </div>
                            <div className="subtitel-container">
                                <div className="subtitel">
                                    This is section about my attitude to a product as User or a Dev.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-wrap">
                        <div className="section-list">
                            <div className="item-box">
                                <button className="item-button" type="button">
                                    <a href="#Basic" className='link'>First impression
                                    </a>
                                    <span className="link-button-text">
                                    </span></button>
                            </div>
                            <div className="item-box">
                                <button className="item-button" type="button">
                                    <a href="#Basic" className='link'>Improvements
                                    </a>
                                    <span className="MuiTouchRipple-root link-button-text">
                                    </span></button>
                            </div>
                            <div className="item-box">
                                <button className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button" type="button">
                                    <a href="#Basic" className='link'>New feature
                                    </a>
                                    <span className="MuiTouchRipple-root link-button-text">
                                    </span></button>
                            </div>
                            <div className="item-box">
                                <button className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button" type="button">
                                    <a href="#Basic" className='link'>Diff with manual
                                    </a>
                                    <span className="MuiTouchRipple-root link-button-text">
                                    </span></button>
                            </div>
                            <div className="item-box">
                                <button className=" tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne item-button" type="button">
                                    <a href="#Basic" className='link'>Why me
                                    </a>
                                    <span className="MuiTouchRipple-root link-button-text">
                                    </span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;