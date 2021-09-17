// import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

function ResumePreview({profileData, educationData, skillsData, miniProjectData, socialMentionData}) {
    return(
        <div className="resume-preview">
            {/* <section className="profile-section">
                <h1>{profileData.firstname} {profileData.lastname}</h1>
                <p><b>Phone no: </b>{profileData.phonenumber}</p>
                <p style={{width: "150px"}}>{profileData.address}</p>
                <img src={profileData.profilePicture} alt="profile" style={{width: "100px",height: "100px"}} />
            </section>
            
            <section className="education-section">
                <h1>Educational Qualifications</h1>
                <ul>
                    {   
                        educationData.map((obj) => {
                            let course = Object.values(obj)[0];
                            let {
                                    nameofcourse, 
                                    coursecompletionyear,
                                    collegeschoolname,
                                    percentage
                                } = course;
                            return (
                                <li key={uuidv4()}>
                                    <p><b>{nameofcourse}</b> &mdash; 
                                    completed {nameofcourse} from <b>{collegeschoolname} </b>
                                    in {coursecompletionyear} with the percentage of {percentage}.</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            
            <section className="skills-section">
                <h1>Skills</h1>
                <ul>
                    {   
                        skillsData.map((obj) => {
                            let { skill } = Object.values(obj)[0];
                            return (
                                <li key={uuidv4()}>
                                    {skill}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
            
            <section className="projects-section">
            <h1>Projects</h1>
                <ul>
                    {   
                        miniProjectData.map((obj) => {
                            let { 
                                    projectname,
                                    techstackused,
                                    projectdescription
                                } = Object.values(obj)[0];
                            return (
                                <li key={uuidv4()}>
                                    <div className="project">
                                        <h2>{projectname}</h2>
                                        <p>
                                            {techstackused?
                                            <b>Tech Stack: </b>
                                            :null}
                                            {techstackused}
                                        </p>
                                        <p>
                                            {projectdescription?
                                            <b>Description: </b>:
                                            null}
                                            {projectdescription}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section>

            <section className="social-links">
                <h1>My online presence</h1>
                <ul>
                    {   
                        socialMentionData.map((obj) => {
                            let { nameofsocialmedia, links } = Object.values(obj)[0];
                            return (
                                <li key={uuidv4()}>
                                    <div className="social">
                                        <h3>
                                            {
                                                nameofsocialmedia?
                                                <b>{nameofsocialmedia+": "}</b>:
                                                null
                                            }
                                        </h3>
                                        <p style={{width: "150px"}}>
                                            {links}
                                        </p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </section> */}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileSection.profileData,
        educationData: state.educationSection.educationData,
        skillsData: state.skillsSection.skillsData,
        miniProjectData: state.miniProjectSection.miniProjectData,
        socialMentionData: state.socialMentionSection.socialMentionData
    }
}


export default connect(mapStateToProps)(ResumePreview);