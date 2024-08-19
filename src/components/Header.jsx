import logo from '../assets/images/Youtube_Music_icon.svg.png';
import pp from '../assets/images/pp.png'

function Header(props){

   
    return(<div className="header-root">
        <div className="menu-container">
            <button>
                <span className="material-symbols-sharp">
                menu
                </span>
                


            </button>

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: "0.5em"}}>
                <img src={logo} class="logo"></img>
                <h1>Music</h1>
            </div>
            
        </div>
        <div className="searchbar-container">

            <div style={{display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: "#222222", height: "48px", border: "1px solid #303030",
             borderRadius: "0.25em", maxWidth: "416px", width: "100%"}}>
                <span className="material-symbols-sharp" style={{margin: "0 0.5em", color: "#595656"}}>
                    search
                </span>
                <input type='text' placeholder='Search...'>
                </input>
            </div>

            <div className='pp-container'>

                <button>
                    <span class="material-symbols-sharp">
                    cast
                    </span> 
                </button>

                
                <button>
                    <img className='pp' src={pp}></img>
                </button>


                
            </div>
            
        </div>

        
    </div>)
    
}

export default Header;