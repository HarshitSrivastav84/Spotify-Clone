console.log("Lets write JS");

async function getSongs() {

    let a = await fetch("http://127.0.0.1:3000/songs/")
    let responce = await a.text();
    // console.log(responce);
    let div = document.createElement("div");
    div.innerHTML = responce;
    let as = div.getElementsByTagName("a")
    let songs = [];
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href);
        }
    }
    return songs;
}

async function main() {
    // Get the list of the songs
    let songs = await getSongs();
    console.log(songs);

    let songUL =  document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const sing of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li> ${sing} </li>`;
    }

    // Play the first song
    var audio = new Audio(songs[0]);
    //audio.play();

    audio.addEventListener("ontimeupdate", () => {
        let duration = audio.duration;
        console.log(duration)
    });
}
main();