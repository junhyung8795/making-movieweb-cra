import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "../css/Movie.module.css";
function Movie ({id, medium_cover_image, title, summary, genres}) {

    return (
        <div className={styles.movieBackground}>
          <img className={styles.img} src={medium_cover_image} alt={title} />
          <h2>
            <Link to={`/movie/${id}`} className={styles.title}>{title}</Link>   
          </h2>
        </div>);
}


Movie.propTypes ={
    id:PropTypes.number.isRequired,
    medium_cover_image:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
}
export default Movie;