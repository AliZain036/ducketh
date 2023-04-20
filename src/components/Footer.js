import React from "react"
import logobottom from "../assets/images/logobottom.png"

const Footer = () => {
  return (
    <div>
      <footer class="footer2 style-2 footer-ss footer">
        <div class="footer-inner">
          <div class="tf-container">
            <div class="row">
              <div class="col-md-12">
                <h2 class="title">JOIN OUR COMMUNITY</h2>
                <p class="content">
                  Invest in $DUCK to become part of a growing community{" "}
                </p>
                <div class="col-md-12">
                  <h2 class="title">Contact Us</h2>
                  <p class="content">info@ducketh.fun</p>
                  <div class="group-btn">
                    <a
                      href="https://twitter.com/DUCKELONcoin"
                      target="_blank"
                      class="tf-button discord"
                    >
                      <i class="fab fa-twitter"></i>
                      <span>TWITTER</span>
                    </a>
                    <a
                      href="https://t.me/DuckPortal"
                      target="_blank"
                      class="tf-button"
                    >
                      <i class="fab fa-telegram"></i>
                      <span>TELEGRAM</span>
                    </a>
                  </div>
                  <ul class="social-item ">
                    <li>
                      <a
                        href="https://twitter.com/DUCKELONcoin"
                        target="_blank"
                      >
                        <i class="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://t.me/DuckPortal" target="_blank">
                        <i class="fab fa-telegram-plane"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://medium.com/@DUCKELONEcoin"
                        target="_blank"
                      >
                        <i class="fab fa-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.reddit.com/r/DUCKELONE/"
                        target="_blank"
                      >
                        <i class="fab fa-reddit"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bottom-inner mt-50">
            <div class="tf-container">
              <div class="row">
                <div class="col-md-12">
                  <div class="bottom">
                    <div class="content-left">
                      <img src={logobottom} alt="Image" />
                      <p class="copy-right">
                        DUCK ELON 2023 - ALL rights reserved
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
