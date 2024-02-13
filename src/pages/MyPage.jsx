// console.log(querySnapshot);
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "database/firebase";
import { setAccount } from "store/modules/userAccount";
import { setInitValue } from "store/modules/userContents";
import { setThumnailImg } from "store/modules/userImage";
import { setMyRecommend } from "store/modules/userRecommend";
import logoImage from "assets/whatsyourmusic_logo.png";
import Layout from "components/layout/Layout";
import ProfileContents from "components/main/ProfileContents";
import MyRecommend from "components/main/MyRecommend";
import * as MP from "components/styles/MypageStyle";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email } = useSelector((store) => store.userAccount);

    useEffect(() => {
        if (!email) {
            alert("로그인 해주세요!");
            navigate("/");
        }

        const myPageUserData = async () => {
            try {
                const q = query(collection(db, "accounts"), where("email", "==", email));
                const querySnapshot = await getDocs(q);
                let user;
                querySnapshot.forEach((doc) => {
                    user = doc.data();
                    const image = user.image;
                    const nickname = user.nickname;
                    const comment = user.comment || "";

                    dispatch(setAccount({ image, nickname, comment }));
                    dispatch(setThumnailImg(image));
                    dispatch(setInitValue({ nickname, comment }));
                    if (!user || user === null || user === undefined) {
                        alert(`로그인 해주세요!`);
                        navigate("/");
                    }
                });
            } catch (error) {
                console.log("로그인 해주세요!", error);
                alert("로그인 해주세요!");
                navigate("/");
            }
        };
        myPageUserData(email);
    }, [dispatch]);

    useEffect(() => {
        const myPageRecommendData = async () => {
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            const initialPosts = [];

            querySnapshot.forEach((doc) => {
                initialPosts.push({ id: doc.id, ...doc.data() });
            });
            dispatch(setMyRecommend(initialPosts));
        };
        myPageRecommendData();
    }, [dispatch]);

    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            if (!user || user === null) {
                alert("로그인해주세요!");
                dispatch(setAccount(user));
                navigate("/");
            }
        });
        userState();
    }, [dispatch]);

    return (
        <Layout>
            <MP.MyPageSection>
                <MP.MyPageheadDiv>
                    <MP.MyPageheadWrapDiv>
                        <MP.HomeLink to="/">
                            <MP.HomeBtnP>← HOME</MP.HomeBtnP>
                        </MP.HomeLink>
                        <h3>
                            <MP.HeaderLogo src={logoImage} alt="logo" />
                        </h3>
                        <div>
                            <MP.MyPageText>마이페이지</MP.MyPageText>
                        </div>
                    </MP.MyPageheadWrapDiv>
                </MP.MyPageheadDiv>

                <ProfileContents />

                <MyRecommend />
            </MP.MyPageSection>
        </Layout>
    );
};

export default MyPage;
