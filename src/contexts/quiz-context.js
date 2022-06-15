import {createContext, useContext} from "react";

const QuizContext = createContext()

const QuizProvider = ({children})=>{
    // const initialstate = 
    return <QuizContext.Provider>{children}</QuizContext.Provider>
}

const usequizContext = ()=>{
    const context = useContext(QuizContext)
    if(!context){
        throw new Error("Quiz Context must be used inside the QuizContext provider")
    }else{
        return context
    }
}

export {QuizProvider, usequizContext}