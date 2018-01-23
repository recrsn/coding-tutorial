import React from 'react';

import mailIcon from 'line-awesome/src/production/fa-envelope.svg';
import githubIcon from 'line-awesome/src/production/fa-github.svg';
import twitterIcon from 'line-awesome/src/production/fa-twitter.svg';
import globeIcon from 'line-awesome/src/production/fa-globe.svg';

import './FrontMatter.css';

const iconStyle = {
    width: 48,
    height: 48,
};

const FrontMatter = ({ title, subTitle, author: { name, email, github, twitter, website } }) => (
    <div className="FrontMatter">
        <article>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <div className="authorInfo">
                <h3>{name}</h3>
                <div className="authorLinks">
                    {email && (
                        <a href={`mailto:${email}`}>
                            <img {...iconStyle} src={mailIcon} alt={email} />
                        </a>)}
                    {github && (
                        <a href={`https://github.com/${github}`}>
                            <img {...iconStyle} src={githubIcon} alt={`${github} @ GitHub`} />
                        </a>)}
                    {twitter && (
                        <a href={`https://twitter.com/${twitter}`}>
                            <img {...iconStyle} src={twitterIcon} alt={`${twitter} @ Twitter`} />
                        </a>)}
                    {website && (
                        <a href={website}>
                            <img {...iconStyle} src={globeIcon} alt={website} />
                        </a>)}
                </div>
            </div>
        </article>
    </div>
);

export default FrontMatter;