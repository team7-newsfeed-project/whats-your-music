import React from "react";
import Layout from "components/layout/Layout";
import MainHeader from "components/Header/MainHeader";
import RecommendListMain from "components/main/RecommendListMain";

const Home = () => {
    return (
        <Layout>
            <MainHeader />
            <RecommendListMain />
        </Layout>
    );
};

export default Home;
