import {Component} from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import BookCard from './components/BookCard'
import ReactContext from './components/ReactContext'
import Library from './components/Library'
import './App.css';

class App extends Component{
  state= {savedBooks: []}

  addBooks = obj => {
    const {savedBooks} = this.state
    console.log(savedBooks)
    this.setState({savedBooks: [...savedBooks, obj]}, () => console.log(this.state.savedBooks))
  }

  removeBooks = id => {
    const {savedBooks} = this.state
    const filterList = savedBooks.filter(eachBook => eachBook.id !== id)
    this.setState({savedBooks: filterList})
  }

  render(){
    const {savedBooks} = this.state
    console.log(savedBooks[0])
    return (
      <ReactContext.Provider value={{addBooks: this.addBooks, tempArr :[...savedBooks], removeBooks: this.removeBooks }}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/books/:id"  element= {<BookCard />} />
          <Route exact path="/library"  element= {<Library />} />
        </Routes>
      </ReactContext.Provider>
    )
  }
}


export default App;
