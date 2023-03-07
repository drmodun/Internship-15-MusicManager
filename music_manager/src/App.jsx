import React, { cloneElement, useState } from "react";
import { AlbumData, collection, collection as defaultCollection, increment} from "./data";
import { Album} from "./components/Album"
import { AlbumsTable } from "./components/AlbumsTable";
import "./App.css"
import { AlbumInput } from "./components/AlbumInput";
export const App = ()=>{
    console.log("iosdhfisdfios")
    const [collection, setCollection] = useState(defaultCollection);
    function handleNewAlbum(album){
        const newCollection = [...collection, album];
        setCollection(newCollection);
    }
    return <div>
        <h1>Music Manager</h1>
        <AlbumsTable albums = {collection}>

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