import React from 'react';
import { rootUrl, daysAgo } from '../common/utils';
import './news.css';
import PropTypes from 'prop-types';

const NewsComponent = (props) => {
  
    const { item, hideMe, handleUpVote } = props;
    const { title, num_comments: numberOfComments, points: votes, url, author, created_at: time, objectID } = item;
    return (
        <tr>
            <td>{numberOfComments}</td>
            <td>{votes}</td>
            <div className="arrow-up" role="button" onClick={()=>handleUpVote(objectID)} onKeyUp={() => {}} tabIndex="0"> </div>
            <td>{title} <a href={url} target="_blank">{rootUrl(url)} </a> by {author} {daysAgo(time) }
            [<button onClick={()=>hideMe(objectID)}>hide</button>]</td>
        </tr>

    );
}

NewsComponent.propTypes = {
    item: PropTypes.object.isRequired,
    hideMe: PropTypes.func.isRequired,
    handleUpVote: PropTypes.func.isRequired
};
export default NewsComponent;