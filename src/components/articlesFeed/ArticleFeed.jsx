import React from 'react';

import { List, ListItem } from 'material-ui/List';

/**
 * ArticleFeed() renders the article 
 * 
 * @param {object} props - Parsed RSS feed articles
 */
export default function ArticleFeed(props) {
    const feed = props.articles;
    // Make index uniqe
    return(
        <List className='container'>
            {feed.map( (item, index) => (
                <ListItem
                    key={index}
                    primaryText={<a href={item.link}>{item.title}</a>}
                    secondaryTextLines={2}
                    secondaryText={<p>Author: {item.creator} | Pubdate: {new Date(item.isoDate).toLocaleDateString()}</p>}
                    nestedItems={[
                        <ListItem
                            key={Math.random()} 
                            secondaryText={item.contentSnippet} 
                            secondaryTextLines={2} 
                            disabled={true} 
                        />
                    ]}
                />
                )
              )
            }
        </List>
    )
}