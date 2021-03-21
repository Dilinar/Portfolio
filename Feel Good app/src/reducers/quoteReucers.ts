import { AnyAction } from 'redux';
import { ReduxStateQuotes} from '../types/Redux';
import { QuoteData } from '../types/quoteData';

function getInitialState (): ReduxStateQuotes {
    const quotes = localStorage.getItem('quotes');
    if(quotes) {
        const parsed = JSON.parse(quotes) as (QuoteData)[];

        return parsed;
    }

    localStorage.setItem('quotets', JSON.stringify([]));
    return [];
}

export default function quotes (state = getInitialState(), action: AnyAction) {
  
    switch (action.type) {
        case 'ADD_QUOTE': {
            const quotes = [ ...state, action.quote ];
            localStorage.setItem('quotes', JSON.stringify(quotes));
            return quotes;
        }
        case 'DELETE_QUOTE': {
            const index = state.findIndex((quote) => quote.id === action.id);
            if(index === -1) return state;

            state.splice(index, 1);
            const quotes = [ ...state ];
            localStorage.setItem('quotes', JSON.stringify(quotes));
            return quotes;
        }
        default: {
            return state;
        }
    }
}
