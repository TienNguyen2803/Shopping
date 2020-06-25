import React, { Component } from "react";
import { Card, Button } from "antd";
import { ShoppingCartOutlined  } from '@ant-design/icons';

class Products extends Component {



  Buy = () =>{
    alert(this.props.name)
  }  
  
  render() {
    const {product} = this.props;
    return (
        
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
          <h3>Tên sản phẩm : { product.name} </h3>
          <h3>Số lượng : { product.quantity} </h3>
          <h3>Loại :{ product.category} </h3>
          <h3>Trạng thái: { product.status?"Còn hàng" : "Hết hàng"} </h3>
        <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large" onClick={this.Buy}>
          Buy
        </Button>
      </Card>
    );
  }
}

export default Products;
