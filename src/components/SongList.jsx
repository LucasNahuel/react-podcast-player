
function SongList(props){
    return(
        <div className="song-grid">
            {
                props.songs.map(
                    i => <div className="song-list-item">
                        <img src={i.cover}></img>
                        <div>
                            <p>{i.title}</p>
                            <p>{i.author}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SongList;