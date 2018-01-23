import React from 'react';
import { NavLink } from 'react-router-dom';
import './Legend.css';

const Legend = ({title, chapters}) => (
    <aside className="Legend">
        <nav>
            <p class="heading">{title}</p>
            <ul>
                {Object.keys(chapters).map(chapterId => (
                    <li key={chapterId} className="nav-link">
                        <NavLink to={`/${chapterId}`}>{chapters[chapterId].title}</NavLink>
                    </li>))}
            </ul>
        </nav>
    </aside>
);

export default Legend;