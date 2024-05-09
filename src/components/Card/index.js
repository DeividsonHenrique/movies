import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorites  from "./favorite.png"
import iconUnFavorites  from "./unfavorite.png"

function Card({id}){
    return(
        <section className={styles.cards}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img src={iconFavorites} alt="icon" />
            </figure>
        </section>
    )
}

export default Card