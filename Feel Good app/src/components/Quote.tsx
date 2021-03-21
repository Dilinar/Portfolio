import React from 'react';
import '../style.css';
import { QuoteData } from '../types/quoteData';
import { deleteQuote } from '../actions/quotes';
import { useDispatch } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

type Props = {
    quote: QuoteData;
    showDeleteButton?: boolean;
}

const useStyles = makeStyles(() =>
    createStyles({
        quote: {
            width: 'fit-content',
            margin: '5px auto',
        },
    })
);

export function Quote(props: Props) {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { id, quote, author, place} = props.quote;

    function handleDelete() {
        dispatch(deleteQuote(id));
    }

    return (
        <div className={classes.quote}>
            <p>
                <strong>{quote}</strong>
                <span className='author'>{author}</span>
                <span className='author'>{place}</span>
                {props.showDeleteButton && (
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={handleDelete}>
                        Delete
                    </Button>
                )}
            </p>
        </div>
    );
}

export default Quote;
