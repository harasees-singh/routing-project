import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import classes from './NewCommentForm.module.css';
import LoadingSpinner from '../UI/LoadingSpinner';
import useHttp from '../../hooks/hooks/use-http';
import { addComment } from '../../lib/lib/api';

const NewCommentForm = ({ setIsAddingComment }) => {
    const commentTextRef = useRef();
    const params = useParams();

    const { quoteid } = params;

    const { sendRequest, data, error, status } = useHttp(addComment);

    const submitFormHandler = (event) => {
        event.preventDefault();

        // optional: Could validate here

        // send comment to server
        sendRequest({
            commentData: commentTextRef.current.value,
            quoteId: quoteid
        })
    };
    useEffect(() => {
        if (status === 'completed')
            setIsAddingComment(false);
    }, [setIsAddingComment, status])
    
    if (status === 'pending') {
        return <div className='centered'>
            <LoadingSpinner />
        </div>
    }
    if (error) {
        return <div className='centered'>
            <p>{error}</p>
        </div>
    }


    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows='5' ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;
