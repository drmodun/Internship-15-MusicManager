export const genreDictionary = {
    1: "Metal",
    2: "Pop",
    3: "Rock",
    4: "Rap",
    5: "Techno",
    6: "Country",
    7: "Classical",
    8: "Other"
}
export let increment = localStorage.getItem("albums") === null ? 0 : JSON.parse(localStorage.getItem("albums")).length;
export class AlbumData {
    constructor(name, author, genreId, yearOfRelease, dateOfAdd) {

        this.name = name;
        this.author = author;
        this.genreId = genreId;
        this.genre = genreDictionary[genreId]
        this.yearOfRelease = yearOfRelease;
        this.dateOfAdd = dateOfAdd;
        this.id = increment + 1;
        increment += 1;
    }
}
export const local = window.localStorage;
export const collection = local.getItem("albums") === null ? [] : JSON.parse(local.getItem("albums"))
if (collection === []) {
    local.setItem("albums", JSON.stringify([]));
}
