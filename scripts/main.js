const picOfDay = document.querySelector("#pic-of-day");
const picBTN = document.querySelector("#pic-button");
const APIKey = "xughmG259eXvPiKheeSAVhT2eKh0cJ6Vh8NWAwIV";
const APILink = "https://api.nasa.gov/planetary/apod?api_key=xughmG259eXvPiKheeSAVhT2eKh0cJ6Vh8NWAwIV";
const dateSelected = document.querySelector("#date-el");

const getAPIPicture = (thisLink) => {
    return fetch(thisLink)
    .then(response => response.json())
    .then(spaceImage => spaceImage)
}

const getAPicture = () => {
    let tempLink = "";
    if (dateSelected.value) {
        tempLink = APILink + `&date=${dateSelected.value}`;
    } else {
        tempLink = APILink;
    }
    getAPIPicture(tempLink).then((object) =>{
        picOfDay.innerHTML += `
        <img src='${object.hdurl}' alt='${object.explanation}'/>
        <p>${object.explanation}</p>
        ` 
    })
}

picBTN.addEventListener("click" , getAPicture);