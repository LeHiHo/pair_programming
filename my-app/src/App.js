import React, { useState, useRef } from "react";

import "./App.css";

function App() {
  const [idError, setIdError] = useState(false);
  const [pwError, setPwError] = useState(false);

  const idInputRef = useRef(null);
  const pwInputRef = useRef(null);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idLabelClick = () => {
    if (id) {
      idInputRef.current.focus();
      setIdError(false);
    }
  };

  const PwLabelClick = () => {
    if (pw) {
      pwInputRef.current.focus();
      setPwError(false);
    }
  };

  const idInputChange = () => {
    setId(idInputRef.current.value);
    if (!id) {
      setIdError(true);
    }
  };

  const pwInputChange = () => {
    setPw(pwInputRef.current.value);

    if (!pw) {
      setPwError(true);
    }
    // if (pwInputRef.current.value === "") {
    //   setPwError(true);
    // } else {
    //   setPw(idInputRef.current.value);
    //   setPwError(false);
    // }
  };

  // onFocus : focus 받은 경우

  // onBlur : focus 받은 경우

  const idInputBlur = () => {
    setIdError(false);
    if (idInputRef.current && idInputRef.current.value === "") {
      setIdError(true);
    }
    if (pwInputRef.current && pwInputRef.current.value === "") {
      setIdError(true);
    }
  };

  const pwInputBlur = () => {
    setPwError(false);
    if (idInputRef.current && idInputRef.current.value === "") {
      setPwError(true);
    }
    if (pwInputRef.current && pwInputRef.current.value === "") {
      setPwError(true);
    }
  };

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
          <label className={idError ? "error" : ""} onClick={idLabelClick}>
            <input
              type="text"
              placeholder="아이디"
              ref={idInputRef}
              onChange={idInputChange}
              onBlur={idInputBlur}
            />
          </label>
          <label className={pwError ? "error" : ""} onClick={PwLabelClick}>
            <input
              type="password"
              placeholder="비밀번호"
              ref={pwInputRef}
              onChange={pwInputChange}
              onBlur={pwInputBlur}
            />
          </label>
          <label>
            <input
              type="email"
              placeholder="[선택] 비밀번호 분실 시 확인용 이메일"
            />
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
