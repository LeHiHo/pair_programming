import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(false);
  const inputRef = useRef(null);

  const labelClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setFocus(true);
    }
  };
  const inputChange = (e) => {
    if (e.target.value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  const inputBlur = () => {
    setFocus(false);
    if (inputRef.current && inputRef.current.value === "") {
      setError(true);
    }
  };

  let inputStatus = "";
  if (focus) inputStatus += " focus";
  if (error) inputStatus += " error";

  return (
    <div id="join-page">
      <header>
        <div className="logo">naver</div>
      </header>
      <div className="container">
        <label className="join__toggle">
          <span>실명인증된 아이디로 가입</span>
          <input type="checkbox" />
        </label>
        <div className="form-list">
          <label className={inputStatus} onClick={labelClick}>
            <input type="text" placeholder="아이디" ref={inputRef} onChange={inputChange} onBlur={inputBlur} />
          </label>
          <label className={inputStatus} onClick={labelClick}>
            <input type="password" placeholder="비밀번호" ref={inputRef} onChange={inputChange} onBlur={inputBlur} />
          </label>
          <label>
            <input type="email" placeholder="[선택] 비밀번호 분실 시 확인용 이메일" />
          </label>
        </div>
        <div className="form-list">
          <label>
            <input type="text" placeholder="이름" />
          </label>
          <label>
            <input type="text" placeholder="생년월일 8자리" />
          </label>
          <div>
            <button>SKT</button>
            <button>KT</button>
            <button>LG U+</button>
          </div>
          <div>
            <label>
              <input type="radio" /> 남자
              <input type="radio" /> 여자
            </label>
            <label>
              <input type="radio" /> 내국인
              <input type="radio" /> 외국인
            </label>
          </div>
          <label>
            <input type="tel" placeholder="휴대전화번호" />
          </label>
        </div>
        <div className="form-list">
          <label>
            <input type="checkbox" />
          </label>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
          </ul>
        </div>
        <button type="submit">인증요청</button>
      </div>
    </div>
  );
}

export default App;
