import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Legend from './Legend';
import FrontMatter from './FrontMatter';
import Chapter from './Chapter';
import NotFound from './NotFound';

import './Book.css';

const Book = ({ title, subTitle, author, chapters }) => {
    return (
        <div className="Book">
            <Legend title={title} chapters={chapters} />
            <main>
                <Switch>
                    <Route exact path="/" component={() =>
                        (
                            <FrontMatter title={title} subTitle={subTitle} author={author} />
                        )} />
                    <Route path="/:chapter" component={({ match }) => {
                        const chapter = chapters[match.params.chapter];
                        return chapter ? (<Chapter {...chapter} />) : (<NotFound match={match} />);
                    }} />
                    <Route path="*" component={NotFound} author={author} />
                </Switch>
            </main>
        </div>
    );
};

export default Book;