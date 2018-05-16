import React, { Component } from 'react';
import {api} from '../../utils'
import {Link} from 'react-router-dom';

export class  NewsItem  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            item: undefined,
        }
    }

    componentDidMount() {
        api.getItem(this.props.id)
            .then(item =>  this.setState({item}))
            .catch(err => { console.error(err) });
    }

    render() {
        const { item } = this.state;
        if (!item) {
            return <div>Loading?</div>
        }
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
}





