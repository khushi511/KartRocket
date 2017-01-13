import React from 'react'
import '../scss/work-exp.scss'

export  class WorkExperience extends React.Component{
	render(){
		return(
				<section className="work-experience">
					<h2 className="heading">Work Experience</h2>
					<Work/>
				</section>
			)
	}
}

class Work extends React.Component{
	expDataLeft = [{
					year: '2014-2016',
					company: 'pineapple',
					position: 'full stack developer',
					detail:"Worked as part of a multi-disciplinary team, carrying out ad-hoc tasks as required by the IT manager. Has a specific brief to ensure the websites build for customer's precisely matched their requirements, developers and marketers."
				},{
					year:'2010-2011',
					company:"joojle",
					position:"system analyst / web developer",
					detail:"Rebuilt and enhanced existing ASP B2C site with ASP.NET 2.0 Framework and tools. Technology consists of ASP.NET(c#), IIS, Microsoft SQL Server 2005, Stored Procedures & PayPal Instant Payment Notification."
				},{
					year:"2004-2008",
					company:"Headbook",
					position:"intern",
					detail:"This was begining of my career. Developed, managed, operated and promoted an Internet business. Handled customer support issues."
				}]
	expDataRight = [{
					year:'2011-2014',
					company:"Macrosoft",
					position:"web developer",
					detail:"I was responsible for working on a range of projects, designing appealing websites and interacting on a daily basis with graphic designers, back-end developers and marketers."
				},{
					year:"2008-2010",
					company:"ibbm",
					position:"web master/ web developer",
					detail:"Developed, anaged, operated and promoted an Interet business. handled customer support issues. Planned and managed business finances."
				},{
					year:"2003-2004",
					company:"ubear",
					position:"taxi-driver",
					detail:"Driving from point A to B and if necessary to point C and soetimes even to point R and point S. I was known as experienced driver. Once my passenger who was a web developer told me about his job and I have made my decision at that moment to became a developer."
				}]
	render(){
		return(
				<section className="exp-detail">
					<div className="exp-data-left">
					{
						this.expDataLeft.map((exp)=>{
							return(<ExpCard data = {exp}/>)
						})
					}
					</div>
					<div className="vertical-line">
						<div className="dot dot1"></div>
						<div className="dot dot2"></div>
						<div className="dot dot3"></div>
						<div className="dot dot4"></div>
						<div className="dot dot5"></div>
					</div>
					<div className="exp-data-right">
					{
						this.expDataRight.map((exp)=>{
							return(<ExpCard data={exp}/>)
						})
					}
					</div>
				</section>
			)
	}
}

class ExpCard extends React.Component{
	render(){
		return(
			<div className="exp-card">
				<h6>{this.props.data.year}</h6>
				<h5>{this.props.data.company}</h5>
				<h4>{this.props.data.position}</h4>
				<p>{this.props.data.detail}</p>
			</div>
			)
	}
}