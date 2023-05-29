import React, { useState } from "react";
import { IoIosTimer } from "react-icons/io";
import image from "../assets/Capture.PNG";

const RightPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [totalAmount, setTotalAmount] = useState(0);
  const [calGst, setCalGst] = useState(0);

  const handlePlanSelection = (plan, value) => {
    const DiscountedOffer = 18500 - value;

    setSelectedPlan(plan);
    setTotalAmount(DiscountedOffer);

    // console.log("taotal amont", totalAmount);
    // console.log(value);
    console.log(DiscountedOffer);
    const gstAmount = value + (value * 18) / 100;
    setCalGst(gstAmount);
  };

  return (
    <div className="rightPage">
      <div className="formPage">
        <div className="right-section">
          <div className="step">
            <div className="circle">1</div>
            <span>Sign Up</span>
          </div>

          <div className="step">
            <div className="circle">2</div>
            <span>Subscribe</span>
          </div>
        </div>
        <div className="subscription-plan">
          <h4>Select your subscription plan</h4>
        </div>
        {/* ................................................. */}

        {/* ............................experimental................................. */}
        <div className="subscription-plan-box">
          <div className="plan planExpire">
            <input type="radio" name="plan123" id="plan123" disabled />
            <label htmlFor="plan123">12 Months Subscription</label>{" "}
            <p>
              Total <span className="planofferp">₹ 99</span>
              <br />
              <span className="monthOffer">₹ 99/mo</span>
            </p>
          </div>
          <div
            className={`plan ${selectedPlan === "12 months" ? "selected" : ""}`}
            onClick={() => handlePlanSelection("12 months", 179)}
          >
            <input
              type="radio"
              name="plan"
              id="plan-12"
              checked={selectedPlan === "12 months"}
              onChange={() => handlePlanSelection("12 months", 179)}
            />
            <label htmlFor="plan-12">12 Months Subscription</label>
            <p>
              Total <span className="planofferp">₹ 179</span>
              <br />
              <span className="monthOffer">₹ 15/mo</span>
            </p>
          </div>
          <div
            className={`plan ${selectedPlan === "6 months" ? "selected" : ""}`}
            onClick={() => handlePlanSelection("6 months", 149)}
          >
            <input
              type="radio"
              name="plan"
              id="plan-6"
              checked={selectedPlan === "6 months"}
              onChange={() => handlePlanSelection("6 months", 149)}
            />
            <label htmlFor="plan-6">6 &nbsp; Months Subscription</label>
            <p>
              Total <span className="planofferp">₹ 149</span>
              <br />
              <span className="monthOffer">₹ 25/mo</span>
            </p>
          </div>
          <div
            className={`plan ${selectedPlan === "3 months" ? "selected" : ""}`}
            onClick={() => handlePlanSelection("3 months", 99)}
          >
            <input
              type="radio"
              name="plan"
              id="plan-3"
              checked={selectedPlan === "3 months"}
              onChange={() => handlePlanSelection("3 months", 99)}
            />
            <label htmlFor="plan-3">3&nbsp; Months Subscription</label>
            <p>
              Total <span className="planofferp">₹ 99</span>
              <br />
              <span className="monthOffer">₹ 33/mo</span>
            </p>
          </div>
        </div>

        {/* .......................................................... */}

        {/* .............................. ................... */}
        <div>
          <hr />
        </div>
        <div className="sub-fee">
          <h4>Subscription fee</h4>
          <h5>₹ 18,500</h5>
        </div>
        <div className="limited">
          <div>
            {" "}
            <h5>Limited time offer</h5>
            <p>
              <IoIosTimer /> Offer valid till 25th March 2023
            </p>
          </div>
          <h3>- ₹ {totalAmount}</h3>
        </div>
        <div className="total">
          <p>
            Total <span>(Incl. of 18%GST)</span>
          </p>
          <h2>{calGst}</h2>
        </div>
        <div className="buttons">
          <button className="btn1">CANCEL</button>
          <button className="btn2">PROCEED TO PAY</button>
        </div>
        <div className="img1">
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightPage;
