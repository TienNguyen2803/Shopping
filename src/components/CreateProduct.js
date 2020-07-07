import React, { Component } from "react";
import { Form, Modal, Input, Button, InputNumber, Select } from "antd";
import { PlusCircleOutlined, DownOutlined } from "@ant-design/icons";
import randomString from "random-string";
import * as actions from './../actions/index'
;import {connect} from 'react-redux';

const { Option } = Select;

class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: randomString(),
      name: "",
      quantity: 0,
      resetModal:false,
      category: "Iphone",
      status: false,
      product : this.props.product
    };
  }
  handleOk = () => {
    this.props.onShowPopup();
    let product = {
      key: this.props.productEditing.key?this.props.productEditing.key : randomString(),
      name: this.state.name?this.state.name : this.props.productEditing.name ,
      quantity: this.state.quantity,
      category: this.state.category,
      status: this.state.quantity === 0 ? false : true,
    }
    console.log(product)
    this.props.AddProduct(product);
    //this.props.addProduct(this.state);
    
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.props.onShowPopup();
  };
  showModal = () => {
    this.props.onShowPopup();
    this.props.onClearProductEditing();
  };
  onChangeQuantity = (e) => {
    this.setState({
        quantity : e
    })
  };
  onChangeCategory = (e) => {
    this.setState({
        category : e
    })
  };
  onChangeName = (e) => {
      this.setState({
          name : e.target.value
      })
  }
  render() {
    const { quantity ,category, product} = this.state;
    const {productEditing} = this.props;
    const {visible,reset} = this.props.isShowPopup;
    const titleName = this.props.productEditing.key? "Cập nhật sản phẩm" : "Thêm sản phẩm"
    return (
      <div>
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          size="middle"
          onClick={this.showModal}
        >
         Thêm sản phẩm
        </Button>
        <Modal
          destroyOnClose={reset}
          title= {titleName}
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form.Item label="Tên sản phẩm">
            <Input placeholder="Nhập tên sản phẩm"  defaultValue={productEditing.name? productEditing.name : ""} onChange={this.onChangeName}     />
          </Form.Item>
          <Form.Item label="Số lượng">
            <InputNumber
              defaultValue={productEditing.quantity? productEditing.quantity : 0}
              min={0}
              onChange={this.onChangeQuantity}
            />
          </Form.Item>
          <Form.Item label="Loại">
            <Select
              defaultValue={productEditing.category ? productEditing.category : category}
              style={{ width: 120 }}
              onChange={this.onChangeCategory}
            >
              <Option  value="Iphone">Iphone</Option>
              <Option value="Sam Sung">Sam Sung</Option>
              <Option value="Oppo">Oppo</Option>
            </Select>
          </Form.Item>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
      isShowPopup : state.isShowPopup,
      productEditing : state.productEditing
  }
}
const mapDispatchToProps = (dispatch , props) => {
  return {
    AddProduct :  (product) => {
       dispatch(actions.addProduct(product))
    },
    onShowPopup : () => {
      dispatch(actions.isShowPopup())
    },
    onClearProductEditing : () => {
      dispatch(actions.onClearProductEditing())
    }
  }

}
export default connect(mapStateToProps,mapDispatchToProps)(CreateProduct);
