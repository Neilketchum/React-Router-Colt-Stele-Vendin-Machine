import React, { Component } from 'react'
import Soda from './Soda'
import Sardines from './Sardines'
import VendingMachine from './VendingMachine';
import './App.css'
import { Route } from 'react-router-dom'
import Chips from './Chips';
class App extends Component{
    render(){
        return(
       
            <div className = 'App'>
                
                <Route exact path = '/' render = {()=> <VendingMachine/>}/>
                <Route exact path = '/Chips' render = {()=><Chips/>}/>
                <Route exact path = '/Soda' render = {()=><Soda/>}/>
                <Route exact path = '/Sardines' render = {()=><Sardines/>}/>
    
            </div>           
        )
    }
}
export default App;