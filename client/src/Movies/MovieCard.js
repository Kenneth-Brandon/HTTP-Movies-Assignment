import React from 'react';
import { Card, CardSubtitle, CardText, CardBody, CardTitle } from 'reactstrap';

const MovieCard = (props) => {
  const { title, director, metascore, stars } = props.movie;
  return (
    <div>
      <Card className="movie-card">
        <CardBody>
          <CardTitle style={{ fontSize: 35 }}>{title}</CardTitle>
          <div>
            <CardSubtitle style={{ fontSize: 20 }} className="movie-director">
              Director: <em>{director}</em>
            </CardSubtitle>
          </div>
          <br />
          <div>
            <CardSubtitle style={{ fontSize: 20 }} className="movie-metascore">
              Metascore: <strong>{metascore}</strong>
            </CardSubtitle>
          </div>

          <CardTitle style={{ fontSize: 35 }}>Actors</CardTitle>
          <CardSubtitle style={{ fontSize: 20 }}>
            {stars.map((star) => (
              <CardText key={star} className="movie-star">
                {star}
              </CardText>
            ))}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default MovieCard;
