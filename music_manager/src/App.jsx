import React from "react";
import { AlbumData, collection} from "./data";
import { Album} from "./components/Album"
import { AlbumsTable } from "./components/AlbumsTable";
import "./App.css"
export const App = ()=>{
    console.log("iosdhfisdfios")
    return <div>
        <AlbumsTable albums = {collection}>

        </AlbumsTable>
    </div>/*<div>
        cvgcvvd
            {collection.map(album =>{
                console.log(album)
                return<Album  album={album}>
                </Album>
            })}
        </div>*/
}