import styles from "./Favorites.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import VideoList from "../../components/VideoList";
import { useFavoriteContext } from "../../contexts/Favorites";
import ScrollToTopButton from "../../components/ScrollToTopButton";
// import Zoom from 'react-medium-image-zoom'
// import ReactImageZoom from 'react-image-zoom';
import React from 'react';
import ReactImageMagnify from 'react-image-magnify';





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
{/* 
        <section className={styles.image}>
          <Zoom>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </div>
          </Zoom>
          <Zoom>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </div>
          </Zoom>
          <Zoom>
          <div className={styles.image}>
            <img src="https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
          </div>
          </Zoom>
          </section> */}



          <ReactImageMagnify {...{
              smallImage: {
                  alt: 'Wristwatch by Ted Baker London',
                  isFluidWidth: true,
                  src: require("https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
              },
              largeImage: {
                  src: require("https://images.pexels.com/photos/7947304/pexels-photo-7947304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"),
                  width: 1200,
                  height: 1800
              }
          }} />
          
          
      </Container>
      <Footer />
    </>
  );
}

export default Favorites;
