import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import MovieCard from './MovieCard';
import { Button } from 'reactstrap';

function Movie({ addToSavedList, refreshMovies }) {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const history = useHistory();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const deleteMovie = (id) => {
    axios
      .delete(`http://localhost:5000/api/movies/${params.id}`)
      .then((res) => {
        refreshMovies();
        history.push('/');
      })
      .catch((err) => console.log(err.response));
  };

  const saveMovie = () => {
    addToSavedList(movie);
  };

  const editMovie = () => {
    history.push(`/update-movie/${movie.id}`);
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="btn">
        <Button color="success" className="save-button" onClick={saveMovie}>
          Save
        </Button>
        <Button color="info" className="edit-button" onClick={editMovie}>
          Edit
        </Button>
        <Button color="danger" className="delete-button" onClick={deleteMovie}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default Movie;
