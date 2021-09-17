import { connect } from "react-redux";

function ResumePreview({
                        profileData,
                        educationData,
                        skillsData,
                        miniProjectData,
                        socialMentionData}) {


    
    return (
        <div>
            <iframe src="" title="resume preview" frameBorder="0"></iframe>
        </div>
    );

}

const mapSateToProps = (state) => {
    return {
            profileData: state.profileSection.profileData,
            educationData: state.educationSection.educationData,
            skillsData: state.skillsSection.skillsData,
            miniProjectData: state.miniProjectSection.miniProjectData,
            socialMentionData: state.socialMentionSection.socialMentionData
        }
}

export default connect(mapSateToProps)(ResumePreview);