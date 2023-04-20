import React from "react"

const About = () => {
  return (
    <div>
      <section class="tf-section tf-about style-2 about" id="swap">
        <div class="tf-container">
          <div class="row">
            <div class="col-xl-6 col-lg-5 col-md-12">
              <div
                class="tf-heading style-2 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h2 class="heading">DUCK SWAP</h2>
                <p class="about-component-sub-heading sub-heading">
                  Our swap offers the best of both worlds: $DUCK holders can
                  enjoy the lowest swap fees on the Ethereum, while liquidity
                  providers earn some of the highest rewards - even more than
                  uniswap - regardless of whether or not they hold $DUCK
                </p>
              </div>
              <div
                class="tf-heading style-2 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                {/* <!-- <h2 class="heading">Features</h2>
                                <br>
                                <p class="heading">+ Secure</p>
                                <p class="sub-heading">Using a crypto swap like DUCK ELON Coin (DUCK)gives users more control over their own assets, as they can manage their holdings directly without relying on a centralized third-party. This provides greater autonomy and reduces the risk of loss or theft from centralized exchanges.</p>
                                <br>
                                <p class="heading">+ Fast</p>
                                <p class="sub-heading"> Fast and Efficient: Crypto swaps like DUCK ELONE Coin (DUCK)offer fast and efficient exchange services</p>
                                <br>
                                <p class="heading">+ Low Swap fees</p>
                                <p class="sub-heading">As mentioned, crypto swaps operate without intermediaries, meaning users can transact without the need for banks or other financial institutions. This means lower fees, faster transactions, and greater control over one's own assets</p>
                                <br>
                                <p class="heading">+ Decentralized</p>
                                <p class="sub-heading">Meaning they operate on a peer-to-peer network of computers rather than being controlled by a single central authority. This provides greater security and transparency.</p> --> */}
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <img
                src="https://ducketh.fun/assets/images/swap.png"
                class="ani4"
              />
            </div>
            <h2 class="heading col-12 col-xxl-2" id="features-heading">
              Features
            </h2>
            <div class="tf-container2 col-12 col-xxl-10">
              <div class="row">
                <div class="col-md-12"></div>
                <div class="col-md-6 col-sm-6">
                  <div
                    class="tf-step style2  wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div class="step-title">
                      <div class="sub-number">01</div>
                      <h3>Secure</h3>
                    </div>
                    <p>
                      Using a crypto swap like DUCK ELON Coin (DUCK)gives users
                      more control over their own assets, as they can manage
                      their holdings directly without relying on a centralized
                      third-party. This provides greater autonomy and reduces
                      the risk of loss or theft from centralized exchanges.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div
                    class="tf-step style2 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div class="step-title">
                      <div class="sub-number">02</div>
                      <h3>Fast</h3>
                    </div>
                    <p>
                      Fast and Efficient: Crypto swaps like DUCK ELON Coin
                      (DUCK)offer fast and efficient exchange services allowing
                      users to exchange their tokens in a matter of seconds.
                      This is because there is no need for intermediaries, and
                      the entire process is automated, reducing the time it
                      takes to complete a transaction.
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div
                    class="tf-step style2 wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div class="step-title">
                      <div class="sub-number">03</div>
                      <h3>Low Swap fees</h3>
                    </div>
                    <p>
                      As mentioned, crypto swaps operate without intermediaries,
                      meaning users can transact without the need for banks or
                      other financial institutions. This means lower fees,
                      faster transactions, and greater control over one's own
                      assets
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6">
                  <div
                    class="tf-step style2 wow fadeInUp"
                    style={{
                      visibility: "visible",
                      animationName: "fadeInUp",
                      paddingBottom: "4.2rem",
                    }}
                  >
                    <div class="step-title">
                      <div class="sub-number">04</div>
                      <h3>Decentralized</h3>
                    </div>
                    <p>
                      Meaning they operate on a peer-to-peer network of
                      computers rather than being controlled by a single central
                      authority. This provides greater security and
                      transparency.
                    </p>
                    <br />
                  </div>
                </div>
                <div
                  class="col-md-12 wow fadeInUp"
                  style={{ visibility: "visible", animationName: "fadeInUp" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
