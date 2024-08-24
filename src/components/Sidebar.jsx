

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
           

           <button className="round-button">
                <span class="material-symbols-sharp">
                add
                </span>
                
                {props.isSidebarOpen ? "New Playlist" : ""}
           </button>
            
        </div>
    )
}


export default Sidebar;