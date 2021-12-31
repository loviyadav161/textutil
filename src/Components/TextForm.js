import React ,{useState}from 'react'

export default function TextForm(props) {
    const convertup = ()=>{
        //console.log("upper is clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case" , "success")
    }
    const convertlo = ()=>{
        //console.log("upper is clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lower Case" , "success")
    } 
    const changeup =(event)=>{
        console.log("on change this");
        setText(event.target.value)
    }
    const [text, setText] = useState("enter text here");
    return (
        <>
        <div className="container">
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" onChange = {changeup}  id="mybox" rows="7" value={text}></textarea>
                <button className="btn btn-primary my-3 " onClick = {convertup} id = "btn1">Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-1" onClick = {convertlo} id = "btn2">Convert to Lowercase</button>   
            </div>
        </div>
        <div className="container">
            <h2>Your text summary is: </h2>
            <p>{text.split(" ").length} Words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
