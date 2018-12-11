// Import react
import React from 'react';

class Carousel extends React.Component {
  render() {
    return (
      <section>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
          <a className="navbar-brand" href="#">Carousel</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>

              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>

        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active text-left p-4">
              <h2>Example 1 Headline</h2>
              <p>Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.</p>
              <div><button type="button" class="btn btn-primary">Sign up today</button></div>
            </div>
            <div className="carousel-item  text-left p-4">
              <h2>Example 2 Headline</h2>
              <p>Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.</p>
              <div><button type="button" class="btn btn-primary">Sign up today</button></div>
            </div>
            <div className="carousel-item  text-left p-4">
              <h2>Example 3 Headline</h2>
              <p>Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.</p>
              <div><button type="button" class="btn btn-primary">Sign up today</button></div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}
export default Carousel;
