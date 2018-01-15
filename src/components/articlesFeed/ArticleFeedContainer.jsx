import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getFedd } from '../../actions';
import ArticleFeed from './ArticleFeed';
import { Loader } from '../loader';

export class ArticleFeedContainer extends Component {
    componentDidMount() {
        if (this.props.isLoading) {
            this.props.getFedd();
        }
    }
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoading === true) {
            this.props.getFedd();
        }
    }

    render() {
        return (
            <div>
                {!this.props.isLoading
                    ? <ArticleFeed articles={this.props.articles} />
                    : <Loader />
                }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.appState.isLoading,
    articles: state.articles
})

const mapDispatchToProps = dispatch => (
    {
        getFedd: () => {dispatch(getFedd())}
    }
)

export default connect(mapStateToProps, mapDispatchToProps)(ArticleFeedContainer);