import React from 'react';

const Card = props => {
  const { beer } = props;
  return (
    <section className="beer-card">
      <div className="beer-card-image">
        <img src={beer.image_url} alt="" />
      </div>
      <div className="beer-card-container">
        <p className="beer-name">{beer.name}</p>
        <p className="beer-tagline">{beer.tagline}</p>
        <p className="beer-author">
          <span>created by:</span> {beer.contributed_by}
        </p>
      </div>
    </section>
  );
};

export default Card;
