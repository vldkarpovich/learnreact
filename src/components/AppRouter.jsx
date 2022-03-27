import React from 'react';
import About from '../pages/About';
import Error from '../pages/Error';
import Posts from '../pages/Posts'; 
import PostsIdPage from '../pages/PostIdPage';
import {Routes, Route, Navigate} from "react-router-dom";
import Basket from '../pages/Basket';

const AppRouter = () => {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/basket" element={<Basket />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostsIdPage />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<Navigate replace to="/error" />} />
      </Routes>
  )
}

export default AppRouter