import React from "react"
import Step1Image from "../assets/images/get-started-step-1.svg"
import Step2Image from "../assets/images/get-started-step-2.svg"
import Step3Image from "../assets/images/get-started-step-3.svg"

const GetStarted = () => {
  return (
    <div>
      <section class="tf-work-ss get-started">
        <div class="tf-container">
          <div class="row">
            <div class="col-md-12">
              <div
                class="title-ss wow fadeInUp mt-50"
                style={{ animationName: "fadeInUp", visibility: "visible" }}
              >
                <h3>
                  GET <span> STARTED</span>
                </h3>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 ">
              <div
                class="tf-work style-2  wow fadeInUp"
                style={{ animationName: "fadeInUp", visibility: "visible" }}
              >
                <div class="image">
                  <img id="work-5" src={Step1Image} alt="Image" />
                </div>
                <h5 class="step">STEP 1</h5>
                <h4 class="title">
                  <a
                    href="#"
                    target="_blank"
                    className="text-decoration-none"
                    id="buy-duck-tokens"
                  >
                    Buy $DUCK Tokens
                  </a>
                </h4>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 ">
              <div
                class="tf-work style-2 wow fadeInUp"
                style={{ animationName: "fadeInUp", visibility: "visible" }}
              >
                <div class="image">
                  <img id="work-4" src={Step2Image} alt="Image" />
                </div>
                <h5 class="step">STEP 2</h5>
                <h4 class="title">HODL</h4>
              </div>
            </div>
            <div class="col-xl-4 col-md-6 ">
              <div
                class="tf-work style-2 wow fadeInUp"
                style={{ animationName: "fadeInUp", visibility: "visible" }}
              >
                <div class="image">
                  <img id="work-7" src={Step3Image} alt="Image" />
                </div>
                <h5 class="step">STEP 3</h5>
                <h4 class="title">Enjoy the ride</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetStarted
