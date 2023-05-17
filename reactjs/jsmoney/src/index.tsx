import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs';
import App from './App';

createServer({

  models:{
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () =>{
      return[
        {
          id: 1,
          description: 'Transaction 1'
        },
        {
          id: 2,
          description: 'Transaction 2'
        },
        {
          id: 3,
          description: 'Transaction 3'
        }
      ]
    })
   this.post('/transactions', (schema, request) =>{
    const data = JSON.parse(request.requestBody)
    
    return data;
   })
  },
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


