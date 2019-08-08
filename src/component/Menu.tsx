import React, { Component, ReactNode, Suspense } from 'react'
import { Button, Modal, Calendar, Table, Menu, Icon, Input } from 'antd'
import Buttons from './buttons'
import Icons from './icon'
import './style.scss'
import { BrowserRouter as Router, Route, Link, withRouter, RouteComponentProps, Switch, HashRouter } from "react-router-dom";
import ajax from '../utlis/ajax';
import YwSuspense from './Yw_Suspense/Suspense'
import {routes} from '../config/router'

const meus: any[] = [
    {
        key: 'button',
        title: 'button',
        path: '/button'
    },
    {
        key: 'icon',
        title: 'icon',
        path: '/icon'
    }
]
class menu extends Component<RouteComponentProps, IuState> {
    constructor(props: any) {
        super(props);
        this.state = {
            datalist: []
        }
    }
    componentDidMount() {
        ajax.get('/posts').then(res => {
            console.log(res.data)
            this.setState({
                datalist: res.data
            })
        })
    }
    render() {
        const style = { width: '200px' };
        return (
            <div className="page">
                <div className='menus'>
                    <Menu style={style} onClick={this.handleClick} mode="vertical">
                        {
                            meus.map(item => {
                                return (
                                    <Menu.Item key={item.key}>
                                        <Icon type="mail" />
                                        {item.title}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </div>

                <div>
                  {/*   {
                        this.state.datalist.map((item,index) => {
                            return (
                                <div key={index}>
                                    <h3>{item.title}</h3>
                                    <h6>{item.body}</h6>
                                </div>
                            )
                        })
                    } */}
                </div>


                <div>

                    {/*   {this.state.pages || null} */}


                    <div>
                        {/* <Route exact path="/icon" component={Icons} />
                        <Route path="/Button" component={Buttons} />
                            */}
                        {/*    <Switch>
                            router
                            </Switch> */}

                        <HashRouter>
                            <YwSuspense></YwSuspense>
                            {/* <Suspense fallback={<div />}>
                            <Switch>
                                {
                                    routes.map(item => {
                                        return (
                                            <Route key={item.path} exact path={item.path} component={item.component} />
                                        )
                                    })
                                }
                            </Switch>
                            </Suspense> */}
                        </HashRouter>





                    </div>


                </div>

            </div>
        )
    }
    public handleClick = (e: any) => {
        console.log(e)
        let pageNode = meus.filter(item => {
            return (item.key === e.key)
        })
        console.log(this.props)
        this.props.history.push(pageNode[0].path)

        /*  this.setState({
            pages: pageNode[0].pages
        }) */
    }

}


interface IuState {
    pages?: ReactNode
    datalist: any[]
}

export default withRouter(menu)