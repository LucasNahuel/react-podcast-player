import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chiplist from './components/Chiplist'
import PlaylistCard from './components/PlaylistCard'
import pl1 from './assets/images/pl1.png'
import Carousel from './components/Carousel'
import s1 from './assets/images/s1.png'
import pl2 from './assets/images/pl2.png'
import pl3 from './assets/images/pl3.png'
import pl4 from './assets/images/pl4.png'
import SongCard from './components/SongCard'
import ArtistCard from './components/ArtistCard'
import artist1 from './assets/images/artist1.png'
import artist2 from './assets/images/artist2.png'
import artist3 from './assets/images/artist3.png'
import artist4 from './assets/images/artist4.png'
import artist5 from './assets/images/artist5.png'
import PlayBar from './components/PlayBar'
import AlbumCard from './components/AlbumCard'
import album2 from './assets/images/album2.png'
import album3 from './assets/images/album3.png'
import album4 from './assets/images/album4.png'
import album5 from './assets/images/album5.png'
import album1 from './assets/images/album1.png'
import SongList from './components/SongList'
import song1 from './assets/images/song1.png'
import song2 from './assets/images/song2.png'
import song3 from './assets/images/song3.png'
import song4 from './assets/images/song4.png'
import song5 from './assets/images/song5.png'
import song6 from './assets/images/song6.png'
import song7 from './assets/images/song7.png'
import song8 from './assets/images/song8.png'
import song9 from './assets/images/song9.png'
import song10 from './assets/images/song10.png'
import song11 from './assets/images/song11.png'
import song12 from './assets/images/song12.png'
import song13 from './assets/images/song13.png'
import song14 from './assets/images/song14.png'
import song15 from './assets/images/song15.png'
import song16 from './assets/images/song16.png'
import PlaylistCreate from './components/PlaylistCreate'
import useFetch from './hooks/useFetch'


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

          {data ? <SongList
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

      <Header toggleSidebar={toggleSidebar} ></Header>
      <div style={{display: "flex", flexDirection: "row", alignItems: "top", minHeight: "100vh"}}>
        <Sidebar isSidebarOpen={isSidebarOpen} changeLocation={changeLocation}  playListList={playListList}></Sidebar>
       
        {renderLocation()}
        
      </div>

      <PlayBar playing={playingAudio}></PlayBar> 
    </>
  )
}

export default App
