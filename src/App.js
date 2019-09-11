import React, { Component } from 'react';
import QuoteForm from './containers/QuoteForm';
import Quotes from './containers/Quotes';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row title justify-content-center" style={{ paddingTop: '12px' }}>
          <h1>Quote Maker</h1>
        </div>
        <hr />
<<<<<<< HEAD
=======
        {/*
          TODO:

          Render QuoteForm and Quotes Components
         */}
>>>>>>> f8e88917e1d650d06d376331c7ad89e440911536
         <QuoteForm />
         <Quotes />
      </div>
    );
  }
}

export default App;
