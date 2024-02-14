import React from 'react';
import logo from './logo.svg';
import './App.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_app">
          <div className="MuiContainer-root container" >
            <div className="MuiGrid-root MuiGrid-container header_container">
              <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-auto logo_item">
                <a href="/" className="header_logoLink" title="Home">
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
              </div>

              <div className="header_nav_container">
                <div className="button_arrea">
                  <button className="btn credits-btn" type="button" >
                    <div className="credit-details" data-testid="credit-details">
                      <span className="credit-icon">
                        <svg viewBox="0 0 16 16" className="primary">
                          <path d="M15.9998 7.9999L10.4999 5.49993L7.9999 0L5.49993 5.49993L0 7.9999L5.49993 10.4999L7.9999 15.9998L10.4999 10.4999L15.9998 7.9999Z">
                          </path>
                        </svg>
                      </span>
                      <span data-testid="credit-details-text">
                        Credits: 10
                      </span>
                      <InfoOutlinedIcon className='primary' />
                    </div>
                  </button>

                  <button className="btn btn-primary purchase-plan-btn" type="button">
                    Purchase plan
                  </button>

                  <div className="profile-wrapper" data-testid="profile-icon">
                    <p className="name">KB</p>
                    <svg viewBox="0 0 6 8" className="left-arrow " fill="none">
                      <path d="M4.66699 0.666504L1.33366 3.99984L4.66699 7.33317" stroke="currentColor" stroke-width="1.66667"></path></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div>
        <div className="MuiContainer-root content">
          <div className="MuiGrid-root MuiGrid-container css-13vzif4">
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-woiofv">
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2 css-1yesb70">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-lg-auto css-cu2yqo">
                  <h2 className="MuiTypography-root MuiTypography-body1 TitleSection_titleSection__SWIwp css-9l3uo3">
                    <span className="TitleSection_bottom__aXu12 tutorial-span" >
                      Tutorials
                    </span>
                  </h2>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
                  <div className="TitleSection_description__uBVJV">
                    Discover how to create powerful eCommerce videos in minutes with our library of tutorials.
                  </div>
                </div>
              </div>
            </div>
            <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-15j76c0">
              <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-4 css-q64nng">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-md-auto css-tvwd3d">
                  <button className="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-sizeMedium MuiButton-containedSizeMedium MuiButton-fullWidth tutorials_headerBtn__sGsgN Button_button__wouyg undefined css-186rtne" type="button">
                    <a href="#Basic" className='link'>Basic
                    </a>
                    <span className="MuiTouchRipple-root css-w0pj6f">
                    </span></button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
