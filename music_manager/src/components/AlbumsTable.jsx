import React from "react"
import { Album } from "./Album"
export const AlbumsTable = (props) => {
    return <div className="album-table">
        <div className="default">
            <span>Name</span>
            <span>Author</span>
            <span>Genre</span>
            <span>Year of release</span>
            <span>Date of add</span>
        </div>
        {
            props.albums.map(album => {
                return <Album album={album} deleteAlbum={props.deleteAlbum} key = {album.id}>
                </Album>
            })
        }
    </div>
}