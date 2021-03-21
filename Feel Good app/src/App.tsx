import React from 'react';
import './style.css';
import AddQuote from './components/AddQuote';
import DrawQuote from './components/DrawQuote';
import QuotesDrawer from './components/QuotesDrawer';

export function App() {
    return (
        <div className="app">
            <h1>Feel Good</h1>
            <AddQuote />
            <DrawQuote />
            <QuotesDrawer />
        </div>
    );
}

export default App;
