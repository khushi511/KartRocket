import React from 'react';

export class Svg extends React.Component{
	state = {
		svgData : ""
	}

	constructor(props){
		super(props);
		fetch(this.props.src)
			.then((response)=> {
				return response.text()
			}).then((body)=> {
				this.setState({svgData: body});
				if (this.props.onLoad)
					this.props.onLoad();
			})
	} 

	render() {
		var classString = 'svg-wrap '+ this.props.className
		return (
			<div onClick={this.props.onClick} className={classString} dangerouslySetInnerHTML={{__html:this.state.svgData}}>
			</div>
		)
	}

}