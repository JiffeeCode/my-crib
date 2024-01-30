const datalist_song = [
    {
        id: 1,
        song_name: '505 - Arctic Monkeys',
        path: `../music/505ArcticMonkeys.mp3`,
        path_img: `img/505.jpg`
    },

    {
        id: 2,
        song_name: 'Apocalypse - Cigarettes After Sex',
        path: `../music/ApocalypseCigarettesAfterSex.mp3`,
        path_img: `img/Apocalypse.jpg`
    },

    {
        id: 3,
        song_name: 'Freaks - Surf Curse',
        path: `../music/FreaksSurfCurse.mp3`,
        path_img: `img/Freaks.jpg`
    },

    {
        id: 4,
        song_name: 'Mr Loverman - Ricky Montgomery',
        path: `../music/MrLovermanRickyMontgomery.mp3`,
        path_img: `img/mrloverman.jpg`
    },

    {
        id: 5,
        song_name: 'My Love Mine All Mine - Mitski',
        path: `../music/MyLoveMineAllMineMitski.mp3`,
        path_img: `img/mylovemyallmine.jpg`
    },

    {
        id: 6,
        song_name: 'See You Again - Tyler The Creator',
        path: `../music/SeeYouAgainTylerTheCreator.mp3`,
        path_img: `img/seeyouagain.jpg`
    },

    {
        id: 7,
        song_name: 'Telephone - Vacations',
        path: `../music/TelephoneVacations.mp3`,
        path_img: `img/telephone.jpg`
    },

];

const listSong = document.querySelector('#list_song');

datalist_song.forEach(item => {
    listSong.innerHTML +=
    `<div id="component">
        <div id="song_avatar">
            <img src=${item.path_img}>
        </div>
        <div>
            <h3>${item.song_name}</h3>
        </div>
        <i class="fas fa-ellipsis-v"></i>
    </div>`
});

const togglePlayButton = document.querySelector('.play-button');
var toggle;
const currentAvatar = document.querySelector('#current_music_avatar img');

togglePlayButton.addEventListener('click', function (){
    //run that shit
    if (!toggle){
        togglePlayButton.classList.remove('fa-circle-play');
        togglePlayButton.classList.add('fa-circle-pause');
        currentAvatar.classList.add('rounder');
        toggle = true;
        
    //stop that shit
    } else {
        togglePlayButton.classList.add('fa-circle-play');
        togglePlayButton.classList.remove('fa-circle-pause');
        currentAvatar.classList.remove('rounder');
        toggle = false;
        
    }
    
});



