import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import ReactContext from '../ReactContext'
import BookItem from '../BookItem'
import Header from '../Header'
import './index.css'

const Library = () => {
    const navigate = useNavigate()
    const renderEmptyView = () => (
        <div className="empty-view-con">
            <img src="/emptylibrary.png" alt="no search results" className="empty-img" />
            <h1 className="empty-head">No Saved Books found</h1>
            <p className="empty-para">You can save your books while reading them</p>
        </div>
    )
    return (
        <ReactContext.Consumer>
            {({tempArr, removeBooks, addBooks}) => {
                console.log(tempArr)
                const getPreviousPage = () => {
                    navigate(-1)
                }
                return (
                    <>
                        <Header />
                        <div className="library-con">
                            <button className="back" type="button" onClick={getPreviousPage}>
                                <IoMdArrowRoundBack className="arrow" />
                                Back
                            </button>
                                <h1 className="library">Library</h1>
                                {tempArr.length < 1 && renderEmptyView()}
                                {tempArr.length>0 && <ul className="lib-list">
                                    {tempArr.map(eachBook => (
                                        <BookItem key={eachBook.id} details={eachBook} status=  {true} removeBooks={removeBooks} addBooks={addBooks} />

                                    ))}
                                </ul>}
                        </div>
                    </>
                )
            }}
        </ReactContext.Consumer>
    )

}

export default Library