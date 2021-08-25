import React from 'react'

export default function About(props) {


    // const [modeStyle, setModeStyle] = useState({
    //     backgroundColor: "white",
    //     color: "black"
    // })
    // const [modeBtnText, setModeBtnText] = useState("Enable Dark Mode")

    // const modeChange = () => {
    //     if (modeStyle.color === 'black') {
    //         setModeStyle({
    //             backgroundColor: "black",
    //             color: "white",
    //             border:"0.4px solid white"
    //         })
    //         setModeBtnText("Enable Light Mode")
    //     } else {
    //         setModeStyle(
    //             {
    //                 backgroundColor: "white",
    //                 color: "black"
    //             }
    //         )
    //         setModeBtnText("Enable Dark Mode")
    //     }
    // }
let modeStyle = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode === 'dark'?'#bfd1ff45':'white'
}

    return (
        <>
            <div className="container my-3">
                <h1>About Us</h1>
                <div className="accordion" id="accordionExample">
                    {/* <div className="accordion" id="accordionExample"> */}
                    <div className="accordion-item" style={modeStyle}>
                        {/* <div className="accordion-item"> */}

                        <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={modeStyle}>
                               <strong>Analyze Your Text</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">

                            <div className="accordion-body">
                                Text manipulator gives you a way to analyze your text quickly and effciently.Be it word count, character count or
                                </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={modeStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={modeStyle}>
<strong>Free To Use</strong>
                            </button>
                        </h2>

                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">

                            <div className="accordion-body">
                            Text Manipulator is a free character counter tool that provides instant character count and word count statistics for a given text. Text Manipulator reports the number of words and characters. Thus it is suitable for writhing text with word / character limit.
                               </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={modeStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={modeStyle}>
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera, Brave. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                                </div>
                        </div>
                    </div>

                </div>
                {/* <button type="button" onClick={modeChange} className="my-3 mx-1 btn btn-primary">{modeBtnText}</button> */}

            </div>

        </>
    )
}