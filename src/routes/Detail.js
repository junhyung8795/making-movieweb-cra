import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import styles from "../css/Detail.module.css";

function Detail() {
    const [detail, setDetail] = useState([]);
    const {id}= useParams();
    const [genres, setGenres] =useState([]);
    const getMovie = async() => {
         const json=await(
            await 
            fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`))
            .json();
            console.log(json);
            setDetail(json.data.movie);
            setGenres(json.data.movie.genres);
    };
    useEffect(()=>{
        getMovie();    
    },[]);
    console.log(detail.genres);
    console.log(genres);
    return (
        <div className={styles.detailBody}>
        <img src="data:image/jpeg;base64,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"
        className={styles.backgroundPicture}/>
        <img className={styles.movieImage} src={detail.medium_cover_image} />
        <h1 className={styles.discription_full}>Summary: {detail.description_full}</h1>
        <ul className={styles.genreList}>
          <div className={styles.genreListHeader}>Genre:</div>
          {genres.map((g,index)=>
          <li className={styles.genreListItem} key={index}>{g}</li>)}
        </ul>
        <a className={styles.link} href={detail.url}>Go to download!</a>  
        </div>
    );
}

export default Detail;