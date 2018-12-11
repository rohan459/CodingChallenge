import React from 'react';

class Static extends React.Component {
  render() {
    const { heading, content } = this.props;
    return (
      <article className="static-container">
        <h2>{heading}</h2>
        <p>{content}</p>
      </article>
    );
  }
}
export default Static;
