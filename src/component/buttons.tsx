import React, { Component } from 'react'
import { tools } from '../store/index'
import { observer } from 'mobx-react';
import Button from 'antd/lib/button';
import YwFrom from './YwFrom/YwFrom';


@observer
class buttons extends Component {
    constructor(props:any){
        super(props)
    }
    private change = () => {
          tools.setToken()
    }
    render() {
        const froms:any[]=[
            {
                label:'名称'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            },
            {
                label:'数量'
            }
        ]
        return (
            <div>
                <YwFrom froms={froms}></YwFrom>
                <h1>buttons {tools.token}</h1>
                <Button onClick={this.change}>修改</Button>
            </div>
        )
    }
}
export default buttons