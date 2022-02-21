import React, {useState} from 'react'

// useState is the hook we use in react

export default function TextForm(props) {

    const handleUpClick = () => {
        console.log(`Upper Case Was Clicked`);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        console.log(`Upper Case Was Clicked`);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const clearText = () => {
        let newText = ``;
        setText(newText);
    }

    const changeText = (event) => {
       console.log(`Text Changed`);
       setText(event.target.value); // This will allow us to enter text inside the textarea.
    }

    const [text, setText] = useState(``);
    // text = "new text"; // Wrong way to change the text
    // setText("New Text"); // Correct way to change the text
    return (
        <>
            <div className="container">
                <div className="mb-3">
                     <h2>{props.heading}</h2>

                    {/* Here value={text} will place the default text inside the textarea and onChange event will allow us to change the text inside the function. And how we will change it..it is shown above in commented section */}
                    <textarea className="form-control" value={text} onChange={changeText} id="myBox" rows="8"></textarea>

                </div>
                <button className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>

                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                
                <button className="btn btn-primary mx-2" onClick={clearText}>Clear Text</button>

                <a href="/" className="btn btn-primary mx-2" value={setText} download>Download Text</a>
            </div>

            <div className="container my-4">
                <h1>Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>

                <p>Average Time Required To Read Above Content Is: {0.008 * text.split("").length} Minutes</p>

                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
