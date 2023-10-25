import { ItemsTr, ItemsTd, ItemImg } from "../Body/body.js";
import Av from "../../Assets/Avocado Hass.jpg";

const ProductItem = ({ ProductName, brand }) => {
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
      <ItemsTd>Price</ItemsTd>
      <ItemsTd>Quantity</ItemsTd>
      <ItemsTd>Total</ItemsTd>
      <ItemsTd>Status</ItemsTd>
    </ItemsTr>
  );
};

export default ProductItem;
