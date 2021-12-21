import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./reducer";
import {Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
<Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</Provider>
</ChakraProvider>,
  
  document.getElementById('root')
);

