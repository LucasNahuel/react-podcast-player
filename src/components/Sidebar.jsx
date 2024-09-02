import imgPlaceholder from '../assets/images/img-placeholder.jpg';

function Sidebar(props){

    let menuItems = [];

    for( let i = 0; i < 3; i++){
        menuItems.push(
            <a className="menu-item" style={{flexDirection: props.isSidebarOpen ? "row" : "column", width: props.isSidebarOpen ? "100%" : "fit-content", gap: props.isSidebarOpen ? "1.5em" : "0"}}>
                <span class="material-symbols-sharp">
                group
                </span>
                Home
            </a>
        )
    }

    return(
        <div className="sidebar" style={{width: props.isSidebarOpen ? "333px" : "88px"}}>
            

            {menuItems}
           
           <hr style={{width: "100%", height: "1px", marginBlockEnd: "1.5em", borderColor: "rgb(48, 48, 48)"}}></hr>

           <button className="round-button" onClick={() => props.changeLocation("playlistCreate")}>
                <span class="material-symbols-sharp">
                add
                </span>
                
                {props.isSidebarOpen ? "New Playlist" : ""}
           </button>

            <div className="sidebar-playlist">

                {props.playListList.map(i => 
                <div className="song-list-item">
                        <img src={i.cover ? i.cover : imgPlaceholder}></img>
                        <div>
                            <p>{i.name}</p>
                            <p>{i.description}</p>
                        </div>
                    </div>
                )}
            </div>
            
        </div>
    )
}


export default Sidebar;