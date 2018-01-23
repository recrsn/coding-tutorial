import React from 'react';

import './Chapter.css';

const Chapter = ({id, title, content, renderTitle = false, next = '', previous = ''}) => (
    <div className="Chapter">
        {renderTitle && <h1 class="title">{title}</h1>}
        <article dangerouslySetInnerHTML={{ __html:content }} />
    </div>
);

export default Chapter;
