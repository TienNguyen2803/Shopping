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
import {connect} from "react-redux";
import * as actions from "./../actions/index";
import ProductsList from "./ProductsList";
import "./common.css";

const { Search } = Input;

class Contents extends Component {
  

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
  

  render() {
    const {IsActive, products  } = this.props;
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
          <CreateProduct/>
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
          <ProductsList/>
        </Row>
        <Row>
          <Button type="primary" htmlType="submit" onClick={() => this.props.isShowProducts()}>
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
const mapStateToProps = (state) => {
  return {
      IsActive : state.isShowForm,
      products : state.products
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    isShowProducts : () => {
      dispatch(actions.isShowProducts())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Contents);
