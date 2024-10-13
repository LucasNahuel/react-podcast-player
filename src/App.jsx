import { useEffect, useState } from 'react' 
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chiplist from './components/Chiplist'
import PlayBar from './components/PlayBar'
import SongList from './components/SongList'
import PlaylistCreate from './components/PlaylistCreate'
import useFetch from './hooks/useFetch'
import { PlayingContext } from './providers/PlayingContext'
import { useContext } from 'react'


function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [location, setLocation] = useState("home");
  const [playListList, setPlaylistList] = useState([]);
  const {data, loading, error} = useFetch("https://api.audioboom.com/audio_clips");
  const [playingAudio, setPlayingAudio] = useState(null);

  if(error){
    console.log(error);
  }

  if(data){
    console.log(data);
  }

  const changeAudio = (audio) => {
    console.log(audio);
    setPlayingAudio(audio);
  }


  const toggleSidebar = () => {
    setSidebarOpen( (isSidebarOpen) => {
      return !isSidebarOpen
    });
  }

  const changeLocation = (newLocation) => {
    setLocation(newLocation);
  }

  const renderLocation = () => {
    if(location === "home"){
      return(
        <div style={{display: "flex", flexDirection: "column", padding: "0 2.5em", overflow: "hidden", margin:"0 auto", marginBottom: "100px", width: "100%"}}>
        
          <Chiplist></Chiplist>

          <div style={{height: "4em"}}></div>

          {data ?<SongList
            songs={data.body.audio_clips}
            changeAudio={changeAudio}
          ></SongList>
 : null}

          
        </div>
      )
    }else if(location === "playlistCreate"){
      return(<div style={{display: "flex", flexDirection: "column", padding: "0 2.5em", overflow: "hidden", margin:"0 auto", marginBottom: "100px", width: "100%"}}>
         
          <PlaylistCreate addPlayList={addPlayList}></PlaylistCreate>
          
      </div>)
    }
  }

  const addPlayList = (playlist) => {
    console.log(playlist);
    playListList.push(playlist);
    setPlaylistList([...playListList]); 
  }
  

  return (
    
    <>
      <PlayingContext.Provider value={playingAudio}>
        <Header toggleSidebar={toggleSidebar} ></Header>
        <div style={{display: "flex", flexDirection: "row", alignItems: "top", minHeight: "100vh"}}>
          <Sidebar isSidebarOpen={isSidebarOpen} changeLocation={changeLocation}  playListList={playListList}></Sidebar>
        
          {renderLocation()}
          
        </div>

        <PlayBar ></PlayBar> 
      </PlayingContext.Provider>
    </>
  )
}

export default App
