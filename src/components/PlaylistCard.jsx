import imgPlaceholder from '../assets/images/img-placeholder.jpg'

function PlaylistCard(props){

    return(
        <div className="card" style={{width: "180px"}}>
            <div style={{position: "relative", maxWidth: "fit-content"}}>

                
                   <img src={props.playlist.cover ? props.playlist.cover : imgPlaceholder}></img>
                
                
                {
                    props.playlist.cover ? <button style={{position: "absolute", inset: "auto 0.5em 1.7em auto"}}>
                        <span class="material-symbols-sharp" >
                            play_circle
                        </span>
                    </button> : null
                }

                {
                    props.playlist.cover ? <button style={{position: "absolute", inset: "0.5em .5em auto auto", padding: "0"}}>
                        <span class="material-symbols-sharp" style={{fontSize: "20px"}}>
                        more_vert
                        </span>
                     </button> : null
                }

                
                
            </div>
            
            <p>{props.playlist.name ? props.playlist.name : null}</p>
            <p className="card-description">{(props.playlist.artist ? props.playlist.artist+" ·" : "")+"  "+(props.playlist.songCount ? props.playlist.songCount+" songs" : "") + ""}</p>
            <p className="card-description">{props.playlist.description ? props.playlist.description : ""}</p>

        </div>
    )
}

export default PlaylistCard;