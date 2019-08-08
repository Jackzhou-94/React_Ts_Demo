import React from 'react';
import { Button, Modal, Calendar,Table, Menu, Icon} from 'antd'
import Tagger from './component/Taggle'
import Menus from './component/Menu'
const {SubMenu}=Menu

export default class App extends React.Component<{},IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      visible: false,
      current: 'mail',
    }
  }
  render() {
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ];
    
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ];
    return (
      <div className="App">
        <Menus></Menus>
       {/*  <Tagger></Tagger> */}
       {/*  <div>
          <Button type="primary" onClick={() => this.buttonClick()}>Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
        <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
          <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
        </div>
      

        <Table dataSource={dataSource} columns={columns} />; */}
      
      </div>
    )
  }
  public handleClick=(e:any)=>{
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  private onPanelChange=(value:any,mode:any)=>{
      console.log(value,mode)
  }
  public buttonClick = () => {
    this.setState({
      visible: true
    })
  }
  public handleOk = () => {
    this.setState({
      visible: false
    })
  }

}
/**
 * 定义数据规范
 * */ 
interface IAppState {
  visible: boolean
  current:string

}

