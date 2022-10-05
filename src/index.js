// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import { MessageProviderWrapper } from './context/message.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  <Router>
    <AuthProvider>
      <MessageProviderWrapper>
        <App />
      </MessageProviderWrapper>
    </AuthProvider>
  </Router>
  // {/* </React.StrictMode> */}

);

