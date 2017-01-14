import React from 'react'
import {Svg} from '../svg.jsx'
var Slider = require('react-slick');
import "../scss/splash.scss"
// import {getUrl} from '../api/get.js';

export class Splash extends React.Component{
	render(){
		const settings = {
		arrows: true,
		  dots: true,	
	      infinite: true,
	      speed: 500,
	      slideToShow: 1,
	      slideToScroll: 0,
	      autoplay: true,
	      autoplaySpeed: 4000,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
	      swipeToSlide: true,
	      touchMove: true,
	      useCSS: true
	    }
		return(
				<div className="splash">
			        <Slider {...settings} >
			        {
			          this.props.data.map( function (record, i){
			            return (
			            <a href={record.link}><img src={record.img}/></a>
			            )
			          })
			        }

			        </Slider>
			    </div>
 
			)
	}
}

