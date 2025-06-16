const form = document.getElementById('songForm');
const search = document.getElementById('songInput');
const songList = document.getElementById('songList');
const more = document.getElementById('more');

const apiUrl = 'https://api.lyrics.ovh/v1';

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const songName = search.value.trim();
    if (!songName ) {
        alert('Please enter a song name');
        return;
    }

    try {
       const res = await fetch(`${apiUrl}/suggest/${songName}`);
    const allSongs = await res.json();
    console.log(allSongs);
        if (!allSongs.data || allSongs.data.length === 0) {
            alert('No songs found');
            return;
        }
        
        const song = allSongs.data.find(s => s.artist.name.toLowerCase() === artistName.toLowerCase());
        if (!song) {
            alert('Song not found for the specified artist');
            return;
        }

        const response = await fetch(`${apiUrl}/${song.artist.name}/${song.title}`);
    showData(allSongs);
        console.log(res);
        if (!res.ok) {
            throw new Error('Song not found');
        }
        const data = await response.json();
        displaySong(data);
        console.log(data);
    } catch (error) {
        alert(error.message);
    }
    
});