import "./App.css";
import "./styles/common.css";
// import Login from "./components/Login";
import Main from "./components/Main";
import Login from "./components/auth/Login";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  const loginCheck = localStorage.getItem("authorization");
  // 로그인한 경우
  if (loginCheck) {
    // Main은 라우트
    return (
      <div className='App'>
        <Header />
        <nav>
          <Main />
          <Footer />
        </nav>
      </div>
    );
  }
  // 회원가입 경로인 경우
  else if (false) {
    //component = <Regist />;
  }
  // 로그인 경로인 경우
  else if (true) {
    return (
      <div className='App'>
        <Login />
      </div>
    );
  }
  else {
    return (
      <div className='App'>
        <div>잠시만 기다려봥</div>
      </div>
    );
  }
}

export default App;
