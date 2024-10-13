import album1 from "../assets/images/album1.png";
import musicNote from "../assets/images/music_note.png"
import { useRef, useEffect, useState, useContext } from "react";
import { PlayingContext } from "../providers/PlayingContext";

function PlayBar(props){

    const audioRef = useRef(null);
    const [audioDuration, setAudioDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    const [audioSlideVisible, setAudioSlideVisible] = useState("hidden");
    const playingContext = useContext(PlayingContext);
    const [playbarHeight, setPlaybarHeight] = useState("78px");

    const handleLoadedMetadata = () => {
        const audio = audioRef.current;
        console.log('Duration:', audio.duration);
        setAudioDuration(audio.duration, audio.play());
        
    }

    const updateCurrentTime = () =>{
        const audio = audioRef.current;
        setCurrentTime(audio.currentTime * 1000);
    }

    const seekTime = (ev) => {
        const audio = audioRef.current;
        audio.currentTime = ev.target.value;
    }

    const updatePlayStatus = () =>{
        let audio = audioRef.current;
        props.toggleAudioPause;
    }

    useEffect(() => {
        const audio = audioRef.current;

        if (audio) {
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
            audio.addEventListener('timeupdate', updateCurrentTime);
            audio.addEventListener('play', updatePlayStatus);
            audio.addEventListener('pause', updatePlayStatus);
        }   

        return () => {
            if (audio) {
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audio.removeEventListener('timeupdate', updateCurrentTime);
            }
        };
    }, []);

    useEffect( () => {
        if(props.isAudioPaused == true){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
    }, [props.isAudioPaused])


    const handleVolume = (ev) => {
        audioRef.current.volume = ev.target.value;
        setVolume(ev.target.value);

    }

    const handleMouseEnterAudio = (val) => {
        setAudioSlideVisible(val);
    }



    return(
        <div className="play-bar" onMouseLeave={() => handleMouseEnterAudio("hidden")} style={{height: playbarHeight}}>

            
            <audio ref={audioRef} autoPlay={false} src={playingContext ? playingContext.urls.high_mp3 : null}></audio>

            <input className="seek-bar" step={0.1} type="range" min={"0"} value={currentTime/1000} max={audioDuration} onChange={seekTime} >
                
            </input>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1em"}}>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{fontSize: "24px"}}>
                    skip_previous
                    </span>
                </button>
                
                {
                    !props.isAudioPaused ?
                    
                    <button className="icon-button" onClick={() => {props.toggleAudioPause()}}>
                        <span class="material-symbols-sharp" style={{fontSize: "40px"}}>
                        pause
                        </span>
                    </button> 

                    :
                    <button className="icon-button" onClick={() => {props.toggleAudioPause()}}>
                        <span class="material-symbols-sharp" style={{fontSize: "40px"}}>
                        play_arrow
                        </span>
                    </button> 
                    
                }
                
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{fontSize: "24px"}}>
                    skip_next
                    </span>
                </button>

                <p style={{color: "grey"}}>{Math.trunc(currentTime/1000/60)}:{Math.trunc(currentTime/1000%60)} / {Math.trunc(audioDuration/60)}:{Math.trunc(audioDuration%60)}</p>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>

                
                    

                    { playingContext ? 
                    <div style={{display: "flex", flexDirection: "row", maxWidth: "500px"}}>
                    <div className="song-list-item">
                        <img src={playingContext.channel.urls.logo_image.original ? playingContext.channel.urls.logo_image.original : musicNote}></img>
                        <div>
                            <p style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", webkitLineClamp: "3"}}>{playingContext.title}</p>
                            <p style={{overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis", webkitLineClamp: "3"}}>{playingContext.description}</p>
                        </div>
                    </div>

                    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                        <button className="icon-button">
                            <span className="material-symbols-sharp" style={{fontSize: "18px"}}>
                            thumb_down
                            </span>
                        </button>
                        
                        <button className="icon-button">
                            <span className="material-symbols-sharp" style={{fontSize: "18px"}}>
                            thumb_up
                            </span>
                        </button>
                        
                        <button className="icon-button">
                            <span className="material-symbols-sharp" style={{fontSize: "18px"}}>
                            more_vert
                            </span>
                        </button>


                        </div>
                    </div>
                    : null
                    }

                        
                


            </div>

            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "center", gap: "0.5em", position: "relative"}}>
                
                
                <input type="range" value={volume} step={0.01} max={1} style={{position: "relative", width: "100px", top: "+2px", visibility: audioSlideVisible}}
                onChange={handleVolume}></input>
                
                <button className="icon-button" onMouseEnter={() => handleMouseEnterAudio("visible")}>
                    <span class="material-symbols-sharp" style={{color: "grey"}}>
                    volume_up
                    </span>

                </button>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{color: "grey"}}>
                    repeat
                    </span>
                </button>
                
                
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" onClick={() => setPlaybarHeight("0px")}>
                    arrow_drop_down
                    </span>
                </button>
                
            </div>

            


        </div>
    )
}

export default PlayBar;