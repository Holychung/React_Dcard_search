# ReactJS Dcard API 文章搜尋 小實作

+ NCTU+ 2018暑訓教材

## 推薦編輯器
- sublime
![](https://i.imgur.com/W7agBw2.png)
- VScode
- vim

## npm install

[Uninstall node npm](https://askubuntu.com/questions/786015/how-to-remove-nodejs-from-ubuntu-16-04)
[Install node npm latest](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/#)

## 開設專案
- 開新專案 ```npx create-react-app nctu_course```
  - 如果 npm 版本 <= 5.1 請下 `npm install -g create-react-app` `create-react-app nctu_course`
- ```cd nctu_course```
- ```npm start```
- 可以在 http://localhost:3000 看到初始頁面
- package.json

## Conceptual

洪寬圖Component 構想

- App.js
- Index.js
- Pages/
    - PagesSearch.js
- Components/
    - CourseBox.js
    - CourseItem.js
    - SearchBar.js


## import module
```jsx=
import React from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
```

## export module
```jsx=
export default App
export { App }
```

## 設定Router
- 安裝套件```npm install react-router-dom --save```
- 設定URL

```jsx=
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/search' component={ PageSearch } />
            <Route component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
```

## 使用Bootstrap v4

[Bootrap 4](https://getbootstrap.com/)

- 引入css到index.html <head>

```htmlmixed=
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">
```

- 引入js到index.html <body>

```htmlmixed=
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossorigin="anonymous"></script>
```

+ Layout
    + container-fluid
+ Grid System
    + row
    + col-8
+ Component
+ Dropdown Button
+ Dcard Forum 參數
    + https://www.dcard.tw/f


##  Dcard API

https://www.dcard.tw/_api/search/posts?forum=game&query=surviv.io

```javascript=
const HOST = 'https://www.dcard.tw/_api/search/posts'
let param = `?forum=${this.state.forum}&query=${this.state.searchWord}`
```

```jsx=
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
```

## CourseBox

+ 三元運算
+ map function 回傳陣列

```jsx=
<div>
    {
      this.props.data.length > 0 ?
        this.props.data.map( (cos) => 
          <CourseItem key={cos.id} info={cos.title} />
        )
      : <span>{ this.props.msg }</span>
    }
</div>
```
