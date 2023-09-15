import { useEffect, useState } from "react";
import QuestionsData from "../data/QuestionsData";

const Quiz = ()=>{
    //console.log(QuestionsData);
    const [current, setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState("")

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer=()=>{
        if(selectChoice!==""){
            if(selectChoice===QuestionsData[current].answer){
                console.log("ตอบถูกและได้คะแนน")
            }else{
                console.log("ตอบผิดไม่ได้คะแนน T_T")
            }
        }
    }
    return(
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={()=>selectChoice("A")}>{QuestionsData[current].A}</button>
                <button onClick={()=>selectChoice("B")}>{QuestionsData[current].B}</button>
                <button onClick={()=>selectChoice("C")}>{QuestionsData[current].C}</button>
                <button onClick={()=>selectChoice("D")}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / ${QuestionsData.length}`}</p>
        </div>
    )
}

export default Quiz;