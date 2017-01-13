import React from 'react'
import '../scss/footer.scss'

export class Footer extends React.Component{
	icons = [
			{img:"https://kartrocket-res.cloudinary.com/image/fetch/c_fill,q_auto/https://nozzle.s3-ap-southeast-1.amazonaws.com/push/images/1477490098_giftree_2610_new.png",
				 link:"/the-giftree", title:"The Giftree" },
			{img:"https://kartrocket-res.cloudinary.com/image/fetch/c_fill,q_auto/https://nozzle.s3-ap-southeast-1.amazonaws.com/push/images/1477490117_koi_2610_new.png", 
				link:"/craft-of-india" , title:"Cratfs of India"},
			{img:"https://kartrocket-res.cloudinary.com/image/fetch/c_fill,q_auto/https://nozzle.s3-ap-southeast-1.amazonaws.com/push/images/1477490156_uy_2610_new.png", 
				link:"/uniquely-yours", title:"Uniquely Yours"},
			{img:"https://kartrocket-res.cloudinary.com/image/fetch/c_fill,q_auto/https://nozzle.s3-ap-southeast-1.amazonaws.com/push/images/1477490143_stylist_2610_new.png", 
				link:"/stylist", title:"Stylist"}]
	render(){
		return(
				<ul className="footer">
					{
						this.icons.map((item)=>{
							return<li className="icon">
									<a href={item.link}><img src={item.img}/></a>
								</li>
						})
					}
				</ul>
			)
	}
}