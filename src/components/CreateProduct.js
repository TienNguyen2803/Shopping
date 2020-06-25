import React, { Component } from "react";
import { Form, Modal, Input, Button, InputNumber, Select } from "antd";
import { PlusCircleOutlined, DownOutlined } from "@ant-design/icons";
import randomString from "random-string";
const { Option } = Select;

class CreateProduct extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: randomString(),
      name: "",
      visible : this.props.product? true : false,
      quantity: 0,
      resetModal:false,
      category: "Iphone",
      status: false,
      product : this.props.product
    };
  }
  handleOk = () => {
    var _quantity = this.state.quantity;
    
    this.setState({
        reset : true,
        visible : false,
        key : randomString(),
        status : _quantity === 0 ? false :true
    })
    this.props.addProduct(this.state);
    
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false,
    });
  };
  showModal = () => {
    this.setState({
      visible: true,
      reset : false
    });
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
    const { visible, quantity ,category,reset, product} = this.state;
    console.log(product)
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
          title="Title"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form.Item label="Tên sản phẩm">
            <Input placeholder="Nhập tên sản phẩm"  onChange={this.onChangeName}     />
          </Form.Item>
          <Form.Item label="Số lượng">
            <InputNumber
              defaultValue={0}
             
              min={0}
              onChange={this.onChangeQuantity}
            />
          </Form.Item>
          <Form.Item label="Loại">
            <Select
              defaultValue={category}
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

export default CreateProduct;
