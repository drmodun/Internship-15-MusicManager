import React, { cloneElement, useState } from "react";
import { AlbumData, collection as defaultCollection} from "./data";
import { Album} from "./components/Album"
import { AlbumsTable } from "./components/AlbumsTable";
import "./App.css"
import { AlbumInput } from "./components/AlbumInput";
export const App = ()=>{
    console.log("iosdhfisdfios")
    const [collection, setCollection] = useState(defaultCollection);
    function handleNewAlbum(album){
        if (collection.length>=10)
            return false
        const newCollection = [...collection, album];
        setCollection(newCollection);
        return true
    }
    function deleteAlbum(id){
        const newCollection = collection.filter(album=>album.id!=id);
        setCollection(newCollection);
    }
    return <div>
        <h1>Music Manager</h1>
        <AlbumsTable albums = {collection} deleteAlbum = {deleteAlbum}>

        </AlbumsTable>
        <AlbumInput handleNewAlbum = {handleNewAlbum}>

        </AlbumInput>
    </div>/*<div>
        cvgcvvd
            {collection.map(album =>{
                console.log(album)
                return<Album  album={album}>
                </Album>
            })}
        </div>*/
}