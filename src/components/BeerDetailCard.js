import React from 'react';

const BeerDetailCard = props => {
  const { beer } = props;
  return (
    <section className="single-beer">
      <div>
        <img src={beer.image_url} alt={beer.name} />
        <p>
          {beer.name}
          {beer.attenuation_level}
        </p>
        <p>
          {beer.tagline}
          {beer.first_brewed}
        </p>
        <p>{beer.description}</p>
        <p>{beer.contributed_by}</p>
      </div>
    </section>
  );
};

export default BeerDetailCard;
