import Container from '../../components/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import imagem from '../../assets/j4.png';

function Home() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.apresentacao}>
                    <p>
                        Bem Vindo a <br />
                        <span>Top Shoes</span> <br />
                    </p>
                </div>
                <figure>                    
                <img src={imagem} alt="" id="jay4"/>
                </figure>
            </section>
        </>
    )
}

export default Home
