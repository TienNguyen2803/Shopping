import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Input,
  Dropdown,
  Menu,
  Table,
  Tag,
  Space,
} from "antd";
import Products from "./Products";
import CreateProduct from "./CreateProduct";

import ProductsList from "./ProductsList";
import "./common.css";

const { Search } = Input;

class Contents extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      products: [],
      IsActive: false,
      EditProduct : null
    };
  }
  ShowProduct = () => {
    this.setState({
      IsActive: !this.state.IsActive,
    });
  };
  AddProducts = (data) => {
    const object = {
      key: data.key,
      name: data.name,
      quantity: data.quantity,
      category: data.category,
      status: true,
    };

    this.setState(
      (prev) => ({
        ...prev,
        products: [...prev.products, object],
      }),
      () => {
        localStorage.setItem("products", JSON.stringify(this.state.products));
      }
    );
  };

  DeleteProduct = (key) => {
    let _products = this.state.products;
    _products.forEach((products, index) => {
      if (products.key === key) {
        _products.splice(index, 1);
        return;
      }
    });

    this.setState({
      products: _products,
    });
    localStorage.setItem("products", JSON.stringify(this.state.products));
  };

  onEdit = (key) => {
    console.log(key)
    let _products = this.state.products;
    let product = _products.find(x => x.key === key) ;
    this.setState({
       EditProduct : product
    })
    console.log(this.state.EditProduct)
    // this.setState({
    //   products: _products,
    // });
    // localStorage.setItem("products", JSON.stringify(this.state.products));
  };

  onGenerateData = () => {
    const products = [
      {
        key: "1",
        name: "Sam Sung E2",
        quantity: 32,
        category: "Sam sung",
        status: true,
      },
      {
        key: "2",
        name: "Oppo J1",
        quantity: 42,
        category: "Oppo",
        status: true,
      },
      {
        key: "3",
        name: "Apple Watch seri 3",
        quantity: 0,
        category: "Apple",
        status: false,
      },
    ];

    this.setState({
      products: products,
    });
    localStorage.setItem("products", JSON.stringify(products));
  };
  componentWillMount() {
    if (localStorage && localStorage.getItem("products")) {
      var products = JSON.parse(localStorage.getItem("products"));
      this.setState({
        products: products,
      });
    }
  }

  render() {
    const { products, IsActive } = this.state;
    const elements = products.map((pro, index) => {
      return (
        <Col span={8} key={index}>
          <Products key={index} product={pro} />
        </Col>
      );
    });
    return (
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 380 }}
      >
        <Row span={24}>
          <h2>Quản lý sản phẩm</h2>
          <Button type="primary" onClick={this.onGenerateData}>
            Generta data
          </Button>
        </Row>
        <Row className="mb-5">
          <CreateProduct 
                        addProduct={this.AddProducts}
                        product = {this.state.EditProduct} />
        </Row>
        <Row>
          <Col span={12}>
            <Search
              placeholder="Nhập từ khóa..."
              enterButton="Search"
              size="large"
              onSearch={(value) => console.log(value)}
            />
          </Col>
        </Row>
        <Row span={24}>
          <ProductsList
            products={products}
            deleteProduct={this.DeleteProduct}
            onEdit = {this.onEdit}
          />
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" onClick={this.ShowProduct}>
            Show
          </Button>
        </Row>
        <Row style={{ visibility: IsActive ? "visible" : "hidden" }}>
          {elements}
        </Row>
      </div>
    );
  }
}

export default Contents;
