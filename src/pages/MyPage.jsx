// console.log(querySnapshot);
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { signOut } from "firebase/auth";
import { auth, db } from "database/firebase";
import { setAccount, setUserLogout } from "store/modules/userAccount";
import { setInitValue } from "store/modules/userContents";
import { setThumnailImg } from "store/modules/userImage";
import { setMyRecommend } from "store/modules/userRecommend";
import logoImage from "assets/logoImage.png";
import DangerButton from "components/common/DangerButton";
import Layout from "components/layout/Layout";
import MyRecommend from "components/main/MyRecommend";
import ProfileContents from "components/main/ProfileContents";
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

    const onLogout = async () => {
        try {
            await signOut(auth);
            alert("로그아웃되셨습니다!");
            // TODO : dispatch(setAccount())
            dispatch(setUserLogout());
            navigate("/");
        } catch (error) {
            console.log(error);
            alert("로그아웃을 다시 한 번 시도해 주세용");
        }
    };

    return (
        <Layout>
            <MP.MyPageSection>
                <MP.MyPageheadDiv>
                    <MP.HomeLink to="/">← HOME</MP.HomeLink>
                    <DangerButton name="⛔ 로그아웃 " onClick={onLogout} />
                    <h3>
                        <MP.HeaderLogo src={logoImage} alt="logo" />
                    </h3>
                    <h4>마이페이지</h4>
                </MP.MyPageheadDiv>
                <MP.ImageNdInfo>
                    <ProfileContents />
                </MP.ImageNdInfo>
                <MyRecommend />
            </MP.MyPageSection>
        </Layout>
    );
};

export default MyPage;
