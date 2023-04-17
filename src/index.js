import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import App from './App';
import {Provider} from "react-redux";
import {store, persistor} from "./reduxStore/store";
import {PersistGate} from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>

       <PersistGate Loading={'loading'} persistor={persistor}>
           <App />
       </PersistGate>

   </Provider>
);

