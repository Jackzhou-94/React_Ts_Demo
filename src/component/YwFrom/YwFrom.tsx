import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';

export default class YwFrom extends Component<any, YwFromProps> {
    constructor(props: any[]) {
        super(props)
    }
    render() {
        console.log(this.props)
        let froms = this.props.froms
        return (
            <div>
                <Form layout="inline">
                    {
                        froms.map((item:any,index:number) => {
                            return (
                                <Form.Item key={index} label={item.label} >
                                    <Input
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="Username"
                                    />,
                                </Form.Item>
                            )
                        })
                    }
                    {/*   <Form.Item  label="Select" >
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}  />}
              placeholder="Username"
            />,
        </Form.Item> */}

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Log in
          </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
interface YwFromProps {
    froms: any[]
}