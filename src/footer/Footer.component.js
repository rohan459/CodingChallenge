// Import react
import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-container">
                <aside>
                  <div className="left inline">
                    <p className="inline">@2017-2018 Company, Inc.</p>
                    <nav className="inline">
                        -<a href="#">Privacy </a>
                        -<a href="#">Terms</a>
                    </nav>
                  </div>
                  <div className="inline right">
                      <a href="#">Back to top </a>
                  </div>
                </aside>
            </footer>
        );
    }
}
export default Footer;
