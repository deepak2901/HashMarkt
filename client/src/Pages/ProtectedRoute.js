// import { useAuth } from '../Context/AuthContext'
// import React from 'react'

// const ProtectedRoute = () => {

//   const { loggedIn, role } = useAuth()

//   return (
//     <Route
//     {...rest}
//     render={(props) => {
//       if (loggedIn && role === admin) {
//         return <Redirect to={{ pathname: "/" }} />;
//       }

//       if (loggedIn) {
//         return <Component {...props} />;
//       }

//       return <Redirect to={{ pathname: "/" }} />;
//     }}
//   />
//   )
// }

// export default ProtectedRoute


import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const ProtectedRoute = ({ ...rest }) => {
  const { loggedIn } = useAuth();
  console.log(loggedIn)
  if (loggedIn) {
    return <Routes><Route {...rest} /></Routes>;
  } else {
    return <Navigate to="/signin" replace />;
  }
};

export default ProtectedRoute;