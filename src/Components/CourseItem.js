import React from 'react'

class CourseItem extends React.Component{
	render(){
		return(
			<div>
				{this.props.info}
			</div>
		)
	}
}

export default CourseItem