import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  // worker.start({
  //   onUnhandledRequest: 'bypass',
  // })
  worker.start({
    onUnhandledRequest: ({ method, url }) => {
      if (url.hostname === "jsonplaceholder.typicode.com") { return; }
      if (url.hostname === "via.placeholder.com") { return; }
      console.warn(
        'Found an unhandled %s request to %s',
        method,
        url.href,
      )
    }
  })
}
// function prepare() {
//   if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser')
//     return worker.start()
//   }
//   return Promise.resolve()
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// prepare().then(() => {
//   root.render(
//     <FluentProvider theme={customDarkTheme}>
//       <App />
//     </FluentProvider>
//   );
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
