import React from 'react'

class CourseItem extends React.Component{
  render(){
    return(
      <div className='card w-75 my-3 mx-auto rounded'>
        <div className='title p-3'>
          {this.props.info}
        </div>
        <div className='content p-4'>
          {this.props.excerpt}  
        </div>
      </div>
    )
  }
}

export default CourseItem