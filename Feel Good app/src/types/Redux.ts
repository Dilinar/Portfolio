import { QuoteData } from './quoteData';

export type ReduxState = {
    quotes: ReduxStateQuotes;
}

export type ReduxStateQuotes = QuoteData[];
