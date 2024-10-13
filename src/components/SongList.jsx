
import { useContext } from "react";
import musicNote from '../assets/images/music_note.png'


function SongList(props){


    return(
        <div className="song-grid">
            {
                props.songs.map(
                    i => <div className="song-list-item">
                        <img style={{position: "relative", zIndex:"999", backgroundColor: "black"}} src={i.channel.urls.logo_image.original ? i.channel.urls.logo_image.original ? i.channel.urls.logo_image.original : musicNote : musicNote} onClick={() => props.changeAudio(i)}></img>
                        
                        <button  className="icon-button" style={{position: "absolute", inset: "auto auto auto auto"}}>
                            <span class="material-symbols-sharp" style={{fontSize: "40px"}}>
                            play_arrow
                            </span>
                        </button>

                        <div>
                            <p style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", webkitLineClamp: "3"}}>{i.title}</p>
                            <p style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", webkitLineClamp: "3"}}>{i.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default SongList;