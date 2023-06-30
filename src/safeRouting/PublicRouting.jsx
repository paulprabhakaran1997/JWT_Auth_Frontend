import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRouting = ({children}) => {

    const isValidUser = JSON.parse(localStorage.getItem("tokenId"));
    console.log("token Id = " , isValidUser)

  return (
    !!isValidUser ? <Navigate to={`/v${process.env.REACT_APP_VERSION}`} /> : <React.Fragment>{children}</React.Fragment>
  )
}

export default PublicRouting;