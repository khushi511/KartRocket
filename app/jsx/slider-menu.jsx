import React from 'react'
import {Svg} from '../svg.jsx'
import '../scss/slider-menu.scss'

export class SliderMenu extends React.Component{
	options = [
				{img:"https://kartrocket-res.cloudinary.com/image/fetch/w_100,h_100,q_auto,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cd4e345ac462a728b5065%2Fwomen.png",
					link:"/women", title:"Men"},
				{img:"https://kartrocket-res.cloudinary.com/image/fetch/w_100,h_100,q_auto,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cd83f45ac462a728b50bd%2Fmen.jpg", 
					link:"/men", title:"Women"},
				{img:"https://kartrocket-res.cloudinary.com/image/fetch/w_100,h_100,q_auto,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cdbec45ac462a728b511d%2Fhome.png", 
					link: "/home-and-living", title:"Home and Living"},
				{img:"https://kartrocket-res.cloudinary.com/image/fetch/w_100,h_100,q_auto,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cdd1045ac462a728b514c%2Fkitchen.png", 
					link:"/electronics", title:"Electronics"},
				{img:"https://kartrocket-res.cloudinary.com/image/fetch/w_100,h_100,q_auto,c_fill,f_auto/https%3A%2F%2Fnozzle.s3-ap-southeast-1.amazonaws.com%2F559cda0245ac462a728b50ec%2Fkids.jpg", 
					link:"/children", title:"Children"}]
	render(){
		return(
			<section className="slider-menu">
				<ul className="option-wrapper">
					{this.options.map((item)=>{
						return<li>
								<a href={item.link}><img src={item.img}/></a>
								<p>{item.title}</p>
								</li>
					})}
				</ul>
			</section>
			)
	}
}

export class Search extends React.Component{
	render(){
		return(
			<form className="search">
				<input type="text" placeholder="Search Products"/>
				<button className="search-button">Search</button>
			</form>
			)
	}
}


