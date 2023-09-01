import React, { useState } from "react";
import "./Memo.css";
export default function Memo() {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    hanldeMemoItem(memo);
    setMemo("");
  };

  const hanldeMemoItem = (item) => {
    setMemoList([...memoList, item]);
  };

  return (
    <>
      <form className="memo__container" onSubmit={handleSubmit}>
        <label htmlFor="memo"></label>
        <input
          id="memo"
          type="text"
          value={memo}
          onChange={(e) => {
            setMemo(e.target.value);
          }}
        />
        <button className="button" type="submit">
          작성
        </button>
      </form>

      <ul className="memo__list">
        {memoList.map((memo) => (
          <li className="memo__item">{memo}</li>
        ))}
      </ul>
    </>
  );
}
