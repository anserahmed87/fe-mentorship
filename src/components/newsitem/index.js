import React from 'react';
import {api} from '../../utils'
import {Link} from 'react-router-dom';

export const NewsItem = ({id}) => {
    const item = api.getItem(id);
    return (
        <div className="header">
            <a href={item.url}>
                {item.title}
            </a>
            <br/>
            <Link to={`/item/${item.id}`}>
                {item.score} points
            </Link>
            <a> by {item.by} at {item.time} | </a>
            <Link to={`/item/${item.id}`}>
                {item.descendants === 0
                    ? 'discuss'
                    : item.descendants + ' comments'
                }
            </Link>
        </div>
    )
}
