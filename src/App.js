import "./App.css";

import Header from "./components/Header";
import OrderHeader from "./components/OrderHeader";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Header />

      <OrderHeader />

      <Body />
    </div>
  );
}

export default App;
