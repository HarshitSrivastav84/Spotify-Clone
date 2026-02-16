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

    let currentSongs;
    // Get the list of the songs.
    let songs = await getSongs();
    console.log(songs);

    // Show all the songs in the playlist.
    let songUL =  document.querySelector(".songList").getElementsByTagName("ul")[0];
    for (const sing of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li >
                                <img class="invert" src="music.svg" alt="">
                                <div class="info">
                                    <div class="songNameA">${sing.replaceAll("%"," ").slice(sing.indexOf('5Csongs'))}</div>
                                    <hr>
                                    <div>Harshit</div>
                                </div>
                                <div>
                                    <img class="invert" src="playLib.svg" alt="">
                                </div> </li>`
    }

    // Attacch an event listener to each songs.
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e=>{
        console.log(e)
    })

    // Play the first song
    // var audio = new Audio(songs[0]);
    //audio.play();

    // audio.addEventListener("ontimeupdate", () => {
    //     let duration = audio.duration;
    //     console.log(duration)
    // });
}
main();