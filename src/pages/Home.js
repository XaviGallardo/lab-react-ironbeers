import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <Link className="link" to="/beers">
        <div className="beers">
          <h3>All beers</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos
            enim, iste provident quidem tenetur nihil hic laudantium
            consequuntur nulla, mollitia assumenda optio commodi ut voluptate
            repellendus nesciunt reiciendis labore?
          </p>
        </div>
      </Link>
      <Link className="link" to="/random-beer">
        <div className="random-beer">
          <h3>Random beer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos
            enim, iste provident quidem tenetur nihil hic laudantium
            consequuntur nulla, mollitia assumenda optio commodi ut voluptate
            repellendus nesciunt reiciendis labore?
          </p>
        </div>
      </Link>
      <Link className="link" to="/new-beer">
        <div className="new-beer">
          <h3>New beer</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam eos
            enim, iste provident quidem tenetur nihil hic laudantium
            consequuntur nulla, mollitia assumenda optio commodi ut voluptate
            repellendus nesciunt reiciendis labore?
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
