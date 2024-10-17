import { Link } from "react-router-dom";
import iconFavorites from "./favorite.png";
import iconUnFavorites from "./unfavorite.png";
import { useFavoriteContext } from "../../contexts/Favorites";
import { Cards, Capa, Icon } from "./style.js";

function Card({ id }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFavorite = favorite.some((fav) => fav.id === id);
  const icone = !isFavorite ? iconFavorites : iconUnFavorites;

  return (
    <Cards>
      <Link to={`/watch/${id}`}>
        <Capa
          src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
          alt="capa"
        />
      </Link>
      <Icon>
        <img src={icone} alt="icon" onClick={() => addFavorite({ id })} />
      </Icon>
    </Cards>
  );
}

export default Card;
