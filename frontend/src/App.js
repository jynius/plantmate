import "./App.css";
import "./styles/common.css";
// import Login from "./components/Login";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  let component = <div>잠시만 기다려봥</div>;
  let loginCheck = true;
  //로그인 안한경우
  if (false) {
    //회원가입경로인 경우
    if (false) {
      // component = <Regist />;
      // 로그인경로 인 경우
    } else if (false) {
      // component = <Login />;
    }
  } else {
    //Main은 라우트
    component = <Main />;
  }

  return (
    <div className='App'>
      {loginCheck ? (
        <>
          <Header />
          <nav>
            {component}
            <Footer />
          </nav>
        </>
      ) : (
        { component }
      )}
    </div>
  );
}

export default App;
