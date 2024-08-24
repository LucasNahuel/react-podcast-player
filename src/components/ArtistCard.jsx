
function ArtistCard(props){
    return(
        <div className="artist-card">
            <img src={props.artist.cover}></img>
            <p style={{fontWeight: "bold"}}>{props.artist.title}</p>
            <p>{props.artist.subtitle}</p>
        </div>
    )
}

export default ArtistCard;
