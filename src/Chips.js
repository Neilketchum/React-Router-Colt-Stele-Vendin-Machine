import React, { Component } from 'react'
import './Chips.css'
import {Link} from 'react-router-dom'
class Chips extends Component{
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
                   Chips
                </h1>
                <div>
                   <button className = 'btn'><h1 className = 'header'> <Link to = '/' className = 'ele'>Vending Machine</Link></h1></button> 
                </div>
            </div>
        )
    }
}
export default Chips;