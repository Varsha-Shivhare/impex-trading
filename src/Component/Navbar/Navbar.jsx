import React, {Component} from 'react';
import './Navbar.css'
import {NavLink} from 'react-router-dom'

class Navbar extends Component {

    state = {
        isopen: false
    }

    handleClick = () => {
        this.setState({
            isopen: !this.state.isopen,
        })
    }

    closeNavbar = () => {
        this.setState({
            isopen: false
        })
    }
    render(){
    return(
        <>
        <div id="main_navbar">
            <nav>
                <input type="checkbox" id="check" checked={this.state.isopen} readOnly/>
                <label htmlFor="check" className="checkbtn" onClick={this.handleClick}>
                    <i className="fas fa-bars"></i>
                </label>
                <label className="logo" onClick={this.closeNavbar}>Impex</label>
                <ul onClick={this.closeNavbar}>
                    <li><NavLink  exact to="/">Home</NavLink></li>
                    <li><NavLink  to="/about">About</NavLink></li>
                    <li><NavLink  to="/service">Service {'&'} Support</NavLink></li>
                    <li><NavLink  to="/products">Products</NavLink></li>
                    <li><NavLink  to="/faq">FAQ</NavLink></li>
                    <li><NavLink  to="/contact">Contact</NavLink></li>
                </ul>
                <div className={`vh-100 w-100 position-fixed ${this.state.isopen?'':'d-none'}`}
                    onClick={this.closeNavbar} 
                    style={{top:'10%',
                    zIndex:55}}>
                </div>
            </nav>
        </div>
        </>
    )
    }
}

export default Navbar;