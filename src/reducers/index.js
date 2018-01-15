import * as ActionTypes from '../constants';

const initState = {
    articles:[],
    appSettings: {
        navbarTitle: 'Simple FeedReader',
        user: 'Guest'
    },
    appState: {
        isLoading: true,
        drawerOpen: false
    }
}
    
const Feeds = (state=initState, action) => {
    console.log('action', action);
    switch(action.type) {
        case ActionTypes.GET_FEED:
          return {
              ...state,
              articles: action.payload.articles,
              appState: {
                  ...state.appState,
                  isLoading: action.payload.isLoading
              }
          }
        case ActionTypes.TOGGLE_DRAWER:
            return {
                ...state,
                appState:{
                    ...state.appState,
                    drawerOpen: action.payload.drawerOpen
                }
            };
        case ActionTypes.UPDATE_FEED:
            return {
                ...state,
                appState:{
                    ...state.appState,
                    isLoading: action.payload.isLoading
                }
            };
        default:
          return state;
    }
}

export default Feeds;