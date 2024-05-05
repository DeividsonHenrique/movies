import Header from "../../components/Header"
import Container from "../../components/Container"
import Footer from "../../components/Footer"
import styles from "./Watch.module.css"

function Watch(){
    return(
        <>
        <Header />
        <Container>
            <section className={styles.watch}>
                <h1>Assistir</h1>
                <iframe width="854" height="480" src="https://www.youtube.com/embed/k5mX3NkA7jM?si=IgBe5FAQvndnq0nk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </section>
        </Container>
        <Footer />
        </>
    )
}

export default Watch