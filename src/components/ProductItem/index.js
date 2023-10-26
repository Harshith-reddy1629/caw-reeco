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
  TriggerBtn,
  ProductItemName,
  StatusSpan,
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
        <ProductItemName>
          <ItemImg src={Av} alt="item" />
          {ProductName}
        </ProductItemName>
      </ItemsTd>
      <ItemsTd>{brand}</ItemsTd>
      <ItemsTd>${price} / 6*1LB</ItemsTd>
      <ItemsTd>{quantity} x 6*1LB </ItemsTd>
      <ItemsTd>${price * quantity}</ItemsTd>
      <ItemsTd>
        <StatusSpan>
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
            <Popup
              modal
              trigger={
                <TriggerBtn type="button">
                  <RxCross1 onClick={() => {}} size={18} />
                </TriggerBtn>
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
                      onClick={() => {
                        DisApprove(false);
                        close();
                      }}
                    >
                      No
                    </YesNoBtns>
                    <YesNoBtns
                      type="button"
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

            <StatusApproveBtn>Edit</StatusApproveBtn>
          </div>
        </StatusSpan>
      </ItemsTd>
    </ItemsTr>
  );
};

export default ProductItem;
