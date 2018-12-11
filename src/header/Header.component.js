// Import react
import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="header-container">
                <svg height="100" width="100">
                    <circle cx="50" cy="50" r="40" stroke="none" strokeWidth="3" fill="#808080	" />
                </svg>
                <h4 className="header-text">
                    Heading
                </h4>
                <p className="header-content">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Fusce consectetuer risus a nunc. Mauris dictum facilisis augue. Mauris elementum mauris vitae tortor.

                   Fusce dui leo, imperdiet in, aliquam sit amet, feugiat eu, orci. Vivamus luctus egestas leo.
                 </p>
                <button type="button" className="btn btn-secondary">View Details &raquo; </button>
            </header>
        );
    }
}
export default Header;
