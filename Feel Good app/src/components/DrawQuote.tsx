import React, { useState } from 'react';
import Quote from './Quote';
import { useDispatch } from 'react-redux';
import { deleteQuote } from '../actions/quotes';
import { ReduxState } from '../types/Redux';
import { useSelector as reduxUseSelector, TypedUseSelectorHook,  } from 'react-redux';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useSelector = reduxUseSelector as TypedUseSelectorHook<ReduxState>;


const useStyles = makeStyles(() =>
    createStyles({
        root: {
            width: 'fit-content',
            margin: '15px auto',
            minHeight: '550px',
        },
    })
);
  
export function DrawQuote() {
  
    const classes = useStyles();
    const dispatch = useDispatch();
    const quotes = useSelector((state: any) => state.quotes);
    const [ displayIndex, setDisplayIndex ] = useState(Math.floor(Math.random() * quotes.length));
    const displayQuote = quotes[displayIndex];

    function handleGenerate(): any {
        if(quotes.length <= 1) {
            setDisplayIndex(0);
            return;
        }
        const quoteIndex = (Math.floor(Math.random() * quotes.length));
        setDisplayIndex(quoteIndex);
        if(quoteIndex === displayIndex) {
            handleGenerate();
        }
    }

    function handleDelete() {
        if(quotes.length === 0) {
            return;
        }
        if(quotes.length > 1) {
            handleGenerate();
        }
        dispatch(deleteQuote(displayQuote.id));
    }

    function indexBoundry() {
        if(displayIndex === quotes.length && quotes.length > 0) {
            handleGenerate();
        }
    }

    indexBoundry();
    
    console.log(`Display index ${displayIndex}`);
    console.log(`Quotes length ${quotes.length}`);
    return (
        <div className={classes.root}>
            {quotes.length <= 1 ?
                <Button 
                    disabled
                    variant='contained' 
                    color='primary'>
                    Draw a quote
                </Button> :
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={handleGenerate}>
                    Draw a quote
                </Button>
            }

            {!displayQuote ? 
                <Button 
                    disabled
                    variant='contained' 
                    color='primary'>
                    Delete quote
                </Button> :
                <Button 
                    variant='contained' 
                    color='primary'
                    onClick={handleDelete}>
                    Delete quote
                </Button>
            }
            {quotes.length === 0 ? <p>There are no quotes to display</p> : <Quote quote={displayQuote} />}
        </div>
    );
}
export default DrawQuote;
