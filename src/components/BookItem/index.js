import {Link} from 'react-router-dom'
import ReactContext from '../ReactContext'
import { CiBookmarkRemove } from "react-icons/ci";
import './index.css'


const BookItem = props => {
    console.log(props)
    const {details, status} = props
    const {id, img, title, author, genre, rating, year} = details

    return (
        <ReactContext.Consumer>
            {(value) => {
                const {addBooks, removeBooks} = value

                const addBook = () => {
                    console.log('clicked')
                    addBooks(details)
                }
            
                const remove = () => {
                    console.log(typeof id)
                    removeBooks(id)
                }
                return (
                    <li className="book-item-con">
                    {status === false && <button className="add" type="button" onCLick={addBook}> Add </button>}
                    {status === true && <button className="temp-but" type="button" onClick={remove}>
                        <CiBookmarkRemove className="rem" />
                        </button>}
                    <Link to={`/books/${id}`} className="link" >
                    <div className="book-item">
                        <img src={img} alt={title} className="img" />
                        <div className="book-details">
                            <h3 className="title">{title}</h3>
                            <p className="author">{author}</p>
                            <p className="genre">{genre}</p>
                            <p className="year">Published at {year}</p>
                            <p className="rating" >Rating: {rating}</p>
                        </div>
                    </div>
    
                    </Link>
                </li>
                )
            }}
        </ReactContext.Consumer>
        
    )

}

export default BookItem