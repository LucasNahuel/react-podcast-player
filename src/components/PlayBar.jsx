import album1 from "../assets/images/album1.png"

function PlayBar(props){
    return(
        <div className="play-bar">

            <div className="seek-bar">
                <div className="progressed-bar">
                    <div style={{backgroundColor: "inherit", width: "12px", height: "12px", borderRadius: "50%", position: "absolute", inset: "-5px 0 auto auto"}}></div>
                </div>
            </div>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "1em"}}>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{fontSize: "24px"}}>
                    skip_previous
                    </span>
                </button>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{fontSize: "40px"}}>
                    play_arrow
                    </span>
                </button>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{fontSize: "24px"}}>
                    skip_next
                    </span>
                </button>

                <p style={{color: "grey"}}>0:10 / 3:41</p>
            </div>

            <div style={{display: "flex", alignItems: "center"}}>
                <img src={album1} style={{width: "48px", margin: "0.5em"}}></img>

                <div style={{display: "flex", flexDirection: "row", maxWidth: "500px"}}>
                    <div style={{display: "flex", flexDirection: "column", maxWidth: "407px", width: "100%", flexShrink: "0"}}>
                        <p style={{marginBlock: "0.25em", fontWeight: "bold"}}>Can't Stop the Feeling!</p>
                        <p style={{marginBlock: "0.25em"}}>Calvin Harris · 37K views · 603 likes</p>
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


            </div>

            <div style={{display: "flex", flexDirection:"row", justifyContent: "center", alignItems: "center", gap: "0.5em"}}>
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{color: "grey"}}>
                    repeat
                    </span>
                </button>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp" style={{color: "grey"}}>
                    volume_up
                    </span>

                </button>
                
                <button className="icon-button">
                    <span class="material-symbols-sharp">
                    arrow_drop_down
                    </span>
                </button>
                
            </div>

        </div>
    )
}

export default PlayBar;