import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './screen.css';
import {  BookFilled } from '@ant-design/icons';

import Graphical from './Calculate/Root of Equation/Graphical';
import Bisection from './Calculate/Root of Equation/Bisection';
import FalsePosition from './Calculate/Root of Equation/False_position';
import Onepoint from './Calculate/Root of Equation/Onepoint';
import Newton from './Calculate/Root of Equation/Newton-raphson';
import Secant from './Calculate/Root of Equation/Secant';
import Gauss from './Calculate/Linear Algebra/Gauss';
import LU from './Calculate/Linear Algebra/LU';
import Jacobi from './Calculate/Linear Algebra/Jacobi';
import Seidel from './Calculate/Linear Algebra/Seidel';


const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <Header className="header" style={{ height: "100px", backgroundColor: "#1a8cff" }}>
            <div className="headertext">
              <label style={{fontSize:"40px", marginRight:"10px"}}>Numerical Method</label>
            </div>
          </Header>

          <Layout>
            <Sider width={335} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                style={{ height: '100vh', borderRight: 0, backgroundColor: "#4da6ff", overflowY: "scroll" }}
                theme="info"
              >
                <SubMenu key="root_submenu" title={<span>Root of Equation</span>}>
                  <Menu.Item key="menu_graphical" className='sub'><Link to="/graphical">Graphical</Link></Menu.Item>
                  <Menu.Item key="menu_bisection" className='sub'><Link to="/bisection">Bisection</Link></Menu.Item>
                  <Menu.Item key="menu_false" className='sub'><Link to="/false-position">False Position</Link></Menu.Item>
                  <Menu.Item key="menu_onepoint" className='sub'><Link to="/one-point">One-Point Iteration</Link></Menu.Item>
                  <Menu.Item key="menu_newton" className='sub'><Link to="/newton-raphson">Newton-Raphson</Link></Menu.Item>
                  <Menu.Item key="menu_secant" className='sub'><Link to="/secant">Secant Method</Link></Menu.Item>
                </SubMenu>
                
                <SubMenu key="algebra_submenu" title={<span>Linear Algebra</span>}>
                  <Menu.Item key="menu_gauss" className='sub'><Link to="/gauss">Gauss's Elimination</Link></Menu.Item>
                  <Menu.Item key="menu_lu" className='sub'><Link to="/lu">LU Decomposition</Link></Menu.Item>
                  <Menu.Item key="menu_jacobi" className='sub'><Link to="/jacobi">Jacobi Iteration Method</Link></Menu.Item>
                  <Menu.Item key="menu_seidel" className='sub'><Link to="/seidel">Gauss Seidel Iteration</Link></Menu.Item>
                </SubMenu>
                
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{ padding: 24, margin: 0, minHeight: 280, }}>
                <Switch>
                  {/* Root of Equation */}
                  <Route exact path="/graphical" component={Graphical} />
                  <Route exact path="/bisection" component={Bisection} />
                  <Route exact path="/false-position" component={FalsePosition} />
                  <Route exact path="/one-point" component={Onepoint} />
                  <Route exact path="/newton-raphson" component={Newton} />
                  <Route exact path="/secant" component={Secant} />
                  {/* Linear Algebra */}
                  <Route exact path="/gauss" component={Gauss} />
                  <Route exact path="/lu" component={LU} />
                  <Route exact path="/jacobi" component={Jacobi} />
                  <Route exact path="/seidel" component={Seidel} />
                </Switch>
              </Content>
            </Layout>
          </Layout>
          <Footer style={{ backgroundColor: "#1a8cff", minHeight: 40 }}>
              <p style={{fontSize:"22px", verticalAlign:"text-bottom", fontWeight: "bold", color: "white"}}><BookFilled style={{ fontSize: "30px" }} /><a target="_blank" rel="noopener noreferrer" href="https://www.kmutnb.ac.th/" style={{ color: "white", textDecoration: "none" }}> Department of Computer and Information Science - King Mongkut's University of Technology North Bangkok</a></p>
          </Footer>
        </Layout>
      </Router>
    )
  }
}
export default App;
