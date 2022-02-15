import { useState,useRef,useEffect } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";
import { connect } from "react-redux";
import { setProfileSection } from '../../redux/profile/profileaction';
import CustomInput from "../custominput/custom-input";
import CustomFileUploadBtn from "../custom-file-upload-btn/custom-file-upload-btn";
import './ProfileSection.css';

function ProfileSection({setProfileSection, style}) {
    const [state,setState] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        profilePicture: ""
    });

    useEffect(() => console.log(state));


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        setProfileSection(state);
    }

    const handleChange = ({target: {name, value}, target}) => {
        if(value.length > 0) {
            target.parentNode.classList.add("value-present");
        } else {
            target.parentNode.classList.remove("value-present");
        }
        setState({...state, [name]: value})
    }

    const handlImageChange = (event) => {
        // if(event.target.files[0]) {
        //     const fileReader = new FileReader();
        //     fileReader.onload = (e) => {
        //         setState({...state, profilePicture: e.target.result});
        //     };
        //     fileReader.readAsDataURL(event.target.files[0]);
        // }   

        let customFileUploadBtnCon = event.nativeEvent.target.parentNode.parentNode;

        const file = event.target.files[0];
        if(file) {
            const blobUrl = URL.createObjectURL(file);
            const originalImg = new Image();
            originalImg.src = blobUrl;
            originalImg.onload = (e) => {
                URL.revokeObjectURL(blobUrl);
                let canvas = document.createElement('canvas');
                canvas.width = 100;
                canvas.height = 120;
                const context = canvas.getContext('2d');
                context.drawImage(originalImg, 0, 0, 100, 120);
                let compressedImage = canvas.toDataURL("image/jpeg", 1);
                setState({...state, profilePicture: compressedImage});
            }

            if(customFileUploadBtnCon.childElementCount > 1) {
                let alreadyPresentNewDivNode = customFileUploadBtnCon.querySelector(".selected-file-name-text");
                alreadyPresentNewDivNode.textContent = file.name;
            } else {
                let newDivNode = document.createElement("div");
                newDivNode.classList.add("selected-file-name-text");
                newDivNode.textContent = file.name;
                customFileUploadBtnCon.appendChild(newDivNode);
            }
        }
    }

    return (
        <div style={style}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "#deffde"}}>        

                <CustomInput
                    label={"First Name"}
                    name="firstname"
                    value={state.firstname}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <CustomInput
                    label={"Last Name"}
                    name="lastname"
                    value={state.lastname}
                    onChange={handleChange}
                    type="text"
                    required
                />

                <CustomInput
                    label={"Phone Number"}
                    name="phonenumber"
                    value={state.phonenumber}
                    onChange={handleChange}
                    pattern="\d*"
                    type="tel"
                    maxLength="10"
                    title="only numbers allowed"
                    required
                />

                <CustomFileUploadBtn 
                    onChange={handlImageChange}
                    name="profilepicture"
                    onChange={handlImageChange}
                    accept="image/*"
                    required
                />

                {/* <FormInput
                    label="Profile Picture"
                    name="profilepicture"
                    type="file"
                    onChange={handlImageChange}
                    accept="image/*"
                    required
                /> */}


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
