function SongCard(props){

    return(
        <div className="card">
            <div style={{position: "relative", maxWidth: "fit-content"}}>
                <img src={props.song.cover} style={{width: "360px", objectFit: "cover"}}></img>
                <button style={{position: "absolute", inset: "0 0 0 0", width: "fit-content", height: "fit-content", margin: "auto"}}>
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
            
            <p>{props.song.name ? props.song.name : "Song Name"}</p>
            <p className="card-description">{(props.song.author ? props.song.author : "Artist Name")+" · "+(props.song.views ? props.song.views : "0" ) + " views"}</p>
        </div>
    )
}

export default SongCard;