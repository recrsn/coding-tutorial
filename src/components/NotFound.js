import React from 'react';

const NotFound = ({match}) => (
    <div className="NotFound">
        <h2>The resource at {match.url} was not found. </h2>
    </div>
);

export default NotFound;
