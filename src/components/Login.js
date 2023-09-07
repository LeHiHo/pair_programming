import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const auth = getAuth();
console.log(auth);
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  let uid = "";

  async function emailLogin(email, password) {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      uid = user.uid;
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    console.log(uid);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        emailLogin(email, password);
      }}
    >
      <input type="email" placeholder="이메일을 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="비밀번호를 입력하세요" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
