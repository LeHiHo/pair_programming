import React, { useState } from "react";

function Login() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handlePwChange = (e) => {
    setPw(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = [];

    const fetchApi = await fetch("/data/data.json");
    const json = await fetchApi.json();
    const data = JSON.parse(json);
    console.log(data);
    //   .then((item) => data.push(...item));

    // const user = data.find((item) => item.email === id);
    // console.log(user);

    //     if (user.password === pw) {
    //       console.log("로그인 성공");
    //     }
  };

  return (
    <>
      <form className="container" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <label htmlFor="id">ID : </label>
        <input
          id="id"
          type="email"
          onChange={handleIdChange}
          value={id}
          placeholder="이메일을 입력하세요."
        />
        <label htmlFor="pw">PassWord : </label>
        <input
          id="pw"
          type="password"
          onChange={handlePwChange}
          value={pw}
          placeholder="비밀번호를 입력하세요."
        />

        <button type="submit">로그인</button>
      </form>
    </>
  );
}

export default Login;
