import React from "react"
import {useState} from 'react'
function App() {
    const [text,setText] = useState("")

    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
       
    
    function calculateWordCount(textinput) {
        const wordsArr = textinput.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    /* return wordsArr.filter(word => word !== "").
    return filteredWords.length
    */
    console.log(text)

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea 
            onChange={handleChange}
           value={text}
            />
            <h4>Time reminaing: ???</h4>
            <button onClick={() => calculateWordCount(text)}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App


/*
  function handleChange(e) {
        const {value} = e.target
    }
              // e is used to fetch the text typed in the textarea , fetching using e.target
              //
    */