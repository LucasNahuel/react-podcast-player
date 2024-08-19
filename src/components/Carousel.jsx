import pp from "../assets/images/pp.png"
import PlaylistCard from "./PlaylistCard";
import SongCard from "./SongCard";

function Carousel(props){
    return(
        <div className="carousel">

            <div className="carousel-header">
                <img className='pp' src={pp}></img>
                
                <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: "1em"}}>
                    {props.carousel.subtitle ? <p style={{marginBlock: "auto"}}>{props.carousel.subtitle}</p> : null}
                    <h2 style={{marginBlock: "auto"}}>{props.carousel.title}</h2>
                </div>

                <div style={{display: "flex", flexDirection: "row", alignItems: "center", marginLeft: "auto", gap: "0.5em"}}>


                    {
                        props.carousel.isSongList ? 
                        <button style={{border: "1px solid white", borderRadius: "51px", padding: "1em 2em", color: "white", outline: "none", marginRight: "1em"}}>
                            Play All
                        </button> 
                        :
                        null
                    }
                    
                    <button className="icon-button">
                        <span className="material-symbols-sharp" style={{color: "grey", transform: "rotate(180deg)"}}>
                        expand_circle_right
                        </span>
                    </button>
                    


                    <button className="icon-button">
                        <span className="material-symbols-sharp" style={{fontVariationSettings: "'FILL' 1,'wght' 400, 'GRAD' 0, 'opsz' 24"}}>
                        expand_circle_right
                        </span>
                    </button>
              
                    
                </div>
                
            </div>

            <div className="carousel-body">
                {
                    props.carousel.items
                }
            </div>
            
        </div>
    )
}

export default Carousel;