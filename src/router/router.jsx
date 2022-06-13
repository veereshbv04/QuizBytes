import {Routes, Route,} from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuizSection from "../components/QuizSection";
import ScorePage from "../components/ScorePage";

export default function Router(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/quizsection" element={<QuizSection/>}/>
            <Route path="*" element={<div>Not Found</div>} />
            <Route path="/scorepage" element={<ScorePage/>}/>
        </Routes>
    )
    
}