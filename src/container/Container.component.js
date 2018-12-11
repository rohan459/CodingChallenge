// Import react
import React from 'react';
import Carousel from '../carousel/Carousel.component.js';
import Header from '../header/Header.component.js';
import Image from '../image/Image.component.js'
import Static from '../static/Static.component.js'
import Footer from '../footer/Footer.component.js'


class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staticComponentHeader1: "First featurette heading. It'll blow your mind.",
      staticComponentHeader2: "Oh yeah, it's that good. See for yourself.",
      staticComponentHeader3: "And lastly, this one. Checkmate",
      staticComponentContent:
        'Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.' +
        'Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.'
    }
  }
  render() {
    return (
      <main className="container">
        <section className="carousel-section">
          <div className="row">
            <div className="col-sm-12">
              <Carousel />
            </div>
          </div>
        </section>

        <section className="heading-section">
          <div className="row">
            <div className="col-sm-4">
              <Header />
            </div>
            <div className="col-sm-4">
              <Header />
            </div>
            <div className="col-sm-4">
              <Header />
            </div>
          </div>
      </section>

      <section className="body-section">
        <div className="row">
          <div className="col-md-6">
            <Static
              heading={this.state.staticComponentHeader1}
              content={this.state.staticComponentContent}
            />
          </div>
          <div className="col-md-6 ">
            <Image />
          </div>
        </div>

        <div className="row mid-column">
          <div className="col-md-6">
            <Image />
          </div>
          <div className="col-md-6">
            <Static
              heading={this.state.staticComponentHeader2}
              content={this.state.staticComponentContent}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Static
              heading={this.state.staticComponentHeader3}
              content={this.state.staticComponentContent}
            />
          </div>
          <div className="col-md-6 ">
            <Image />
          </div>
        </div>
      </section>

      <section className="footer-section">
        <div className="row">
          <div className="col-md-12">
            <Footer />
          </div>
        </div>
      </section>
    </main>
    );
  }
}
export default Container;
