import React, { Component } from 'react';
import {  Button, Table, Tag, Space} from "antd";
class ProductsList extends Component {

    constructor(props) {
      super(props);
      this.state = {
        products : this.props.products
      }
    }
     componentWillReceiveProps(nextProps){
       if(nextProps && nextProps.products){
          this.setState({
            products : [...nextProps.products]
          })
       }
     }

    render() {
        const {  deleteProduct,onEdit} = this.props;
        
        const columns = [
            {
              title: 'Tên sản phẩm',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Số lượng',
              dataIndex: 'quantity',
              key: 'quantity',
            },
            {
              title: 'Loại',
              dataIndex: 'category',
              key: 'category',
            },
            {
              title: 'Trạng thái',
              key: 'status',
              dataIndex: 'status',
              render:  status => ( 
                   <Tag color={status?"green":"volcano"}>
                    {status?"Còn hàng" : "Hết hàng"}
                  </Tag>
              )
            },  
            {
              title: '',
              key: 'action',
              render: (text, record) => (
                <Space size="middle">
                  <Button type="primary" onClick={() => {deleteProduct(record.key)}}>Xóa</Button>
                  <Button type="primary" onClick={() => {onEdit(record.key)}}>Sửa</Button>
                </Space>
              ),
            },
          ];
        
        return (
            <div>
                 <Table columns={columns} dataSource={this.state.products} />
            </div>
        );
    }
}

export default ProductsList;