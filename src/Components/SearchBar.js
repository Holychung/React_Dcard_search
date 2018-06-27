import React from 'react'

class SearchBar extends React.Component{
	constructor(props){
		super(props)
		this.state={
			dropdownTitle: '看板選擇'
		}
		this.updateDropdownTitle = this.updateDropdownTitle.bind(this)
	}
	updateDropdownTitle(t){
		this.setState({ dropdownTitle: t })
	}
	render(){
		return(
			<div className='container'>
				<div className='row '>
					<div className="col-2 dropdown ">
					  <button className="btn btn-secondary dropdown-toggle col" type="button" id="dropdownMenuButton" data-toggle="dropdown">
					    { this.state.dropdownTitle }
					  </button>
					  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					    <a className="dropdown-item " onClick={ () => { this.props.onForumChange('game'); this.updateDropdownTitle('遊戲')} }>遊戲</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('buyonline'); this.updateDropdownTitle('網路購物')} }>網路購物</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('relationship'); this.updateDropdownTitle('感情')} }>感情</a>
					    <a className="dropdown-item" onClick={ () => { this.props.onForumChange('pet'); this.updateDropdownTitle('寵物')} }>寵物</a>
					  </div>
					</div>
					<div className='input-group col-9'>
						<input className="input-group-prepend form-control col-10" type="text" placeholder="搜尋關鍵字" onChange={ (e) => this.props.onWordChange(e.target.value) }/>
						<button className='input-group-append btn btn-success text-center' onClick={ () => this.props.onSearch() } >搜尋</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SearchBar
