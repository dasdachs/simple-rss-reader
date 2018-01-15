import * as ActionTypes from '../constants';
import { feedParser } from '../api/feedParser';

/**
 * toggleDrawer() updates the store with the state of the drawer
 * 
 * @param {boolean} drawerOpen - true for visible and false for hidden
 */
export function toggleDrawer(drawerOpen) {
    const action = {
        type: ActionTypes.TOGGLE_DRAWER,
        payload: {
            drawerOpen: !drawerOpen
        }
    }
    return action;
}

/**
 * getFedd() takes a URL and resolvec the feedParser
 * 
 * The result of this function is an updated store with parsed articles.
 * 
 * @param {string} url - The URL of the RSS feed
 */
export function getFedd(url)  {
    return dispatch => {
        feedParser(url)
        .then(articles => {
            const action = {
                type: ActionTypes.GET_FEED,
                payload: {
                    articles,
                    isLoading: false
                }
            }
            dispatch(action);
        })
        .catch(error => {
            throw(error);
        })
    }
}

/**
 * updateFeed() updates the parsed feed from the source URLs
 * 
 * All it does is it sets `isLoading` to `true`. The ArticleFeed and Article
 * component keep track of the state of `isLoading` and dispatch the `getFeed``
 * function when it is set to `true`.
 */
export function updateFeed() {
    const action = {
        type: ActionTypes.UPDATE_FEED,
        payload: {
            isLoading: true
        }
    }
    return action;
}