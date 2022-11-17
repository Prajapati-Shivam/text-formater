import React, { useState } from 'react'

export default function TextFormat(props) {
  const upperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Success", "Converted to uppercase!")
  }
  
  const lowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Success", "Converted to lowercase!")
  }

  const clear = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Success", "Textbox cleared!")
  }

  const copy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Success", "Copied to clipboard!")
  }

  const extraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Success", "Removed extra spaces!")
  }

  const change = (event) => {
    setText(event.target.value);
  }
  const [text, setText] = useState("")
  // const myStyle = {
  //   backgroundColor: props.mode==='dark'?'black':'#ADEFD1',
  //   color: props.mode==='light'?'#ADEFD1':'#00203F',
  // }

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="box" value={text} onChange={change} style={{backgroundColor: props.mode==='dark'?'#13446e':'white', color: props.mode==='dark'?'white':'black'}} rows="8"></textarea>
          <div className='d-flex flex-column d-sm-flex flex-sm-row mt-4'>
            <button disabled={text.length===0} type="button" className="btn btn-success me-3 mt-2" onClick={upperCase}>Convert to Uppercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-success me-3 mt-2" onClick={lowerCase}>Convert to Lowercase</button>
            <button disabled={text.length===0} type="button" className="btn btn-success me-3 mt-2" onClick={clear}>Clear Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-success me-3 mt-2" onClick={copy}>Copy Text</button>
            <button disabled={text.length===0} type="button" className="btn btn-success me-3 mt-2" onClick={extraSpace}>Remove extra space</button>
          </div>
        </div>
      </div>
      <div className='container'>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in textbox to preview!"}</p>
      </div>
    </>
  )
}
