import { useState } from 'react'
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



function App() {
  const [count, setCount] = useState(0)

  const data = {
    listenAgainCarousel : {
      subtitle: "Sufian Aly",
      title: "Listen Again",
      items: [
        <PlaylistCard playlist={{type: "playlistCard", cover: pl1, name: "Playlist Name", songCount: 68, artist: "Artist Name"}}></PlaylistCard>,
        <SongCard song={{type: "songCard", cover: s1, name: "Song Title", author: "Channel/Artist", views: "450M"}}></SongCard>,
        <PlaylistCard playlist={{type: "playlistCard", cover: pl2, name: "Playlist Name", songCount: 68, artist: "Artist Name"}}></PlaylistCard>,
        <PlaylistCard playlist={{type: "playlistCard", cover: pl3, name: "Playlist Name", songCount: 68, artist: "Artist Name"}}></PlaylistCard>,
        <PlaylistCard playlist={{type: "playlistCard", cover: pl4, name: "Playlist Name", songCount: 68, artist: "Artist Name"}}></PlaylistCard>
      ]
    },
    similarToCarousel : {
      subtitle: "SIMILAR TO",
      title: "Akon",
      items: [
        <ArtistCard artist={{cover: artist1, title: "Listen again", subtitle: "4.53M subscribers"}}></ArtistCard>,
        <ArtistCard artist={{cover: artist2, title: "Listen again", subtitle: "4.53M subscribers"}}></ArtistCard>,
        <ArtistCard artist={{cover: artist3, title: "Listen again", subtitle: "4.53M subscribers"}}></ArtistCard>,
        <ArtistCard artist={{cover: artist4, title: "Listen again", subtitle: "4.53M subscribers"}}></ArtistCard>,
        <ArtistCard artist={{cover: artist5, title: "Listen again", subtitle: "4.53M subscribers"}}></ArtistCard>
      ]
    },
    recommendedAlbumCarousel : {
      title: "Recommended albums",
      items: [
        <AlbumCard album={{title: "Listen Again", cover: album2}}></AlbumCard>,
        <AlbumCard album={{title: "Listen Again", cover: album3}}></AlbumCard>,
        <AlbumCard album={{title: "Listen Again", cover: album4}}></AlbumCard>,
        <AlbumCard album={{title: "Listen Again", cover: album5}}></AlbumCard>,
        <AlbumCard album={{title: "Listen Again", cover: album1}}></AlbumCard>
      ]
    },
    quickPicksCarousel : {
      title: "Quick picks",
      subtitle: "START RADIO FROM A SONG",
      isSongList: true,
      items: [
        <SongList songs={[
          {cover: song1, title: "Happy", author: "Robbie Williams · Listen Again"},
          {cover: song2, title: "Love Story", author: "John Lennon (of the Beatles)"},
          {cover: song3, title: "Smooth", author: "Coldplay (fronted by Chris)"},
          {cover: song4, title: "Hey, Soul Sister", author: "Sam Smith · Listen Again"},
          {cover: song5, title: "Cheap Thrills", author: "Jessie J · Listen Again"},
          {cover: song6, title: "I Will Always Love You", author: "Coldplay (fronted by Chris)"},
          {cover: song7, title: "I Gotta Feeling", author: "George Michael (of Wham!)"},
          {cover: song8, title: "Someone Like You", author: "Elton John · Listen Again"},
          {cover: song9, title: "Royals", author: "Florence Welch (of Florence Welch)"},
          {cover: song10, title: "Radioactive", author: "Listen Again · Listen Again"},
          {cover: song11, title: "Say Something", author: "Listen Again · Listen Again"},
          {cover: song12, title: "Halo", author: "Ellie Goulding · Listen Again"},
          {cover: song13, title: "Havana", author: "Annie Lennox (of Eurythmic)"},
          {cover: song14, title: "Can's Stop This Feeling!", author: "Calvin Harris (singer and producer)"},
          {cover: song15, title: "Stitches", author: "Peter Gabriel · Listen Again"},
          {cover: song16, title: "Rolling in the Deep", author: "Adele · Listen Again"},
        ]}></SongList>
      ]
    }
  }

  return (
    <>
      <Header></Header>
      <div style={{display: "flex", flexDirection: "row", alignItems: "top", minHeight: "100vh"}}>
        <Sidebar></Sidebar>

        <div style={{display: "flex", flexDirection: "column", padding: "0 2.5em", overflow: "hidden", marginBottom: "100px"}}>
          <Chiplist></Chiplist>

          <Carousel carousel={data.listenAgainCarousel}></Carousel>
          <Carousel carousel={data.similarToCarousel}></Carousel>
          <Carousel carousel={data.quickPicksCarousel}></Carousel>
          <Carousel carousel={data.recommendedAlbumCarousel}></Carousel>
        </div>
        
      </div>

      <PlayBar></PlayBar>
    </>
  )
}

export default App
