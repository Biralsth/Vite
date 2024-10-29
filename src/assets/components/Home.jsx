import React from 'react'
import { useState } from "react";

const Home = () => {

    const [text, setText] = useState("")
    const [copyText, setCopyText] = useState('')

    const handleUpperCase = () => {
        console.log("You clicked uppercase button")
        setText(text.toUpperCase())

    }
    const handleLowerCase = () => {
        console.log("You clicked lowercase button")
        setText(text.toLowerCase())

    }

    const clearTextArea = () => {
        setText('')


    }

    const handleCopy = () => {


        console.log("You clicked copy button")
        navigator.clipboard.writeText(text)
        alert("Text copied")

    }
    const handleCopy2 = () => {


        console.log("You clicked copy button")
        navigator.clipboard.writeText(copyText)
        alert("Text copied")

    }



    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)

    }

    return (
        <div>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example text area</label>
                <textarea className="form-control" value={text} name={text} onChange={handleChange}
                    placeholder={text} id="exampleFormControlTextarea1" rows="3"></textarea>

                <button className='btn btn-primary mt-3 mx-2' onClick={handleUpperCase}>Uppercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleLowerCase}>Lowercase</button>
                <button className='btn btn-primary mt-3 mx-2' onClick={clearTextArea}>clear</button>

                <button className='btn btn-primary mt-3 mx-2' onClick={handleCopy}>Copy</button>


            </div>

            <div className="container">
                <h4>Analyse your text</h4>
                <p>{text.split(' ').length} words and {text.length} character</p>

                <p>{0.008 * text.split(' ').length}</p>

                <h4>Preview text</h4>
                <p>{text.length > 0 ? text : "no previev to display"}</p>

            </div>

            <div>

                <textarea className="form-control" value={copyText} onChange={(e) => setCopyText(e.target.value)}
                    placeholder={copyText} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className='btn btn-primary mt-3 mx-2' onClick={handleCopy2}>Copy</button>
            </div>




        </div>
    )
}

export default Home