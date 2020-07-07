import React, { Component } from 'react';
import {  Button, Table, Tag, Space} from "antd";
import * as actions from './../actions/index'
;import {connect}  from 'react-redux';
class ProductsList extends Component {
  
    render() {
        
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
                  <Button type="primary" onClick={() => {this.props.onDelete(record.key)}}>Xóa</Button>
                  <Button type="primary" onClick={() => {this.props.onEdit(record.key) ; this.props.onShowPopup()}}>Sửa</Button>
                </Space>
              ),
            },
          ];
        
        return (
            <div>
                 <Table columns={columns} dataSource={this.props.products} />
            </div>
        );
    }
}

const mapStateToProp = (state) => {
    return {
      products : state.products
    }
}
const mapDispatchToProp  = (dispatch, props) => {
  return {
    onEdit : (id) => {
      dispatch(actions.editProduct(id))
    },
    onDelete : (id) => {
      dispatch(actions.deleteProduct(id))
    },
    onShowPopup : () => {
      dispatch(actions.isShowPopup())
    }
  }
}
export default connect(mapStateToProp,mapDispatchToProp)(ProductsList);