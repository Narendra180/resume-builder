import { connect } from "react-redux";

function ResumePreview(props) {
    console.log(props)
    return(
        <div>
            <h1>{props.profileSection.firstname}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        profileSection: state.profileSection.profileSection
    }
}


export default connect(mapStateToProps)(ResumePreview);