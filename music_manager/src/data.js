export const genreDictionary = {
    1 : "Metal",
    2 : "Pop",
    3 : "Rock",
    4 : "Rap",
    5 : "Techno",
    6 : "Country",
    7 : "Classical",
    8 : "Other"
}
export let increment =localStorage.getItem("albums")===null ? 0 : JSON.parse(localStorage.getItem("albums")).length;
export class AlbumData{
    constructor(name, author, genreId, yearOfRelease, dateOfAdd){
        
        this.name = name;
        this.author = author;
        this.genreId = genreId;
        this.genre = genreDictionary[genreId]
        this.yearOfRelease = yearOfRelease;
        this.dateOfAdd = dateOfAdd;
        this.id = increment+1;
        increment+=1;
    }
}
export const collection = localStorage.getItem("albums")===null ? 
[
    new AlbumData("Bad", "Micahel Jackson", 3, new Date(28,12,2002).getFullYear(), new Date()),
    new AlbumData("Sample", "Jackson", 4, new Date(28,11,2002).getFullYear(), new Date()),
    new AlbumData("Test", "Micahel" , 8, new Date(28,10,2002).getFullYear(), new Date()),
] : localStorage.getItem("albums")
