import {
  OrderHeadercontainer,
  OrderText,
  OrderDirection,
  OrdersD,
  OrdersAproval,
  BackBtn,
  ApproveBtn,
} from "./orderHeader";

const OrderHeader = () => (
  <OrderHeadercontainer>
    <OrderDirection>
      Order >{" "}
      <span style={{ textDecoration: "underline" }}>Order 32457ABC</span>
    </OrderDirection>
    <OrdersD>
      <OrderText>Order 32457ABC</OrderText>
      <OrdersAproval>
        <BackBtn>Back</BackBtn>
        <ApproveBtn>Approve Order</ApproveBtn>
      </OrdersAproval>
    </OrdersD>
  </OrderHeadercontainer>
);

export default OrderHeader;
