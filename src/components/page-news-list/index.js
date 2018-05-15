import React from 'react';
import {NewsItemList} from '../';
import {api} from '../../utils'

export const PageNewsList =()=>{
    return <NewsItemList ids={api.getItemsIds()}/>;
};