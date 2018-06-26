import React from 'react'

import SearchBar from '../Components/SearchBar'
import CourseBox from '../Components/CourseBox'

class PageSearch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      cosData: [],
      message: '',
      forum: 'buyonline',
      searchWord: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
    this.updateMessage = this.updateMessage.bind(this)
    this.updateCosData = this.updateCosData.bind(this)
    this.updateForum = this.updateForum.bind(this)
    this.updateSearchWord = this.updateSearchWord.bind(this)
  }
  updateMessage(t){
    this.setState({ message: t})
  }
  updateCosData(t){
    this.setState({ cosData: t})
  }
  updateForum(t){
    this.setState({ forum: t })
  }
  updateSearchWord(t){
    this.setState({ searchWord: t })
  }
  updateSearch(){
    const HOST = 'https://www.dcard.tw/_api/search/posts'
    let param = `?forum=${this.state.forum}&query=${this.state.searchWord}`

    this.updateMessage('查詢課程中...')

    fetch(HOST + param)
    .then(response => {
      if(!response.ok)
        console.log('fetching Error')
      return response.json()
    })    
    .then(data => {
      console.log(data)
      this.updateCosData(data)
    })
    .catch(error => {
      this.updateMessage(error)
    })
  }
  render() {
    return(
      <div>
        <SearchBar onForumChange={ this.updateForum } onWordChange={ this.updateSearchWord } onSearch={ this.updateSearch }/>

        <CourseBox msg={ this.state.message } data={ this.state.cosData } />
      </div>
    )
  }
}

export { PageSearch }