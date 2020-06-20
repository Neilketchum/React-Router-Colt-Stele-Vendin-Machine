import React, { Component } from 'react'
import './VendingMachine.css'
import {Route,Link,Switch} from 'react-router-dom'
import Soda from './Soda'
import Sardines from './Sardines'

import Chips from './Chips';
class VendingMachine extends Component {
    render(){
        return(
            <div>
                  <div className="app-nav">
                        <ul className="nav-elements">
                            <li className = 'ele Vending-Machine'> <Link to = '/' className = 'ele'>Vending Machine</Link></li>
                            <li className = 'ele Sardine'>  <Link to = '/Sardines' className = 'ele'>Sardine</Link></li >
                            <li className = 'ele Chips'> <Link to = '/Chips' className = 'ele'>Chips</Link></li>
                            <li className = 'ele Soda'> <Link to = '/Soda' className = 'ele'>Soda</Link></li>
                        </ul>
                        
                  </div>
                <h1 className="header">
                    Vending Machine
                </h1>
                <div className = "Machine">
                 </div>
               
                  {/* <Switch>
                            <Route exact  path = '/' component = {VendingMachine}/>
                            <Route exact path = '/Chips' component = {Chips}/>
                            <Route exact path = '/Soda' component = {Soda}/>
                            <Route exact path = '/Sardines' component = {Sardines}/>
                            
                 </Switch> */}

            </div>
           
        )
    }
}
export default VendingMachine;