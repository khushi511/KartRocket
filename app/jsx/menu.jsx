import React from 'react'
import '../scss/menu.scss'
import {Svg} from '../svg.jsx'
import {Link} from 'react-router'

export class Menu extends React.Component{
	state={
		show: false
	}
	render(){
		let show = (this.state.show)? "show":"";
		return(
			<div className="menu">
				<a className="logo">Kraftly</a>
				<Svg onClick={this.showMenu} className="hamburger" src="/img/menu.svg"/>
				<ul className={"menu-right " + show} id="menu">
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/men">Men</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/women">Women</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/home-and-living">Home and Living</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/electronics">Electronics</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/children">Children</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/blog">blog</Link></li>
					<li><Link onClick={this.showMenu} activeClassName="active" className="menu-item "  to="/contact">contact</Link></li>
				</ul>
				<select className="option-select">
				  	<option value="volvo">Account</option>
				  	<option value="khushi">Khushi</option>
				  	<option value="arya">Arya</option>
				  	<option value="ankur">Ankur</option>
				</select>
				<a href="#">Sell</a>
				<Svg className="shopping-cart" src="/img/shopping-cart.svg"/>
			</div>
		)
	}

	showMenu = () => {
		if(this.state.show){
			this.setState({show: false})
		}
		else{
			this.setState({show: true})
		}
	}
}