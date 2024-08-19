
function AlbumCard(props){
    return(
        <div className="card">
            <div style={{position: "relative", maxWidth: "fit-content"}}>
                <img src={props.album.cover} style={{width: "200px", height: "200px", borderRadius: "0"}}></img>
                

                <button style={{position: "absolute", inset: "0.5em .5em auto auto", padding: "0"}}>
                    <span class="material-symbols-sharp" style={{fontSize: "20px"}}>
                    more_vert
                    </span>
                </button>
                
            </div>
            
            <p>{props.album.name ? props.album.name : "Album name"}</p>
            <p className="card-description">{(props.album.artist ? props.album.artist : "Listen Again · Listen Again")}</p>
        </div>
    )
}

export default AlbumCard;