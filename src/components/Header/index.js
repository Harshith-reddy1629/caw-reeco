import { TfiShoppingCart } from "react-icons/tfi";
import { BiChevronDown } from "react-icons/bi";

import { HeaderContainer, HeaderRoutes, HeaderCartAndUser } from "./header";

const Header = () => (
  <HeaderContainer>
    <HeaderRoutes>
      <img
        src="https://reeco.io/assets/logo.44b75468.svg"
        alt="header"
        height="23"
      />
      <li>Stores</li>
      <li>Orders</li>
      <li>Analytics</li>
    </HeaderRoutes>
    <HeaderCartAndUser>
      <li>
        <TfiShoppingCart />
      </li>
      <li style={{ display: "flex", alignItems: "center" }}>
        Hello, James <BiChevronDown />
      </li>
    </HeaderCartAndUser>
  </HeaderContainer>
);

export default Header;
