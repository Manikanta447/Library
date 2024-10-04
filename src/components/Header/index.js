import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
    <nav className="nav-con">
        <h1 className="app-name">My Library</h1>
        <ul className="nav-list">
            <Link to="/" className="link"><li className="nav-item">Home</li> </Link>
            <Link to="/library" className="link"><li className="nav-item">Library</li></Link>
            <li className="nav-item">
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" className="profile" />
            </li>
        </ul>
    </nav>
)

export default Header