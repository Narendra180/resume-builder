import { connect } from "react-redux";

function ResumePreview(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.profileData.firstname}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileData: state.profileSection.profileData
    }
}


export default connect(mapStateToProps)(ResumePreview);