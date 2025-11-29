//숫자, 문자열, 배열만 렌더링 가능. 객체는 점표기 법으로만
// jsx에서는 최상위 태그가 단 1개만 존재한다. 빈태그로 묶기도 가능.
const Main = () => {
    const user = {
        name: '김승우',
        isLogin: true
    };

    if(user.isLogin){
        return <div style={{
            backgroundColor: "red"
        }}>로그아웃</div>
    }else{
        return <div>로그인</div>
    }
    //return(
    //    <>
     //       {user.isLogin ? <div>로그아웃</div> : <div>로</div>}  
    //    </>
   // );
};

export default Main;