// console.log(querySnapshot);
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db, signout } from "database/firebase";
import { setAccount } from "store/modules/userAccount";
import { setMyRecommend } from "store/modules/userRecommend";
import ProfileContents from "components/main/ProfileContents";
import DangerButton from "components/common/DangerButton";
import MyRecommend from "components/main/MyRecommend";
import Layout from "components/layout/Layout";
import logoImage from "assets/logoImage.png";
import * as S from "components/styles/MypageStyle";
import { setEditValue, setInitValue } from "store/modules/userContents";
import { setThumnailImg } from "store/modules/userImage";

const MyPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email } = useSelector((store) => store.userAccount);
    const user = auth.currentUser;
    console.log(user);
    useEffect(() => {
        alert(`${email}`);
        if (!email) {
            alert("로그인 해주세요!");
            navigate("/");
        }
        const fetchData = async (email) => {
            // firestore db 가져오기
            try {
                const q = query(collection(db, "accounts"), where("email", "==", email));
                const querySnapshot = await getDocs(q);
                let user;
                querySnapshot.forEach((doc) => {
                    user = doc.data();
                    const image = user.image;
                    const nickname = user.nickname;
                    const comment = user.comment;

                    dispatch(setAccount({ image, nickname, comment }));
                    dispatch(setThumnailImg(user.image));
                    dispatch(setInitValue({ nickname, comment }));
                });
                if (!user || !user.image) {
                    alert(`로그인 해주세요!`);
                    navigate("/");
                }
            } catch (error) {
                console.log("로그인 해주세요!", error);
                alert("로그인 해주세요!");
                navigate("/");
            }
        };
        fetchData(email);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            // firestore db 가져오기
            const q = query(collection(db, "posts"));
            const querySnapshot = await getDocs(q);
            const initialPosts = [];

            querySnapshot.forEach((doc) => {
                initialPosts.push({ id: doc.id, ...doc.data() });
            });
            dispatch(setMyRecommend(initialPosts));
        };
        fetchData();
    }, []);

    useEffect(() => {
        const userState = auth.onAuthStateChanged((user) => {
            console.log(user);
            if (!user || user === null) {
                alert("로그인해주세요!");
                dispatch(setAccount(user));
                navigate("/");
            }
        });
        userState();
    }, [dispatch]);

    const onLogout = async () => {
        try {
            await signout(auth);
            alert("로그아웃되셨습니다!");
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃을 다시 한 번 시도해 주세용");
        }
    };

    return (
        <Layout>
            <S.MyPageSection>
                <S.MyPageheadDiv>
                    <S.HomeLink to="/">← HOME</S.HomeLink>
                    <DangerButton name="⛔ 로그아웃 " onClick={onLogout} />

                    <h3>
                        <S.HeaderLogo src={logoImage} alt="logo" />
                    </h3>
                    <h4>마이페이지</h4>
                </S.MyPageheadDiv>
                <S.ImageNdInfo>
                    <ProfileContents />
                </S.ImageNdInfo>
                <MyRecommend />
            </S.MyPageSection>
        </Layout>
    );
};

export default MyPage;
