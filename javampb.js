const songs = [
    {
        title: "Palavras No Corpo",
        artist: "Gal Costa",
        cover: "https://i.pinimg.com/236x/c9/02/cf/c902cf83ef7750a349f71cd1575baced.jpg",
        music: "videoplayback.m4a" 
    },
    {
        title: "Gota De Sangue",
        artist: "Angela Ro Ro",
        cover: "https://i.pinimg.com/236x/64/7c/77/647c77d71aec9c88857c513cd024fc04.jpg",
        music: "Gota De Sangue.mp3"
    },
    {
        title: "Pétala",
        artist: "Djavan",
        cover: "https://i.pinimg.com/236x/c8/e5/3d/c8e53d1d0e78540d7687ca3b6a830f42.jpg",
        music: "Djavan - Pétala (Áudio Oficial).mp3"
    },
     {
        title: "Depois De Ter Você",
        artist: "Maria Bethânia",
        cover: "https://i.pinimg.com/236x/bc/08/54/bc0854c570f0c4d206cb9961e0a0e052.jpg",
        music: "Depois De Ter Você.mp3" 
    },
    {
        title: "Motor",
        artist: "Gal Costa",
        cover: "https://i.pinimg.com/236x/08/a7/df/08a7df49894b6c615286c06bba0515e5.jpg",
        music: "Gal Costa _ Motor (Vídeo Oficial).mp3" 
    },

];

document.getElementById('vinyl').addEventListener('click', function() {

    const randomSong = songs[Math.floor(Math.random() * songs.length)];
    
    document.getElementById('songTitle').textContent = randomSong.title;
    document.getElementById('artistName').textContent = randomSong.artist;
    document.getElementById('albumCover').src = randomSong.cover;

    const musicPlayer = document.getElementById('musicPlayer');
    musicPlayer.src = randomSong.music;

    musicPlayer.play();

    document.getElementById('musicSuggestion').classList.remove('hidden');
});