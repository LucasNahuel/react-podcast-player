

function PlaylistCard(props){

    return(
        <div className="card">
            <div style={{position: "relative", maxWidth: "fit-content"}}>
                <img src={props.playlist.cover}></img>
                <button style={{position: "absolute", inset: "auto 0.5em 1.7em auto"}}>
                    <span class="material-symbols-sharp" >
                        play_circle
                    </span>
                </button>

                <button style={{position: "absolute", inset: "0.5em .5em auto auto", padding: "0"}}>
                    <span class="material-symbols-sharp" style={{fontSize: "20px"}}>
                    more_vert
                    </span>
                </button>
                
            </div>
            
            <p>{props.playlist.name ? props.playlist.name : "Playlist Name"}</p>
            <p className="card-description">{(props.playlist.artist ? props.playlist.artist : "Artist Name")+" · "+(props.playlist.songCount ? props.playlist.songCount : "0" ) + " songs"}</p>
        </div>
    )
}

export default PlaylistCard;