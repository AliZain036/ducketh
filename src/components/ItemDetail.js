import React from "react"
import tokenomicsimage from "../assets/images/tokenomicsimage.png"

const ItemDetail = () => {
  return (
    <div>
      <section class="tf-item-detail item-detail" id="token">
        <div class="tf-container">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <div class="tf-item-detail-image">
                <img src={tokenomicsimage} alt="Image" class="ani5" />
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="tf-item-detail-inner">
                <h2 class="title">TOKENOMICS</h2>
                <p class="des">
                  We prioritize growth and sustainability. Our transaction fees
                  are structured to ensure the longevity of the project, and we
                  offer incentives for long-term $DUCK holders to "HODL" by
                  implementing the following fees.
                </p>
                <div class="infor-item-wrap">
                  <div class="infor-item-box">
                    <div class="category">0%</div>
                    <h4 class="name">DEVELOPMENT</h4>
                  </div>
                  <div class="infor-item-box">
                    <div class="category">0%</div>
                    <h4 class="name">BUYBACK &amp; BURN</h4>
                  </div>
                  <div class="infor-item-box">
                    <div class="category">0%</div>
                    <h4 class="name">MARKETING</h4>
                  </div>
                </div>
                <div class="group-btn">
                  <a
                    href="https://app.uniswap.org/#/swap"
                    target="_blank"
                    class="tf-button opensea"
                  >
                    {/* <i class="fa-regular fa-bag-shopping"></i> */}
                    BUY NOW
                  </a>
                  <div class="group-btn">
                    <button
                      class="tf-button opensea"
                      onclick="myFunction()"
                      value="#"
                    >
                      COPY CONTRACT
                    </button>
                    <input
                      class="textarea"
                      type="text"
                      value="#"
                      id="myInput"
                    />
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

export default ItemDetail
