import React, { useState } from 'react'

export default function About() {


    const [modeStyle, setModeStyle] = useState({
        backgroundColor: "white",
        color: "black"
    })
    const [modeBtnText, setModeBtnText] = useState("Enable Dark Mode")

    const modeChange = () => {
        if (modeStyle.color === 'black') {
            setModeStyle({
                backgroundColor: "black",
                color: "white",
                border:"0.4px solid white"
            })
            setModeBtnText("Enable Light Mode")
        } else {
            setModeStyle(
                {
                    backgroundColor: "white",
                    color: "black"
                }
            )
            setModeBtnText("Enable Dark Mode")
        }
    }

    return (
        <>
            <div className="container my-3" style={modeStyle}>
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    {/* <div className="accordion" id="accordionExample"> */}
                    <div className="accordion-item" style={modeStyle}>
                        {/* <div className="accordion-item"> */}

                        <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={modeStyle}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor, sit amet </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, doloremque distinctio illo provid Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, soluta repellat! ent accusamus aut eveniet veritatis, adipisci quis, alias recusandae omnis? Molestias, b
                                <code>.accordion-body</code> eatae.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={modeStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={modeStyle}>

                                Accordion Item #2
                            </button>
                        </h2>

                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor, sit amet </strong> Lorem ipsum dolor sit amet consectetur, adip Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa ratione earum! isicing elit. Praesentium, doloremque distinctio illo provident accusamus aut eveniet veritatis, adipisci quis, alias recusandae omnis? Molestias, b
                                <code>.accordion-body</code> eatae.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={modeStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={modeStyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>Lorem ipsum dolor, sit amet </strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, doloremque distinctio illo pro Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quisquam. vident accusamus aut eveniet veritatis, adipisci quis, alias recusandae omnis? Molestias, b
                                <code>.accordion-body</code> eatae.
                            </div>
                        </div>
                    </div>

                </div>
                <button type="button" onClick={modeChange} className="my-3 mx-1 btn btn-primary">{modeBtnText}</button>

            </div>

        </>
    )
}
