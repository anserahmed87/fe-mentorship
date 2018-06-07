import {NewsItemList} from '../';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const isArraysEqual = (arr1=[], arr2=[]) => arr1.toString() === arr2.toString();

export class  PageNewsList  extends Component{

    componentDidMount() {
        this.props.fetchItemsIds();
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isArraysEqual(this.props.ids,nextProps.ids);
    }

    render() {
        const  ids  = this.props.ids;
        if (!ids) {
            return <div>Loading?</div>
        }
        return (
            <div>
                <button onClick={this.props.fetchItemsIds}>
                    Refresh
                </button>
                <NewsItemList ids={ids}/>
            </div>
        )
    }
}
const firstN = (n, arr) => arr.slice(0, n);
const mapStateToProps = (state) => {
    return {
        ids: firstN(state.ui.itemsToShow ,state.data.itemsIds.ids)
    }
};

const mapDispatchToProps={
    fetchItemsIds: actions.fetchItemsIds,
}
export default connect(mapStateToProps,mapDispatchToProps)(PageNewsList)