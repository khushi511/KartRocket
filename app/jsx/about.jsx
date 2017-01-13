import React from 'react'
import {Splash} from './splash.jsx'
import {WorkExperience} from './work-exp.jsx'
import {SliderMenu, Search} from './slider-menu.jsx'
import {Footer} from './footer.jsx'
import "../scss/about.scss"

export class About extends React.Component{
	data = [{img:"http://il8.picdn.net/shutterstock/videos/2896216/thumb/7.jpg", link:"/men"},
			{img:"http://www.asergeev.com/pictures/archives/2015/1651/jpeg/06.jpg", link:"/women"},
			{img:"http://www.hdtimelapse.net/content/HDtimelapse.net_People/HDtimelapse.net_People_0070_hirez.jpg",link:"/home-and-living"},
			{img:"https://www.welovesolo.com/wp-content/uploads/vector/01/shopping-girl-vector-1.jpg",link:"/electronics"},
			{img:"http://travelask.ru/system/images/files/000/132/320/wysiwyg/HDtimelapse.net_City_3045_hirez.jpg?1473102159pg", link:"/children"}]    
  
	render(){
		return(
				<section className="about">
					<Search/>
					<SliderMenu/>
					<Splash data={this.data}/>
					<Footer/>
				</section>
			)
	}
}

