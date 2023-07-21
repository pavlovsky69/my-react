import React, {useEffect, useState} from 'react';
import {Album} from "./Album/Album";
import {albumService} from "../../apiService/albumService";

const Albums = () => {
    const [albums, setAlbums]=useState([]);
    useEffect(()=>{
        albumService.getAll().then(({data}) => setAlbums(data))
    },[])
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export {Albums};




// const Albums = () => {
//     const [albums, setAlbums]=useState([]);
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/albums').then(value => value.json()).then(value => setAlbums(value))
//     },[])
//     return (
//         <div>
//             {albums.map(album=><Album key={album.id} album={album}/>)}
//         </div>
//     );
// };
//
// export {Albums};