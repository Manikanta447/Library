import {Component} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Header from '../Header'
import BookItem from '../BookItem'

import './index.css'

const initialBooks = [
    { id: 1, img: '/mocking.jpeg', title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Fiction', rating: 4.8, year: 1960 },
    { id: 2, img: '/1984.jpeg', title: '1984', author: 'George Orwell', genre: 'Dystopian', rating: 4.7, year: 1949 },
    { id: 3, img: '/gatsby.jpeg', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Classic', rating: 4.5, year: 1925 },
    { id: 4, img: '/moby.jpeg', title: 'Moby Dick', author: 'Herman Melville', genre: 'Adventure', rating: 4.1, year: 1851 },
    { id: 5, img: '/war.jpeg', title: 'War and Peace', author: 'Leo Tolstoy', genre: 'Historical Fiction', rating: 4.6, year: 1869 },
    { id: 6, img: '/pride.jpeg', title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance', rating: 4.9, year: 1813 },
    { id: 7, img: '/rye.jpeg', title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Fiction', rating: 4.2, year: 1951 },
    { id: 8, img: '/hobbit.jpeg', title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.8, year: 1937 },
    { id: 9, img: '/brave.jpeg', title: 'Brave New World', author: 'Aldous Huxley', genre: 'Dystopian', rating: 4.3, year: 1932 },
    { id: 10, img: '/mocking.jpeg', title: 'The Odyssey', author: 'Homer', genre: 'Epic', rating: 4.7, year: '8th Century BC' },
    { id: 11, img: '/brothers.jpeg', title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', genre: 'Philosophy', rating: 4.8, year: 1880 },
    { id: 12, img: '/hobbit.jpeg', title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', rating: 4.6, year: 1988 },
    { id: 13, img: '/1984.jpeg', title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', genre: 'Magical Realism', rating: 4.7, year: 1967 },
    { id: 14, img: '/moby.jpeg', title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', genre: 'Fiction', rating: 4.5, year: 1866 },
    { id: 15, img: '/war.jpeg', title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'Fantasy', rating: 4.9, year: 1954 }
];

class Home extends Component {
    state = {booksList: initialBooks}

    filterBooks = event => {
        const {booksList} = this.state
        const searchInput = event.target.value.toLowerCase() 
        const filteredList = initialBooks.filter(eachBook => eachBook.title.toLowerCase().includes(searchInput))
        this.setState({booksList: filteredList})
    }

    renderEmptyView = () => (
        <div className="empty-view-con">
            <img src="/search.png" alt="no search results" className="empty-img" />
            <h1 className="empty-head">No Search results found</h1>
            <p className="empty-para">Try different keywords or remove search filter</p>
        </div>
    )
    render(){
        const { booksList } = this.state;
        return (
            <>
                <Header />
                <div className="home-main-con">
                    <div className="searchbar-con">
                        <button type="button" className="search-button">
                            <IoSearchOutline className="search-icon" /> 
                        </button>                    
                        <input type="text" placeholder="Search for books" className="search" onChange={this.filterBooks} />
                    </div>
                    <ul className="books-con">
                        {booksList.length < 1 && this.renderEmptyView()}
                        {booksList.map(eachBook => (
                            <BookItem key={eachBook.id} details={eachBook} />
                        ))
                        }
                    </ul>
                </div>
            </>
        )
    }
}

export default Home