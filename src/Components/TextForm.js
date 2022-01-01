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
        setText(event.target.value)
    }
    const handlecopy = () =>{
        var text = document.getElementById("mybox");
        text.select();
        text.setSelectionRange(0,99999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const handleClear = () => {
        var newText = '';
        setText(newText);
    }
    const wordCount = () =>{
        var word = text.split(" ");
        if(word[0] === '')
            return 0;
        else
            return word.length;
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
                <button className="btn btn-primary my-3 mx-1" onClick = {handlecopy} id = "btn2">Copy Text</button> 
                <button className= "btn btn-primary my-3 mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
                <button className= "btn btn-primary my-3 mx-1" onClick={handleClear}>Clear Text</button>
            </div>
        </div>
        <div className="container">
            <h2>Your text summary is: </h2>
            <p>{wordCount()} Words and {text.length} characters.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
