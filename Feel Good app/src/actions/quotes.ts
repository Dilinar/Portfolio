import { QuoteData } from '../types/quoteData';
import { v4 as uuidv4 } from 'uuid';

export function addQuote (quote: Partial<QuoteData>) {
    return {
        type: 'ADD_QUOTE',
        quote: {
            ...quote,
            id: uuidv4(),
        } as QuoteData 
    };
}

export function deleteQuote (id: string) {
    return {
        type: 'DELETE_QUOTE',
        id
    };
}
