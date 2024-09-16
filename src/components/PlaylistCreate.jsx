import { useState, useEffect } from "react";
import PlaylistCard from "./PlaylistCard";
function PlaylistCreate(props){

    const [imgSrc, setImgSrc] = useState("");
    const [playlist, setPlaylist] = useState({cover: "", name: "", description: ""});
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isFormValid, setFormValid] = useState(false);

    useEffect(() => {
        checkFormValidity();
    }, [title, description, imgSrc]);

    function handleImgSrcChange(ev){
        setImgSrc(ev.target.value, ev.target.reportValidity());
        setPlaylist({...playlist, cover : ev.target.value});
        
    }

    function handleTitleChange(ev){
        setTitle(ev.target.value, ev.target.reportValidity());
        setPlaylist({...playlist, name : ev.target.value});
    }

    function handleDescriptionChange(ev){
        setDescription(ev.target.value, ev.target.reportValidity());
        setPlaylist({...playlist, description : ev.target.value});
    }

    function handleSubmit(ev){
        ev.preventDefault();
        props.addPlayList(playlist);
        resetForm();
    }

    function checkFormValidity(){
        if(title !== "" && description !== "" && imgSrc !== "" ){
            setFormValid(true);
        }else{
            setFormValid(false);    
        }
    }

    function resetForm() {
        setImgSrc("");
        setPlaylist({cover: "", name: "", description: ""});
        setTitle("");
        setDescription("");
        setFormValid(false);
    }

    return(
        <div className="playlist-create">
            
            <form style={{display: "flex", flexDirection: "column", gap: "1em", width: "350px"}} onSubmit={handleSubmit}>
                <h1>Creá tu playlist</h1>
                <label style={{color: "white"}} for="title"> Título
                    <input required name="title" value={title} onChange={(ev) => handleTitleChange(ev)}></input>
                </label>
                <label style={{color: "white"}} for="description"> Descripción
                    <input required name="description" value={description} onChange={(ev) => handleDescriptionChange(ev)}></input>
                </label>
                <label style={{color: "white"}} for="imgsrc"> Imagen (url)
                    <input required name="imgsrc" type="url" value={imgSrc} onChange={(ev) => handleImgSrcChange(ev)}></input>
                </label>

                <button type="submit" disabled={!isFormValid} className="round-button" style={{marginTop: "1.5em"}}>Agregar Playlist</button>
            </form>

            <PlaylistCard playlist={playlist} ></PlaylistCard>
        </div>
    )
}

export default PlaylistCreate;