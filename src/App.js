import './App.css';
import Item from './Item.js';

function App() {
  const date = new Date();
  const today =
    date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

  const dummy = {
    title: '취업9조대',
    date: today,
    content: 'Pair Programming 진행 중!',
    img: 'https://file.notion.so/f/s/ebf37348-eb25-4f20-b8ea-148d07ed8f93/image.png?id=7e526f8e-f8ff-4ef4-8ff2-d9f718841c0b&table=block&spaceId=3ef8dbd9-414c-4cf5-813d-32ecb943cc67&expirationTimestamp=1693533600000&signature=rFOiNKRuZ6t8XnrXXK8C2UwY3Ob7CseyEUp3x9Wy-o0&downloadName=image.png',
  };
  return (
    <>
      <Item dummy={dummy} name={'선파'} />
      <Item dummy={dummy} name={'호진'} />
      <Item dummy={dummy} name={'연수'} />;
      <Item dummy={dummy} name={'경규'} />;
      <Item dummy={dummy} name={'지송'} />;
    </>
  );
}

export default App;
