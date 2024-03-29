import MyPage from "pages/MyPage";
import Detail from "pages/Detail";
import Home from "pages/Home";
import LogIn from "pages/LogIn";
import PostForm from "pages/PostForm";
import Register from "pages/Register";
import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="detail/:id" element={<Detail />} />
                <Route path="postform" element={<PostForm />} />
                <Route path="log_in" element={<LogIn />} />
                <Route path="register" element={<Register />} />
                <Route path="mypage" element={<MyPage />} />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
