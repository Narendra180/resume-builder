import { useState } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";
import { connect } from "react-redux";
import { setProfileSection } from '../../redux/profile/profileaction';

function ProfileSection({setProfileSection, style}) {
    const [state,setState] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        profilePicture: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        setProfileSection(state);
    }

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    const handlImageChange = (event) => {
        if(event.target.files[0]) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
                setState({...state, profilePicture: e.target.result});
            };
            fileReader.readAsDataURL(event.target.files[0]);
        }   
    }

    // console.log(state);
    return (
        <div style={style}>
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
                    pattern="\d*"
                    type="tel"
                    maxLength="10"
                    placeholder="Enter your phone number"
                    title="only numbers allowed"
                    required
                />

                <FormInput
                    label="Profile Picture: "
                    id="profilepicture"
                    name="profilepicture"
                    type="file"
                    onChange={handlImageChange}
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
                    required
                />

                <button type="submit">
                    save
                </button>
            </form>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        setProfileSection: (state) => {
            dispatch(setProfileSection(state));
        }
    }
}

export default connect(null,mapDispatchToProps)(ProfileSection);
