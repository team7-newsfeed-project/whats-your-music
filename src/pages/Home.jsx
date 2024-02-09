import React from "react";
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
