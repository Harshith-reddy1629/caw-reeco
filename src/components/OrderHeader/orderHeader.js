import styled from "styled-components";

export const OrderHeadercontainer = styled.div`
  width: 100vw;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 2px 4px #ccd;
  padding: 8px 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;

export const OrderDirection = styled.p`
  padding: 0;
  margin: 0;
  color: #666;
`;

export const OrderText = styled.p`
  //   padding: 0;
  margin: 0;
  font-weight: bold;
`;

export const OrdersD = styled.div`
  display: flex;
  //   width: 100%;
  justify-content: space-between;
`;
export const OrdersAproval = styled.div`
  display: flex;
  gap: 30px;
`;

export const BackBtn = styled.button`
  all: unset;
  border-radius: 40px;
  padding: 4px 13px;
  border: 1px solid #1e633f;
  color: #1e633f;
  font-size: 14px;
`;

export const ApproveBtn = styled.button`
  all: unset;
  border-radius: 40px;
  padding: 4px 13px;
  border: 1px solid #1e633f;
  background-color: #1e633f;
  font-size: 14px;
  color: #fff;
`;
