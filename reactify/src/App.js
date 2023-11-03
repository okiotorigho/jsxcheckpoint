import { Card } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import curitiba from "./images/curitiba.png";
import { product } from "./product";
import { Name } from "./components/Name";
import { Price } from "./components/Price";
import { Description } from "./components/Description";
import { Image } from "./components/Image";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "";
  return (
    <div className="App">
      <Card className="w-75 mx-auto mt-4 rounded-5">
        <Card.Body>
          <Card.Title>text</Card.Title>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <h3>hello {name ? name : "there"}</h3>
      {name && <img src={curitiba}></img>}
    </div>
  );
}

export default App;
