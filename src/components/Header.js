import React, { useState } from "react"

const Header = () => {
  const [isMobileButtonActive, setIsMobileButtonActive] = useState(false)
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false)
  return (
    <>
      <header className={`header ${isDarkModeEnabled ? "is_dark" : ""}`}>
        <div className="tf-container">
          <div className="row">
            <div className="col-md-12">
              <div id="site-header-inner">
                <div id="site-logo" className="clearfix">
                  <div id="site-logo-inner">
                    <a href="index.html" rel="home" className="main-logo">
                      <img
                        id="logo_header"
                        src="https://ducketh.fun/assets/images/logo/logo.png"
                        alt="Image"
                      />
                    </a>
                  </div>
                </div>

                <div className="header-center d-none d-lg-block">
                  <nav id="main-nav" className="main-nav">
                    <ul id="menu-primary-menu" className="menu">
                      <li className="menu-item current-menu-item">
                        <a href="index.html">HOME</a>
                      </li>

                      <li className="menu-item">
                        <a href="#elone">ELON TWEETS</a>
                      </li>

                      <li className="menu-item">
                        <a href="#reward">REWARD</a>
                      </li>

                      <li className="menu-item ">
                        <a href="#token">TOKENOMICS</a>
                      </li>

                      <li className="menu-item">
                        <a href="#roadmap">ROADMAP</a>
                      </li>

                      <li className="menu-item">
                        <a href="#team">WHITEPAPER</a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="header-right">
                  <div className="header-right">
                    <a
                      href="#"
                      className="mode-switch"
                      onClick={() => setIsDarkModeEnabled((prev) => !prev)}
                    >
                      {isDarkModeEnabled === false && (
                        <img
                          id="img-mode"
                          src="https://ducketh.fun/assets/images/icon/moon.png"
                          alt="Image"
                        />
                      )}
                      {isDarkModeEnabled === true && (
                        <img
                          id="img-mode"
                          src="https://ducketh.fun/assets/images/icon/sun.png"
                          alt="Image"
                        />
                      )}
                    </a>
                    <div className="group-2"></div>
                    <a
                      href="https://t.me/DuckPortal"
                      target="_blank"
                      className="tf-button connect"
                    >
                      <i className="fab fa-telegram"></i>
                      <span>TELEGRAM</span>
                    </a>
                  </div>
                </div>

                <div
                  className={`mobile-button ${
                    isMobileButtonActive ? "active" : ""
                  }`}
                  onClick={() => {
                    setIsMobileButtonActive((prev) => !prev)
                  }}
                >
                  <span></span>
                </div>
                <nav
                  id="main-nav-mobi"
                  class={`main-nav ${isMobileButtonActive ? "" : "d-none"}`}
                >
                  <ul id="menu-primary-menu" class="menu">
                    <li class="menu-item current-menu-item">
                      <a href="index.html">HOME</a>
                    </li>

                    <li class="menu-item">
                      <a href="#elone">ELON TWEETS</a>
                    </li>

                    <li class="menu-item">
                      <a href="#reward">REWARD</a>
                    </li>

                    <li class="menu-item ">
                      <a href="#token">TOKENOMICS</a>
                    </li>

                    <li class="menu-item">
                      <a href="#roadmap">ROADMAP</a>
                    </li>

                    <li class="menu-item">
                      <a href="#team">WHITEPAPER</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
