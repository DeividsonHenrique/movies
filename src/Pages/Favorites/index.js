import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <ScrollToTopButton />
      <Header />
      <Container>
        <section className={styles.favorites}>
          <h2>Meus Favoritos</h2>
          {<VideoList videos={favorite} emptyHeading={"Sem Favoritos"} />}
        </section>

        <div className={styles.empty}>
          <img src="https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="empty"/>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
