import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import './resume.css';
import ppic from './ppic.png';
import jsPDF from 'jspdf';

function Resume({profileData, educationData, skillsData, miniProjectData, socialMentionData}) {

    let [pImg, setpImg] = useState("");

    const generatePdf = () => {
        let doc = new jsPDF(
            {
                orientation: 'p',
                unit: 'px',
                format: 'a4',
                hotfixes: ["px_scaling"],
                putOnlyUsedFonts: true,
            },
        );

        doc.html(
            document.querySelector("#resume-divv"), 
            {
                callback: function (pdf) {
                    pdf.save("generated");
                },
                margin: [50,50,50,50]
            }
        );
    }

    function compressImage() {
        const oimg = new Image();
        oimg.src = ppic;
        oimg.onload = (e) => {
            let canvas = document.createElement('canvas');
            canvas.width = 100;
            canvas.height = 120;
            const context = canvas.getContext('2d');
            context.drawImage(oimg, 0, 0, 100, 120);
            let compressedImage = canvas.toDataURL("image/jpeg", 1);
            setpImg(compressedImage);
        }
    }

    return(
        <div>

            <div>
                <button type="button" onClick={generatePdf}>
                    Download
                </button>
            </div>

            
            <div className="resume" id="resume-divv">
                {compressImage()}
                <section className="profile-section">
                    <img src={pImg} alt="profile" />
                    <h1>{"John"} {"Doe"}</h1>
                    <p><b>Phone no: </b>{"5555555555"}</p>
                    <p className="address">{"street, area, Hyderabad, Telangana."}</p>
                </section>
                
                <section className="education-section">
                    <h1>Educational Qualifications</h1>
                    <ul>
                         
                        <li key={uuidv4()}>
                            <p><b>{"10th"}</b> &mdash; 
                            completed {"10th"} from <b>{"nameofschool em high school"} </b>
                            in {2010} with the percentage of {70}.</p>
                        </li>

                        <li key={uuidv4()}>
                            <p><b>{"Inter"}</b> &mdash; 
                            completed {"Inter"} from <b>{"nameofcollege junior college"} </b>
                            in {2012} with the percentage of {76}.</p>
                        </li>

                        <li key={uuidv4()}>
                            <p><b>{"Degree"}</b> &mdash; 
                            completed {"Degree"} from <b>{"nameofdegreecollege engineering college"} </b>
                            in {2045} with the percentage of {80}.</p>
                        </li>
                        
                    </ul>
                </section>
                
                <section className="skills-section">
                    <h1>Skills</h1>
                    <ul>
                        
                        <li key={uuidv4()}>
                            {"html"}
                        </li>

                        <li key={uuidv4()}>
                            {"css"}
                        </li>
                        
                        <li key={uuidv4()}>
                            {"javscript"}
                        </li>

                        <li key={uuidv4()}>
                            {"react js"}
                        </li>
                         
                    </ul>
                </section>
                
                <section className="projects-section">
                <h1>Projects</h1>
                    <ul>
                        
                        <li key={uuidv4()}>
                            <div className="project">
                                <h2>{"IOT"}</h2>
                                <p>
                                    <b>Tech Stack: </b>
                                    iot kit
                                </p>
                                <p>
                                    
                                    <b>Description: </b>:
                                    
                                    The Iot project is done by using iot kit and using backend software to control the board.
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>

                <section className="social-links">
                    <h1>My online presence</h1>
                    <ul>
                        
                        <li key={uuidv4()}>
                            <div className="social">
                                <h3>
                                    Github
                                </h3>
                                <p>
                                  https://www.github.com/repositories/group/ddhdhd/ddhd    
                                </p>
                            </div>
                        </li>

                        <li key={uuidv4()}>
                            <div className="social">
                                <h3>
                                    Linkedin
                                </h3>
                                <p>
                                  https://www.github.com/repositories/group/ddhdhd/ddhd  
                                </p>
                            </div>
                        </li>

                        <li key={uuidv4()}>
                            <div className="social">
                                <h3>
                                    Hackerrank
                                </h3>
                                <p>
                                  https://www.github.com/repositories/group/ddhdhd/ddhd  
                                </p>
                            </div>
                        </li>
                    </ul>
                </section>
                
            </div>
            
            
            
        </div>
    )
}


export default Resume;