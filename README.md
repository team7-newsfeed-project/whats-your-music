# 🎷프로젝트 "what`s your music"🎸

### < 목차 >

**# 프로젝트 팀 "🌞N을 품은 S🌝"소개**

- 팀원소개

**# 프로젝트 소개**

- 개발 기간 & 프로젝트 명 & 소개 & 목표 & 프로젝트 Rule

**# 시작가이드**

- Installation

**# 와이어프레임**

- 프로젝트 화면 구성 및 기능

  - 필수 사항

  - 선택 사항

  - 기능담당


**# 트러블슈팅**



<br />

## 프로젝트 팀 "🌞N을 품은 S🌝" 소개

<br />

**팀원 소개**

---

|                            🌝김지민                            |                            🌞서혜련                            |                            🌞김명환                            |                            🌞남해리                            |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
|                             ISTJ                             |                             INFJ                             |                             INFJ                             |                          Enfj, Infp                          |
| <p><img src="https://lh7-us.googleusercontent.com/PPN7d0d5c2iPpzSRhGZt6NVCwwQP2FJRLmsvZcO0rE5YkuFH6mPMYzHLljEt2wf0JcKGKJ0DKQMwHckPyrOws9M_Nr76JXsxNRr7bcdIWnqM-N1Mgp2uh7Y5GshOMHvrRVmkXcspfYPeVScQzDQCaBM" width="300px" height="150px"/></p> | <p><img src="https://ca.slack-edge.com/T06B9PCLY1E-U06B4G4S0P3-7aba083ae42a-512" width="320px" height="150px"/></p> | <p><img src="https://lh7-us.googleusercontent.com/gaHoNwJlfS1-lgSPODe8vspDZeTZALaNk37cGs87wUznYnYG8P_K_0xdp_ElPmYC52P4znqL8TujyQ3u614d6AbE_gKdAQdlKNNuM6Brvqd9hydvoNXTyGj0YU6vmkX2ynYLPEG797LTypKwcemWjiA" width="320px" height="150px"/></p> | <p><img src="https://lh7-us.googleusercontent.com/Ysape_5NRn4N32ZU7oOgrQmrfIAjTdQXKka5lOI6M6JxrEWg48DNhLQEXET56SbLP6f4CEJsn5RpDDoHgM9m6eDLyUolLBdP_xbLnp0gftdJg0hYUrKGwSXXVQxNO02AiSTl_4Wp0nHn9CSfQBblXhM" width="300px" height="150px"/></p> |
|          [@gggimmmin](https://github.com/gggimmmin)          |       [@Hyeryeon-Seo](https://github.com/Hyeryeon-Seo)       |            [@baram55](https://github.com/baram55)            |          [@r03181231](https://github.com/r03181231)          |
|                             🌝팀장                             |                             🌞팀원                             |                             🌞팀원                             |                             🌞팀원                             |
|                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           |                           FrontEnd                           |

<br />





**🌝팀 목표🌝** 

---

\- 포기하지 말자! 

\- 완성하자! 

\- 필수 기능을 기본적으로 구현하고 제출기한을 지키자!

\- 소통을 두려워하지 말자 !



<br />



## 프로젝트 "🎷what`s your music(너의 뮤직은)🎸" 

**배포 도메인** : [https://www.whats-your-music.store/](https://www.whats-your-music.store/)

**프로젝트 명** : what`s your music(너의 뮤직은)

**개발 기간** : 2024.02. 07~ 2023.02.14 (7일) 

**프로젝트 소개** : What's your Music 은 음악을 좋아하는 사람들의 정보 교환 및 음악 추천을 위한 커뮤니티입니다.

**프로젝트 목표** : 팝, 클래식, 재즈 등 카테고리 별로 음악 정보 및 추천 음악을 유저들이 직접 올릴 수 있는 서비스.
<br />

### 🚦 Project Rules

#### **개발 환경**

- **Environment :** Visual Studio Code, git, github
- **Language :**  Javascript
- **Framwork** : React 
- **Library** : redux, react-router-dom, style-components,
- **DB**:  Firebase 
- **Communication** : figma, slack, notion, zep



<br />

<br />

### **🚦Project Rules**

### **개발 환경**

- **editor** : Visual Studio Code
- **environment** : git, github
- **development** : Javascript, react18.2.0, CSS3, HTML5
- **library** : redux, react-router-dom, style-components, firebase

### **Code Convention**

- JSX파일 이름 : 파스칼케이스

- JSX파일 내 상위 함수의 변수 : 파스칼 케이스 (ex. export const Pascal = () => {} export Default, 축약 키워드 : rafce)

- style 파일 이름 : 파스칼케이스

- 변수 : 카멜케이스

- 클래스명 : 대쉬(-)

- 시멘틱태그로 영역 구별 (ex. header, main, section, footer, ul, li)

- branch 이름 : feat/기능이름

- issue 이름 : **[타입] - 설명 ( ex. [Feat] - search 기능 구현 )**

  

**개인 작업하기**

- 기능 개발을 위해 작성한 이슈 번호를 사용하여 branch를 생성합니다. (ex. (git branch 사용법 참고))
- 작업 전에 develop branch를 반드시 pull하고 시작합니다. (git pull origin develop)
- commit은 컨벤션을 지켜 메세지를 적습니다.
- push은 해당 작업 branch에 합니다.
- pull request도 컨벤션을 지켜 생성합니다.
- 팀원들의 코드리뷰를 받았으면 merge 합니다.
- 꼭! 브랜치를 헷갈리지 않도록 합시다. 이슈번호 확인!



### **Commit Convention**

**commit type**

- Feat : 기능 구현
- Chore: 기능 변경 없는 코드 변경 사항
- Del : 코드 삭제
- Fix : 버그 수정
- Docs : 문서 수정
- Style : UI 추가 및 수정
- Refactor: 코드 리팩토링
- Test : 테스트 코드, 리팩토링 코드 추가
- Setting: 프로젝트 세팅

**commit message**

- 모든 커밋 메세지 뒤에는 이슈번호를 태깅합니다.
- 커밋 메세지 영어로
- 모든 커밋 메세지는 { **[타입/#이슈번호] 메세지** } 로 작성합니다.
- ex) [Feat/#1] add splash screen

<br />

**프로젝트 운영 방식 및 Rules 예시**

| 프로젝트 운영 방식                                   | 예시                                                        |
| ---------------------------------------------------- | ----------------------------------------------------------- |
| commit 전 깃 허브 페이지 이슈 생성 후 이슈 번호 생성 | github page - new issue - ( # 번호 ) 얻어오기               |
| terminal commit 시 얻어온 이슈번호 넣어 커밋하기     | git commit -m [feat/#1] 초기 설정 완료                      |
| .prettierrc 를 통한 환경 통일                        | "singleQuote": false, "tabWidth": 4, "printWidth": 100 .... |



<br />

<br />


## 🚩시작 가이드



### Installation

```bash
$ git clone https://github.com/team7-newsfeed-project/whats-your-music.git
$ cd JS-team11-project
$ yarn install
$ yarn run start
```

<br />

## 🎨 와이어 프레임

<br />


|                  컬러 가이드와 메인 페이지                   |                   로그인과 로그아웃 페이지                   |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <p><img src="https://lh7-us.googleusercontent.com/VgY1eM7_4dWYlMR1W_JBWAwueohR3LvW953j5jdpNyYVtMZfC5VA1TD-IEhIx2yzkKsVxn40aFH1qs1nuG9dyLYAlT8_YAE4UcWqEUkxSlQXg1FgGCS8RVJonSysnojs7gPgnumkM8ruTuE9jWw5axQ" align="center" width="100%" height="100%" ></p> | <p><img src="https://lh7-us.googleusercontent.com/6L7d0fxl_fVWZgNJ-VKkDroyp1CPonJqmEBefGjYdrBoeETHaI8b8Eou5VgAE5zlWSyn06hqVj-lHwPPGR11bd906HCh-rWgrhkgZda281jqfCpUDLKRKOIymPbhIjI4BtQHjJm4LXGncuOhAaPcyAo" width="100%" height="100%"><p> |
|                           글 등록                            |                 글 자세히 보기 (추천 게시판)                 |
| <p><img src="https://lh7-us.googleusercontent.com/7MtJRawJ78CFf127F92FKekFwZd3AcdnX0B0lJOVzjiOTYAg5vG_Dh1ptBPfKK4U4PizLdbvW5WUW21BIscBqywUw1j1BUB_mZ6MrpaU-cBjt8QISk8NUYcLAy4SWSJiZ13Egvz_EjJml5DE2innhNU" width="100%" height="100%"><p> | <p><img src="https://lh7-us.googleusercontent.com/iFtvfv0F5b1rHDNj_a_8flfohEuSHN7LoIlmKZ4I4gGI2QhtHhfYie5SIVDQQsd_PlH47JZ2IqcXw1iAFzxQ8SAEWjLHSq9I4MkIQ0-j0CxYaG3lANs2jPOItXQpghpYPugHnkiXGXLaVqXR0Hh2z5s" width="100%" height="100%"><p> |
|            글 자세히 보기 수정하기 (추천 게시판)             |                          마이페이지                          |
| <p><img src="https://lh7-us.googleusercontent.com/hdhOEOW98PcMCqvOh1ja3FleaheB9khwM2P3riiNLzGhJJRLycTgsx4ixaxydJWtZvcomCaE7lJCUSJrFSUIYmXXhepGqcsnem2ENwQJ_-F_zzoAwzgVN8kTyQcZ_RWyrFkVq0z--Rdjs9ltyvdfJ-M" width="100%" height="100%"><p> | <p><img src="https://lh7-us.googleusercontent.com/uzhjy9oIYAhZu54i9KX8HpnnT2lvBd7UgiiiVZzkPkHOJsfbFdwfPGQDTIoXXaZg2QD6x1DpuGQKnG7GFTLM1kMOSKAA38YzCfAAsijm1bTmNpZl4nCMFHvy3x9lYwyR-3T0_kAiiFkbJppUgbJo5V0" width="100%" height="100%"><p> |







<br />
<br />
<br />

## 🖼 프로젝트 화면 구성 및 기능

<br />

### 1. 필수 요구 사항 (CRUD구현)



- [x] 로그인, 회원 가입

- Authentication 에서 제공하는 api를 이용하여 아래 회원 가입, 로그인을 구현해보세요.

  - 아이디(이메일), 패스워드
  - 소셜 로그인 (구글, 깃헙)

- [x] CRUD

  - [x] Firestore 에서 제공하는 api를 이용하여 CRUD 데이터베이스 핸들링을 구현해보세요.

  - [x] CUD(등록, 수정, 삭제)가 일어날 때 마다 R(조회)해서 자연스럽게 화면 변경을 해보세요.

- [x] 마이 페이지

  - 내 게시물 보기
    - Authentication 에서 제공하는 uid 를 이용해서 내 게시물들이 모일 수 있게 해보세요.

  - 프로필 수정 기능
    - Storage 에서 제공하는 api를 이용하여 이미지 업로드와 다운로드 url 을 받아서 이미지 핸들링을 해보세요.

- [x] 배포하기

  - Vercel 이라는 호스팅플랫폼을 이용해 배포합니다.

  - 배포에 적용될 브랜치는 main 또는 master 브랜치로 적용합니다.
  - [리액트 배포하기 (vercel)](https://www.notion.so/vercel-4909331a1192494db4b5b51dff630409?pvs=21)

- [x] Git을 최대한 활용해보기!
  - Pull Request 활용하기!

  - <p><img src="https://lh7-us.googleusercontent.com/FcsN5MzAC5-foELcQWuYtIdY22K5RVrNTcg6NpHjr6ZCHniiX-64VJubCemRIIj21M9QdjZugLc2JgZ6UDJpqz_eJouAeM136VlwW9JgtAnupov7izrzjYkdHZJR_CAIZs5fIb1v52HPSWOwxLJe2u8" align="center" width="50%" height="50%" ></p>

    

    <p><img src="https://github.com/team7-newsfeed-project/whats-your-music/assets/152264010/8efba6e4-acd0-4399-afd2-9a82c23ce0b7" align="center" width="50%" height="50%" ></p>

 
  
  - Branch 만들어 작업하기

  <p><img src="https://lh7-us.googleusercontent.com/xhdcTByYIBgiz0vsW2XL0SGaOhmzceLBsAl-seKnruy1dljCH5MIG4kUM71UzkJmO3K4LUWPu4AHAu06651rS0Xm56l26UwJjxckNOs1luHvBHOlOw07XkByu200iF9Z-4uXjtc7aVGu8DFdLZ5nmVI" align="center" width="30%" height="30%" ></p>
  


<br />

### 2. 선택 요구 사항 (추가 구현 기능)    

- [x] 로그인, 회원가입 예외 처리
- [ ] 비밀번호 찾기 기능
- [ ] 팔로우, 팔로워 기능
- [ ] 팔로우한 상대 게시물 확인 기능
- [ ] 댓글 기능
- [ ] 좋아요, 북마크 기능
- [ ] 반응형 웹 구현
- [ ] 무한스크롤 기능
- [x] 더보기 기능
- [ ] memo, useMemo, useCallback 을 이용한 렌더링 최적화 적용
- [x] Vercel 에 배포한 뒤 커스텀 도메인 적용 (500원 정도하는 저렴한 도메인 권장)
    - [https://www.whats-your-music.store/](https://www.whats-your-music.store/)
- [ ] 검색기능

<br />
<br />
<br />

<br />

### 기능 담당

| 기능                                                         | 담당자 |
| ------------------------------------------------------------ | ------ |
| 메인화면에서 상세 페이지로 연결 링크, 상세 페이지 ''메인 화면'' 홈 버튼 | 김명환 |
| 홈 메인페이지 기능(조회기능/카테고리별 글 항목 뜨게하기), 메인페이지 등의 CSS  | 서혜련 |
| 게시글 CRUD 및 글 상세 페이지 구현                                     | 김지민 |
|  마이페이지(이미지 업로드, 자기 소개 편집, 내 게시물 보기), 로그아웃    | 남해리 |




<br />

