import {
  BodyContainer,
  OrderStatusContainer,
  OrderStatusContainerList,
  ListHText,
  ListPText,
  ItemsContainer,
  SearchContainer,
  SearchInput,
  SearchLabel,
  SearchbarContainer,
  ItemsTable,
  ItemsTr,
  ItemsTh,
} from "./body";

import Products from "../Items";

import { BsSearch } from "react-icons/bs";
import { FiPrinter } from "react-icons/fi";
import { BackBtn } from "../OrderHeader/orderHeader";
import ProductItem from "../ProductItem";

const Body = () => (
  <BodyContainer>
    <OrderStatusContainer>
      <OrderStatusContainerList>
        <ListPText>Supplier</ListPText>
        <ListHText>East Coast fruits & vegetables</ListHText>
      </OrderStatusContainerList>{" "}
      <hr />
      <OrderStatusContainerList>
        <ListPText>Shipping date</ListPText>
        <ListHText>Thu, Feb 10</ListHText>
      </OrderStatusContainerList>{" "}
      <hr />
      <OrderStatusContainerList>
        <ListPText>Total</ListPText>
        <ListHText>$ 1500</ListHText>
      </OrderStatusContainerList>{" "}
      <hr />
      <OrderStatusContainerList>
        <ListPText>Category</ListPText>
        <ListHText>East Coast fruits & vegetables</ListHText>
      </OrderStatusContainerList>{" "}
      <hr />
      <OrderStatusContainerList>
        <ListPText>Department</ListPText>
        <ListHText>300-444-678</ListHText>
      </OrderStatusContainerList>{" "}
      <hr />
      <OrderStatusContainerList>
        <ListPText>Status</ListPText>
        <ListHText>Awaiting for your approval</ListHText>
      </OrderStatusContainerList>{" "}
    </OrderStatusContainer>
    <ItemsContainer>
      <SearchContainer>
        <SearchbarContainer>
          <SearchInput type="search" placeholder="Search..." />
          <SearchLabel>
            {" "}
            <BsSearch />{" "}
          </SearchLabel>
        </SearchbarContainer>
        <div style={{ display: "flex", gap: "22px", alignItems: "center" }}>
          <BackBtn>Add item</BackBtn>
          <FiPrinter color="#1e633f" size={22} />
        </div>
      </SearchContainer>
      <ItemsTable>
        <thead>
          <ItemsTr>
            <ItemsTh>Product Name</ItemsTh>
            <ItemsTh>Brand</ItemsTh>
            <ItemsTh>Price</ItemsTh>
            <ItemsTh>Quantity</ItemsTh>
            <ItemsTh>Total</ItemsTh>
            <ItemsTh>Status</ItemsTh>
          </ItemsTr>
        </thead>
        <tbody>
          {Products.map((each) => (
            <ProductItem key={each.id} {...each} />
          ))}
        </tbody>
      </ItemsTable>
    </ItemsContainer>
  </BodyContainer>
);

export default Body;
