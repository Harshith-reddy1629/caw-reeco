import styled from "styled-components";

export const BodyContainer = styled.div`
  padding: 10px 100px;
  margin-top: 10px;
  height: calc(100% - 140px);
  overflow-x: auto;
`;

export const OrderStatusContainer = styled.ul`
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ddd;
  height: 100px;
  background-color: #fff;
  margin: 0;
  padding: 8px 12px;
  list-style-type: none;
  display: flex;
`;

export const OrderStatusContainerList = styled.li`
  margin: 0;
  padding: 10px 10px 10px 18px;
  width: calc(100% / 6);
  display: flex;
  flex-direction: column;
  //   justify-content: center;
`;

export const ListPText = styled.p`
  font-size: 12px;
  color: #444;
  margin: 0 0 4px 0;
  font-weight: 600;
`;

export const ListHText = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 600;
`;

export const ItemsContainer = styled.div`
  margin-top: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px 22px;
  background-color: #fff;
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SearchbarContainer = styled.div`
  display: flex;
  border: 1px solid #aaa;
  padding: 6px 12px;
  border-radius: 18px;
`;

export const SearchInput = styled.input`
  all: unset;
  font-size: 12px;
  width: 370px;
  ::placeholder {
  }
`;

export const SearchLabel = styled.label`
  font-size: 16px;
  margin-left: 6px;
`;

export const ItemsTable = styled.table`
  width: 100%;
  margin-top: 14px;
  border: 1px solid #ccc;
  border-radius: 15px;
`;
export const ItemsTr = styled.tr`
  box-shadow: 0 -1px 0 0px inset #999;
  border: 1px solid #555;
  margin-bottom: 2px;
  :nth-child(1) {
    width: 30%;
  }
  :nth-child(2) {
    width: 10%;
    text-align: start;
  }
  :nth-child(3) {
    width: 10%;
    text-align: start;
  }
  :nth-child(4) {
    width: 10%;
    text-align: start;
  }
  :nth-child(5) {
    width: 10%;
    text-align: start;
  }
  :nth-child(6) {
    text-align: start;
    width: 30%;
  }
`;

export const ItemsTh = styled.th`
  padding: 8px;
  color: #777;
`;
export const ItemsTd = styled.td`
  padding: 6px;
  font-size: 13px;
  color: #333;
`;

export const ItemImg = styled.img`
  height: 45px;
  width: 45px !important;
`;
