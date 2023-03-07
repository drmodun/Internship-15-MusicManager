import React from "react"
import {Album} from "./Album"
export const AlbumsTable = (props) =>{

    const [albums, setAlbums] = React.useState();
    function handleAlbumAdd(albumToAdd){
        albumToAdd = {...albumToAdd, id : crypto.randomUUID}
        const newAlbums = [...albums, albumToAdd];
        setAlbums(newAlbums);
    }
    return <div className = "album-table">
        <div className="default">
            <span>Id</span>
            <span>Name</span>
            <span>Author</span>
            <span>Genre</span>
            <span>Year of release</span>
            <span>Date of add</span>
        </div>
        {
            props.albums.map(album=>{
                return <Album album={album}>
                </Album>
            })
        }
    </div>
}