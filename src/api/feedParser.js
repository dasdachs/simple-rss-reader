import parser from 'rss-parser';

/**
 * feedParser() parses a given RSS feed an returns an array of RSS news items
 * 
 * @param {string} url - The URL of the RSS feed
 * @returns {promise} - A promies with either the err or the resolved array
 */
export function feedParser(url='https://ahrefs.com/blog/feed/') {   
    return new Promise( (resolve, reject) => {
        parser.parseURL(url, (err, parsed) => {
            if (err) {
                reject(err);
            } else {
                resolve(parsed.feed.entries);
            }
        });
    }
)}