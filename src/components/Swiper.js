import React, { useEffect, useState } from "react"

const Swiper = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="px-4">
      <swiper-container>
        <swiper-slide>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-next"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 1"
          >
            <div class="slider-item">
              <div class="tf-slider-item style-3">
                <div class="content-inner">
                  <h1 class="heading mb0">
                    WITH
                    <span class="animationtext clip">
                      <span class="cd-words-wrapper">
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-visible">$DUCK</span>
                      </span>
                    </span>
                  </h1>
                  <h1 class="heading"> THERE’S A NEW BOSS IN TOWN!</h1>
                  <p class="sub-heading">
                    Discover the power of $DUCK – join the most fastest growing
                    meme community on the Ethereum, run and controlled by you.
                    Claim your stake in the future now, and witness the rapid
                    rise of a phenomenon that's taking the world by storm on
                    social media!
                  </p>
                  <div class="btn-slider ">
                    <a href="#" class="tf-button" target="_blank">
                      BUY TOKEN
                    </a>
                    <a href="#" class="tf-button style-2" target="_blank">
                      SEE CHART
                    </a>
                  </div>
                  <footer class="footer style-5">
                    <ul
                      class="social-item wow fadeInRight"
                      data-wow-duration="1.5s"
                      //   style="visibility: visible; animation-duration: 1.5s;;"
                    >
                      <li>
                        <a
                          href="https://twitter.com/DUCKELONEcoin"
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
                  </footer>
                </div>
                <div class="image">
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider.png"
                    alt="Image"
                    class="ani5"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider2.png"
                    alt="Image"
                    class="ani4 img-1"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider3.png"
                    alt="Image"
                    class="ani3 img-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-next"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 1"
          >
            <div class="slider-item">
              <div class="tf-slider-item style-3">
                <div class="content-inner">
                  <h1 class="heading mb0">
                    WITH
                    <span class="animationtext clip">
                      <span class="cd-words-wrapper">
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-visible">$DUCK</span>
                      </span>
                    </span>
                  </h1>
                  <h1 class="heading"> THERE’S A NEW BOSS IN TOWN!</h1>
                  <p class="sub-heading">
                    Discover the power of $DUCK – join the most fastest growing
                    meme community on the Ethereum, run and controlled by you.
                    Claim your stake in the future now, and witness the rapid
                    rise of a phenomenon that's taking the world by storm on
                    social media!
                  </p>
                  <div class="btn-slider ">
                    <a href="#" class="tf-button" target="_blank">
                      BUY TOKEN
                    </a>
                    <a href="#" class="tf-button style-2" target="_blank">
                      SEE CHART
                    </a>
                  </div>
                  <footer class="footer style-5">
                    <ul
                      class="social-item wow fadeInRight"
                      data-wow-duration="1.5s"
                      //   style="visibility: visible; animation-duration: 1.5s;;"
                    >
                      <li>
                        <a
                          href="https://twitter.com/DUCKELONEcoin"
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
                  </footer>
                </div>
                <div class="image">
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider.png"
                    alt="Image"
                    class="ani5"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider2.png"
                    alt="Image"
                    class="ani4 img-1"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider3.png"
                    alt="Image"
                    class="ani3 img-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div
            class="swiper-slide swiper-slide-duplicate swiper-slide-active swiper-slide-duplicate-next"
            data-swiper-slide-index="0"
            role="group"
            aria-label="1 / 1"
          >
            <div class="slider-item">
              <div class="tf-slider-item style-3">
                <div class="content-inner">
                  <h1 class="heading mb0">
                    WITH
                    <span class="animationtext clip">
                      <span class="cd-words-wrapper">
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-hidden">$DUCK</span>
                        <span class="item-text is-visible">$DUCK</span>
                      </span>
                    </span>
                  </h1>
                  <h1 class="heading"> THERE’S A NEW BOSS IN TOWN!</h1>
                  <p class="sub-heading">
                    Discover the power of $DUCK – join the most fastest growing
                    meme community on the Ethereum, run and controlled by you.
                    Claim your stake in the future now, and witness the rapid
                    rise of a phenomenon that's taking the world by storm on
                    social media!
                  </p>
                  <div class="btn-slider ">
                    <a href="#" class="tf-button" target="_blank">
                      BUY TOKEN
                    </a>
                    <a href="#" class="tf-button style-2" target="_blank">
                      SEE CHART
                    </a>
                  </div>
                  <footer class="footer style-5">
                    <ul
                      class="social-item wow fadeInRight"
                      data-wow-duration="1.5s"
                      //   style="visibility: visible; animation-duration: 1.5s;;"
                    >
                      <li>
                        <a
                          href="https://twitter.com/DUCKELONEcoin"
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
                  </footer>
                </div>
                <div class="image">
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider.png"
                    alt="Image"
                    class="ani5"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider2.png"
                    alt="Image"
                    class="ani4 img-1"
                  />
                  <img
                    src="https://ducketh.fun/assets/images/slider/logoimageslider3.png"
                    alt="Image"
                    class="ani3 img-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  )
}

export default Swiper
