import React from 'react';
import { Link } from 'react-router'

const SingleCity = React.createClass({
  render() {
    return (
      <p>
        <Link to={`/view/${this.props.data.code}`}>
          {this.props.data.caption}
        </Link>
      </p>
    )
  }
})

export default SingleCity;
