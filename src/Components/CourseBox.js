import React from 'react'

import CourseItem from './CourseItem'

class CourseBox extends React.Component{
	render(){
		return(
			<div>
				{
					this.props.data.length > 0 ?
						this.props.data.map( (cos) => 
							<CourseItem key={cos.id} info={cos.title} />
						)
						: <span>{ this.props.msg }</span>
				}
			</div>
		)
	}
}

export default CourseBox