import React, { useState } from "react"

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1)
  return (
    <div>
      <section className="tf-faq tf-section tf-faq-ss faq">
        <div className="tf-container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div
                className="title-ss wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <h3>FAQ</h3>
              </div>
            </div>

            <div className="col-md-8">
              <div
                className="tf-flat-accordion2 wow fadeInUp"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="flat-toggle2 active">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6
                      className={`toggle-title ${
                        activeFaq === 1 ? "active" : ""
                      }`}
                    >
                      How Do I Purchase $DUCK?
                    </h6>
                    {activeFaq === 1 && (
                      <i
                        class="fa-solid fa-minus"
                        onClick={() => setActiveFaq(0)}
                      ></i>
                    )}
                    {activeFaq != 1 && (
                      <i
                        class="fa-solid fa-plus accordion-plus-icon"
                        onClick={() => setActiveFaq(1)}
                      ></i>
                    )}
                  </div>
                  <div
                    className={`toggle-content ${
                      activeFaq === 1 ? "d-block" : "d-none"
                    }`}
                  >
                    <p>
                      $DUCK is a token originating on the Ethereum. You can buy
                      it on uniswap by purchasing ETHand swapping it for $DUCK
                      tokens. Please use slippage of 10%+ when buying or selling
                      $DUCK on uniswap. Our contract address is #.
                    </p>
                  </div>
                </div>
                <div className="flat-toggle2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6
                      className={`toggle-title ${
                        activeFaq === 2 ? "active" : ""
                      }`}
                    >
                      How Do Our Tokenomics Work?
                    </h6>
                    {activeFaq === 2 && (
                      <i
                        class="fa-solid fa-minus"
                        onClick={() => setActiveFaq(0)}
                      ></i>
                    )}
                    {activeFaq != 2 && (
                      <i
                        class="fa-solid fa-plus accordion-plus-icon"
                        onClick={() => setActiveFaq(2)}
                      ></i>
                    )}
                  </div>
                  <div
                    className={`toggle-content ${
                      activeFaq === 2 ? "d-block" : "d-none"
                    }`}
                  >
                    <p>
                      If you are purchasing $DUCK through the uniswap
                      Decentralized Exchange, the tax will be the following. Tax
                      On Buys and Sells: 5% REFLECTION, 4% MARKETING, 1% BUYBACK
                      and BURN.
                    </p>
                  </div>
                </div>
                <div className="flat-toggle2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6
                      className={`toggle-title ${
                        activeFaq === 3 ? "active" : ""
                      }`}
                    >
                      Will The Contract be Renounced of Ownership?
                    </h6>
                    {activeFaq === 3 && (
                      <i
                        class="fa-solid fa-minus"
                        onClick={() => setActiveFaq(0)}
                      ></i>
                    )}
                    {activeFaq != 3 && (
                      <i
                        class="fa-solid fa-plus accordion-plus-icon"
                        onClick={() => setActiveFaq(3)}
                      ></i>
                    )}
                  </div>
                  <div
                    className={`toggle-content ${
                      activeFaq === 3 ? "d-block" : "d-none"
                    }`}
                  >
                    <p>
                      Yes, The contract is already renounced of ownership. You
                      can check it on the following link:
                    </p>
                    <h5 className="name">
                      <a
                        className="text-decoration-none contract-link"
                        href="https://ercscan.com/tx/0xe18c811573be1dedc047c1857e6f2ae0b8472268ace815ef392c1babafaff88d"
                      >
                        https://ercscan.com/tx/0xe18c811573be1dedc047c1857e6f2ae0b8472268ace815ef392c1babafaff88d
                      </a>
                    </h5>
                    <p></p>
                  </div>
                </div>
                <div className="flat-toggle2">
                  <div className="d-flex justify-content-between align-items-center">
                    <h6
                      className={`toggle-title ${
                        activeFaq === 4 ? "active" : ""
                      }`}
                    >
                      What Is The Total Supply?
                    </h6>
                    {activeFaq === 4 && (
                      <i
                        class="fa-solid fa-minus"
                        onClick={() => setActiveFaq(0)}
                      ></i>
                    )}
                    {activeFaq != 4 && (
                      <i
                        class="fa-solid fa-plus accordion-plus-icon"
                        onClick={() => setActiveFaq(4)}
                      ></i>
                    )}
                  </div>
                  <div
                    className={`toggle-content ${
                      activeFaq === 4 ? "d-block" : "d-none"
                    }`}
                  >
                    <p>The total supply of tokens is 1,000,000,000,000.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
