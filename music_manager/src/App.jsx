import React from "react";
import { collection as defaultCollection, local} from "./data";
import { AlbumsTable } from "./components/AlbumsTable";
import "./index.css"
import { AlbumInput } from "./components/AlbumInput";
import { FilterSection } from "./components/filter";
function reSort(x, y) {
    if (x.yearOfRelease > y.yearOfRelease)
        return -1;
    else if (x.yearOfRelease < y.yearOfRelease)
        return 1;
    else {
        if (x.author > y.author)
            return 1;
        else if (x.author < y.author)
            return -1;
        else {
            if (x.name > y.name)
                return 1;
            else {
                return -1;
            }
        }
    }
}
const sortedCollection = [...defaultCollection].sort((x, y) => reSort(x, y))

export const App = () => {
    console.log("iosdhfisdfios")
    const [sortedCollectionMutable, setSortedCollection] = React.useState(sortedCollection);
    const [globalCollection, setGlobalCollection] = React.useState(sortedCollection);
    const [filterName, setFilterName] = React.useState("");
    const [filterGenre, setFilterGenre] = React.useState("");
    function handleNewAlbum(album) {
        if (sortedCollectionMutable.length >= 10)
            return false
        local.setItem("albums", JSON.stringify([...globalCollection, album]));
        setSortedCollection((prev) => [...prev, album].sort((x, y) => reSort(x, y)))
        setGlobalCollection((prev) => [...prev, album].sort((x, y) => reSort(x, y)))
        return true
    }
    function deleteAlbum(id) {
        local.setItem("albums", JSON.stringify([...globalCollection.filter(album=>album.id!==id)]));
        setSortedCollection(prev => [...prev.filter(album => album.id !== id)])
        setGlobalCollection(prev => [...prev.filter(album => album.id !== id)])
    }
    function filterFunction(name, genre) {
        const filteredCollection = name.trim().length===0 ? globalCollection.sort((x, y) => reSort(x, y)) : globalCollection.filter(album => album.name.toLowerCase().includes(name.toLowerCase()))
        const filteredCollectionGenre = genre===0 ? [...filteredCollection] : filteredCollection.filter(album=>album.genreId===genre);
        setSortedCollection(filteredCollectionGenre);
    }
    return <div>
        <h1>Music Manager</h1>
        <AlbumsTable albums={sortedCollectionMutable} deleteAlbum={deleteAlbum}>

        </AlbumsTable>
        <FilterSection filterFunction={filterFunction}></FilterSection>
        <AlbumInput handleNewAlbum={handleNewAlbum}>
        </AlbumInput>
    </div>
}