import styles from './Card.module.css'
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from 'react-icons/fa'
import { BsArrowRight } from 'react-icons/bs'
import Card from '../../components/Card'

function Card({ brand, name, imageURL, id }) {
    return (
        <section className={styles.card}>
            <h3>Card teste</h3>
            <h2>Nike</h2>
            <Card />
            <Card />
            <Card />
            <p>{brand}</p>
            <p>{name}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <Link to={imageURL} className={styles.botao}>
                    <BsArrowRight />
                </Link>
                <p>{id}</p>
            </div>
        </section>
    )
}

export default Card
