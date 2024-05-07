import styles from "./VideoList.module.css"
import Card from "../Card"

function VideoList( {videos, emptyHeading} ){

    const count = videos.length
    let headding = emptyHeading
    if(count > 0){
        const noun = count > 1 ? 'vídeos' : 'vídeo'
        headding = `${count} ${noun}`
    }

    return(
        <>
            <h2>{headding}</h2>

            <section className={styles.videos}>
                { videos.map((video) => <Card id={video.id} key={video.id} /> )}
            </section>

        </>
    )
}

export default VideoList