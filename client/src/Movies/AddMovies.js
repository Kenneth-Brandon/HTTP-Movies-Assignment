import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button, Card, Form, FormGroup, Label, Input } from 'reactstrap';

const AddMovie = (props) => {
  const history = useHistory();
  const [movie, setMovie] = useState({
    title: '',
    director: '',
    metascore: '',
    stars: [],
  });

  const addMovie = () => {
    axios
      .post(`http://localhost:5000/api/movies`, movie)
      .then((res) => {
        props.refreshMovies();
        history.push('/');
      })
      .catch((err) => console.log(err.response));
  };

  const handleChange = (e) => {
    e.persist();
    const value =
      e.target.name === 'stars' ? e.target.value.split(', ') : e.target.value;
    setMovie((previous) => ({ ...previous, [e.target.name]: value }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addMovie();
  };

  return (
    <div>
      <Card>
        <Form onSubmit={handleAdd}>
          <FormGroup className="add-card">
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
          <Button color="success" onClick={handleAdd}>
            Add Movie
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default AddMovie;
