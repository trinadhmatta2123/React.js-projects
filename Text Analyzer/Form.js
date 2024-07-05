import React,{ useState } from 'react'

export default function Form() {
    const [text,setText]=useState("Please enter the text");

    const handleUpClick=()=>{
       // console.log("uppercase function triggered");
        setText(text.toUpperCase())
        console.log(text);
        
    }
    const handleLowClick=()=>{
      // console.log("uppercase function triggered");
       setText(text.toLowerCase())
       console.log(text);
}
    const handleOnChange=(event)=>{
        //console.log("Text edited");
        setText(event.target.value)
    }
    const handleReset=()=>{
      //console.log("Text edited");
console.log("reset has been triggered"); 
setText('')
 }
  return (
    
    <div>
              <h1>Text Analyzer App</h1>

      <form>

  <div className="mb-3">
    <label htmlFor="form-control" id="exampleFormControlTextarea1" className="form-label" >Enter text</label>
    <textarea className="form-control"  rows="3" value={text} onChange={handleOnChange} ></textarea>
  </div>
  
  <button type="button" className="btn btn-primary m-3" onClick={handleUpClick}>UpperCase</button>
  <button type="button" className="btn btn-primary m-3" onClick={handleLowClick}>Lowercase</button>
  <button type="button" className="btn btn-primary m-3" onClick={handleReset}>Reset</button>

<div className="container mb-3">
  <h2>Text summary</h2>
  <p>there are {text.split(" ").length} words and {text.length} letters.</p>
  <p>active read time {text.split(" ").length*0.08} seconds.</p>

  <h3>Preview</h3>
  <p>{text}</p>

</div>
</form>
    </div>
  )
}
