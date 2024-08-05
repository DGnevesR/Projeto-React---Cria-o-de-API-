import { Link } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>Top Shoes</span>
            </Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Nike">Nike</Link>
                <Link to="/Adidas">Adidas</Link>
                <Link to="/Vans">Vans</Link>
            </nav>
        </header>
    )    
}

export default Header
