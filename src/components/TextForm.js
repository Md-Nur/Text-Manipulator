import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper case." ,"success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case." ,"success")
    }
    const handleClText = () => {
        let newText = ""
        setText(newText)
    }
    const handleCpText = () => {
        navigator.clipboard.writeText(text)
        props.showAlert("Copied!" ,"primary")
    }

    const handleExtractMail = () => {
        let newText = text.split(" ")
        let arr = ""
        for (let index = 0; index < newText.length; index++) {
            let w = newText[index];
//             let con = false;

            for (let j = 1; j < w.length; j++) {
                if (w[j] === "@") {
                    con = true;
                }
            }
//             if (con && (w[w.length - 4] === '.')) {
//                 arr = arr + " " + w
//             }
        }
        arr = arr.trim()
        setText(arr);
    }
   
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className = "mb-4">{props.heading}</h1>
                <div className="mb-3">
                    <textarea placeholder="Enter your text" className="form-control" value={text} id="exampleFormControlTextarea1 textBox" onChange={handleOnChange} rows="7" style={{backgroundColor: props.mode === "dark" ? "#bfd1ff45":"white",color: props.mode === "dark" ? "white" : "black"}} ></textarea>
                    <button disabled={text.length === 0} type="button" onClick={handleUpClick} className="my-2 mx-1 btn btn-primary">Convert to upper Case</button>
                    <button disabled={text.length === 0} type="button" onClick={handleLoClick} className="my-2 mx-1 btn btn-primary">Convert to lower Case</button>
                    <button disabled={text.length === 0} type="button" onClick={handleExtractMail} className="my-2 mx-1 btn btn-primary">Find emails from the text</button>
                    <button disabled={text.length === 0} type="button" onClick={handleClText} className="my-2 mx-1 btn btn-primary">Clear</button>
                    <button disabled={text.length === 0} type="button" onClick={handleCpText} className="my-2 mx-1 btn btn-primary">Copy</button>

                </div>
            </div>
            <div className="container my-3">
                <h2>Your Text Summery</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element!==""}).length} words and {text.length} charecters</p>
                <p>You need {text.split(" ").filter((element)=>{return element!==""}).length * 0.192} seconds to read this text</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
            </div>
        </>
    )
}
