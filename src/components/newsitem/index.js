import React, { Component } from 'react';
import {api} from '../../utils'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../actions';
import * as ducks from '../../ducks'

export class  NewsItem  extends Component{

    componentDidMount() {
        api.getItem(this.props.id)
            .then(item =>  this.setState({item}));

        this.props.fetchItems(this.props.id)
    }

    render() {
        const {item}  = this.props;
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

const mapStateToProps = (state, ownProps) => {
    return {
        //item:ducks.data.selectors.item(state,ownProps.id),
       item: (state.data.items[ownProps.id]|| {}).item,
    }
};

const mapDispatchToProps={
    fetchItems:action.fetchItem,
}


export default connect(mapStateToProps,mapDispatchToProps)(NewsItem)





