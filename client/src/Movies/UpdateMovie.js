import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';

const UpdateMovie = (props) => {
  const history = useHistory();
  const [movie, setMovie] = useState(null);
  const params = useParams();

  const fetchMovie = (id) => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .catch((err) => console.log(err.response));
  };

  const editMovie = () => {
    axios
      .put(`http://localhost:5000/api/movies/${movie.id}`, movie)
      .then((res) => {
        props.refreshMovies();
        history.push('/');
      })
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    fetchMovie(params.id);
  }, [params.id]);

  const handleChange = (e) => {
    e.persist();
    const value =
      e.target.name === 'stars' ? e.target.value.split(', ') : e.target.value;
    setMovie((previous) => ({ ...previous, [e.target.name]: value }));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editMovie();
  };

  return (
    <div>
      <Card>
        {movie && (
          <Form onSubmit={handleEdit}>
            <FormGroup>
              <Label htmlFor="title">
                Title:
                <Input
                  id="title"
                  type="text"
                  name="title"
                  value={movie.title}
                  onChange={handleChange}
                  placeholder="Enter Title"
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="director">
                Director:
                <Input
                  id="director"
                  type="text"
                  name="director"
                  value={movie.director}
                  onChange={handleChange}
                  placeholder="Enter Director"
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="metascore">
                Metascore:
                <Input
                  id="metascore"
                  type="text"
                  name="metascore"
                  value={movie.metascore}
                  onChange={handleChange}
                  placeholder="Enter Metascore"
                />
              </Label>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="stars">
                Stars:
                <Input
                  id="stars"
                  type="text"
                  name="stars"
                  value={movie.stars.join(', ')}
                  onChange={handleChange}
                  placeholder="Starring?"
                />
              </Label>
            </FormGroup>
            <Button color="info" onClick={handleEdit}>
              Edit Movie
            </Button>
          </Form>
        )}
      </Card>
    </div>
  );
};

export default UpdateMovie;
