import React, { useState} from 'react';
import Quote from './Quote';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';
import { ReduxState } from '../types/Redux';
import { Drawer, Button, Backdrop } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            width: 'fit-content'
        },
        button: {
            width: 'auto',
            borderRadius: '0 25px 25px 0',
            marginLeft: '0'
        },
        backdrop: {
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 20
        },
    })
);


const useSelector = reduxUseSelector as TypedUseSelectorHook<ReduxState>;

export function QuotesDrawer() {

    const classes = useStyles();
    const quotes = useSelector((state: any) => state.quotes);
    const quoteList = quotes.map((quote: any) => <Quote key={quote.id} quote={quote} showDeleteButton={true} />);

    const [ menuOpen, setMenuOpen ] = useState(false);

    function toggleMenu () {
        setMenuOpen(!menuOpen);
    }

    function preventClose (e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.stopPropagation();
    }

    return (
        <div className={classes.drawer}>
            <Button className={classes.button} 
                variant="contained" 
                color="primary"
                onClick={toggleMenu}>
                {'>'}
            </Button>
            <Backdrop open={menuOpen} onClick={toggleMenu} className={classes.backdrop}>
                <Drawer variant="persistent" anchor="left" open={menuOpen} onClick={preventClose}>    
                    {quoteList.length <= 0 ? 'There are no quotes to display' : quoteList}
                </Drawer>   
            </Backdrop>     
        </div>
    );
}

export default QuotesDrawer;
