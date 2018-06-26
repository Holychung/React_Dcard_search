import React from 'react'

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			dropdownTitle: '看板選擇',
		}
	}
	updateDropdownTitle(t){
		this.setState({ dropdownTitle: t })
	}
	render(){
		return(
			<div className='container-fluid'>
				<div className='row'>
					<div className="dropdown">
					  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
					    { this.state.dropdownTitle }
					  </button>
					  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('game'); this.updateDropdownTitle('遊戲')} }>遊戲</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('buyonline'); this.updateDropdownTitle('網路購物')} }>網路購物</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('relationship'); this.updateDropdownTitle('感情')} }>感情</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('pet'); this.updateDropdownTitle('寵物')} }>寵物</a>
					  </div>
					</div>

					<input className="form-control col-8" type="text" placeholder="搜尋關鍵字" onChange={ (e) => this.props.onWordChange(e.target.value) }/>
					<button className='col-1' onClick={ () => this.props.onSearch() } >搜尋</button>
				</div>
			</div>
		)
	}
}

export default SearchBar