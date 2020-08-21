import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Product.css";

function Product({ image, price, desc, name, id, subtitle }) {
  return (
    <div className='product'>
      <Link
        to={"/product/" + id}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card className='m-2 card' style={{ borderRadius: "10px" }}>
          <CardImg
            top
            width='100%'
            height='250px'
            src={image}
            alt='Card image cap'
          />
          <CardBody>
            <CardText style={{ fontWeight: "700", fontSize: "25px" }}>
              {price}
            </CardText>
            <CardTitle>{name}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

export default Product;
