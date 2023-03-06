import React from "react";
import { AlbumData, collection} from "./data";
import { Album} from "./components/Album";
import "./App.css"
export const App = ()=>{
    console.log("iosdhfisdfios")
    return <div>
        cvgcvvd
            {collection.map(album =>{
                console.log(album)
                return<Album  album={album}>
                </Album>
            })}
        </div>
}