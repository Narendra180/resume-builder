import { useState } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";
import { connect } from "react-redux";
import { setProfileSection } from '../../redux/profile/profileaction';

function ProfileSection({setProfileSection}) {

    const [state,setState] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        setProfileSection(state);
    }

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    // console.log(state);
    return (
        <form onSubmit={handleSubmit}>
            <FormInput
                label={"First Name: "}
                id="firstname" 
                name="firstname"
                value={state.firstname}
                onChange={handleChange}
                type="text"
                placeholder="Enter Your first name"
                required
            />

            <FormInput
                label={"Last Name: "}
                id="lastname" 
                name="lastname"
                value={state.lastname}
                onChange={handleChange}
                type="text"
                placeholder="Enter your last name"
                required
            />

            <FormInput
                label={"Phone Number: "}
                id="phonenumber"
                name="phonenumber"
                value={state.phonenumber}
                onChange={handleChange}
                type="tel"
                maxLength="10"
                placeholder="Enter your phone number"
                required
            />

            <FormInput
                label="Profile Picture: "
                id="profilepicture"
                name="profilepicture"
                type="file"
                accept="image/*"
                required
            />


            <FormTextarea
                label="Address: "
                id="address"
                name="address"
                value={state.address}
                onChange={handleChange}
                placeholder="Enter your address"
            />

            <button type="submit">
                save
            </button>
        </form>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileSection: (state) => dispatch(setProfileSection(state))
    }
}

export default connect(null,mapDispatchToProps)(ProfileSection);
