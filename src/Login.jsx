import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  function resetInput() {
    setId("");
    setPw("");
  }

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchApi = await fetch("/data/data.json");
    const data = await fetchApi.json();
    console.log(data);

    // const strdata = JSON.stringify(data);
    // console.log(strdata);

    try {
      const user = data.find((item) => item.email === id);
      if (user.password === pw) {
        alert("로그인 성공");
        resetInput();
      } else {
        alert("로그인 실패");
      }
    } catch {
      alert("일치하는 id가 없습니다.");
      resetInput();
    }
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="id">ID : </label>
        <input id="id" type="email" onChange={handleIdChange} value={id} placeholder="이메일을 입력하세요." />
        <label htmlFor="pw">PassWord : </label>
        <input id="pw" type="password" onChange={handlePwChange} value={pw} placeholder="비밀번호를 입력하세요." />

        <button type="submit">로그인</button>
        <button type="button">회원가입</button>
      </form>
    </>
  );
}

export default Login;
