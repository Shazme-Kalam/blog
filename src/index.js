// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import About from './About';
// import ErrorPage from './Error';
// import BlogDetail from './BlogDetail';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: "/about",
//     element: <About />,
//     errorElement: <ErrorPage />

//   },
//   {
//     path: "/blogs",
//     element: <App />,
//     errorElement: <ErrorPage />

//   },
//   {
//     path: `/blogs/:id`,
//     element: <BlogDetail />,
//     errorElement: <ErrorPage />

//   }
// ]);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import ErrorPage from './Error';
// import About from './About';
// import BlogDetail from './BlogDetail';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';


// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const router = createBrowserRouter([
//    {
//      path: "/",
//      element: <BlogDetail />,
//      errorElement: <ErrorPage />
//    },
//    {
//      path: "/about",
//      element: <About />,
//      errorElement: <ErrorPage />
//    },
//    {
//      path: "/blogs",
//      element: <App />,
//      errorElement: <ErrorPage />
//    },
//    {
//      path: `/blogs/:id`,
//      element: <BlogDetail />,
//      errorElement: <ErrorPage />
//    }
//   ]);
//    const root = ReactDOM.createRoot(document.getElementById('root'));
//    root.render(
//      <React.StrictMode>
//        <RouterProvider router={router} />
//      </React.StrictMode>
//    ); 
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Error';
import About from './About';
import BlogDetail from './BlogDetail';
import AppTest from './App.test';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<AppTest />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();