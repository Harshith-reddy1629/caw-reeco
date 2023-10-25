import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import {
  ItemsTr,
  ItemsTd,
  ItemImg,
  StatusApproveBtn,
  StatSpan,
  BtnsContainer,
  YesNoBtns,
  ClsBtn,
} from "../Body/body.js";

import Av from "../../Assets/Avocado Hass.jpg";

const ProductItem = ({ ProductName, brand }) => {
  const [price, setPrice] = useState(60.67);
  const [quantity, setQuantity] = useState(Math.round(Math.random() * 15));
  const [stat, setStat] = useState("");
  const [approval, setApproval] = useState(false);

  const Approval = () => {
    !approval && setStat("Approved");
    approval && setStat("");
    setApproval(!approval);
  };

  const DisApprove = (isUrgent) => {
    setApproval(false);
    isUrgent && setStat("Missing – Urgent");
    !isUrgent && setStat("Missing");
  };

  return (
    <ItemsTr>
      <ItemsTd>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            gap: "8px",
          }}
        >
          <ItemImg src={Av} alt="item" />
          {ProductName}
        </div>
      </ItemsTd>
      <ItemsTd>{brand}</ItemsTd>
      <ItemsTd>${price} / 6*1LB</ItemsTd>
      <ItemsTd>{quantity} x 6*1LB </ItemsTd>
      <ItemsTd>${price * quantity}</ItemsTd>
      <ItemsTd>
        <span
          style={{
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "flex-end",
            gap: "15px",
            alignItems: "center",
          }}
        >
          {!!stat && (
            <StatSpan ap={approval ? "true" : "false"}>{stat}</StatSpan>
          )}
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "50%",
              justifyContent: "space-evenly",
            }}
          >
            <BsCheckLg
              color={approval ? "green" : ""}
              onClick={Approval}
              size={20}
            />
            {/* <div className="popup-container"> */}
            <Popup
              modal
              trigger={
                <button
                  style={{
                    all: "unset",

                    width: "30%",
                  }}
                  type="button"
                >
                  <RxCross1 onClick={() => {}} size={18} />
                </button>
              }
            >
              {(close) => (
                <>
                  <ClsBtn onClick={() => close()}>x</ClsBtn>
                  <div>
                    <p style={{ fontWeight: "bold", margin: "0" }}>
                      Missing product
                    </p>
                    <p style={{ fontSize: "13px" }}>
                      is '{ProductName}' urgent?
                    </p>
                  </div>
                  <BtnsContainer>
                    <YesNoBtns
                      type="button"
                      className="trigger-button"
                      onClick={() => {
                        DisApprove(false);
                        close();
                      }}
                    >
                      No
                    </YesNoBtns>
                    <YesNoBtns
                      type="button"
                      className="trigger-button"
                      onClick={() => {
                        DisApprove(true);
                        close();
                      }}
                    >
                      Yes
                    </YesNoBtns>
                  </BtnsContainer>
                </>
              )}
            </Popup>
            {/* </div> */}

            <StatusApproveBtn>Edit</StatusApproveBtn>
          </div>
        </span>
      </ItemsTd>
    </ItemsTr>
  );
};

export default ProductItem;
