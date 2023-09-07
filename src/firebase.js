import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTODOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID,
};

// Firebase 초기 설정
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const imageRef = ref(storage, "jjalbang_image_1 (5).png");

// 이미지 가져오기
let imgUrl;
try {
  imgUrl = await getDownloadURL(imageRef);
} catch {
  imgUrl = "error";
}

// 데이터 읽어오기
const querySnapshot = await getDocs(collection(db, "info"));

export { imgUrl, app, querySnapshot };
