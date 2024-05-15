import "./ScrollToTopButton.css"

function ScrollToTopButton(){
    const handleClick = () =>{
        window.scroll({
            top:0,
            behavior: 'smooth'
        })
    }

    return (
        <button onClick={handleClick}>
            &#9650;
        </button>
    )
}

export default ScrollToTopButton