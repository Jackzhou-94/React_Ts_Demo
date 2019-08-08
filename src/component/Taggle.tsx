import React, { Component } from 'react'
import { Button, Modal, Calendar, Table, Menu, Icon, Input } from 'antd'

const { SubMenu } = Menu

export default class Taggle extends Component<{}, IuState> {
    constructor(props: any) {
        super(props)
        this.state = {
            button: false,
            table: false,
            state: 'button'
        }
    }
    render() {
        const style = {
            width: '200px'
        }
        const fun = () => {
            if (this.state.state === 'button') {
                return <div>
                    <Button type="primary" >Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                    <Button type="link">Link</Button>
                </div>
            } else if (this.state.state === 'table') {
                return (<div>
                    <Input placeholder="Basic usage" />
                </div>)

            }
        }
        return (
            <div>
                {/*    <Menu onClick={(e) => this.handleClick(e)} mode="vertical">
                    <Menu.Item>菜单项</Menu.Item>
                    <SubMenu title="子菜单">
                        <Menu.Item>子菜单项</Menu.Item>
                    </SubMenu>
                </Menu> */}

                <Menu style={style} onClick={(e) => this.handleClick(e)} mode="vertical">
                    <Menu.Item key="button">
                        <Icon type="mail" />
                        button
                 </Menu.Item>
                    <Menu.Item key="table">
                        <Icon type="mail" />
                        table
                    </Menu.Item>
                </Menu>
                {fun()}

                {/*    {this.state.button ?
                    <div>
                        <Button type="primary" >Primary</Button>
                        <Button>Default</Button>
                        <Button type="dashed">Dashed</Button>
                        <Button type="danger">Danger</Button>
                        <Button type="link">Link</Button>
                    </div> :
                    <div>
                        <Input placeholder="Basic usage" />
                    </div>
                } */}

            </div>
        )
    }
    public handleClick = (e: any) => {
        console.log(e)
        let k = e.key
        this.setState({
            state: k
        })
    }
}
interface IuState {
    button: boolean
    table: boolean
    state: string
}