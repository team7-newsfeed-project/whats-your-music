import React from "react";
import Main from "components/main/RecommendListMain";
import Layout from "components/layout/Layout";
import Header from "components/Header/Header";
import RecommendListMain from "components/main/RecommendListMain";

const Home = () => {
    return (
        <Layout>
            <Header />
            <RecommendListMain />
        </Layout>
    );
};

export default Home;
