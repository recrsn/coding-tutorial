import React from 'react';

const Book = ({ title, subTitle, author:{ name, email, github, twitter, website }, chapters }) => {
    return (
        <div>
            <aside>
                <ul>
                    {chapters.map(({title, content}, i) => (
                        <li key={i}>
                            {title}
                            <div dangerouslySetInnerHTML={{ __html: content}} />
                        </li>
                    ))}
                </ul>
            </aside>
            <main>
                <h1>{title}</h1>
                <h2>{subTitle}</h2>
                <p>
                    <h3>{name}</h3>
                    <br/>
                    <a href={`mailto:${email}`}>{email}</a>
                    <br />
                    <a href={`https://github.com/${github}`}>GitHub</a>
                    <br />
                    <a href={`https://twitter.com/${twitter}`}>Twitter</a>
                    <br />
                    <a href={website}>Web</a>
                </p>
            </main>
        </div>
    )
};

export default Book;