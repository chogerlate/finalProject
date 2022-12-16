import { useState, useEffect, createContext, useMemo } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Quizz1 from "./pages/Quizz1";
import Quizz2 from "./pages/Quizz2";
import Nopage from "./pages/Nopage";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import QuizResult from "./pages/QuizResult";
import QuizResultNBA from "./pages/QuizResultNBA";

export const UserContext = createContext();

export default function App() {
  useEffect(() => {
    setPlayerName(window.localStorage.getItem("playerName"));
    setProfileAvatarIndex(window.localStorage.getItem("playerAvatar"));
  }, []);
  const [playerName, setPlayerName] = useState("");
  const [profileAvatarIndex, setProfileAvatarIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [userAnswer,setUserAnswer] = useState([]);
  const [quiz, setQuiz] = useState([]);
  const [answerOrder, setAnswerOrder] = useState([]);
  return (
    <>
      <UserContext.Provider
        value={{
          playerName,
          setPlayerName,
          profileAvatarIndex,
          setProfileAvatarIndex,
          score,
          setScore,
          totalScore,
          setTotalScore,
          userAnswer,
          setUserAnswer,
          quiz,setQuiz,
          answerOrder,setAnswerOrder
        }}
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Quiz1" element={<Quizz1 />} />
            <Route path="Quiz1_Result" element={<QuizResult />} />
            <Route path="Quiz2_Result" element={<QuizResultNBA/>} />
            <Route path="*" element={<Nopage />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}
