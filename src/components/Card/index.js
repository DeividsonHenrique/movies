import { Link } from "react-router-dom"
import styles from "./Card.module.css"
import iconFavorites  from "./favorite.png"
import iconUnFavorites  from "./unfavorite.png"
import { useFavoriteContext } from "../../contexts/Favorites"


function Card({id}){

    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id)
    const icone = !isFavorite ? iconFavorites : iconUnFavorites

    return(
        <section className={styles.cards}>
            <Link to={`/watch/${id}`}>
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img
                 src={icone} 
                 alt="icon"
                onClick={() => addFavorite({id})}
                 />
            </figure>
        </section>
    )
}

export default Card