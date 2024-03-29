import { useState,useRef,useEffect } from "react";
// import FormInput from "../forminput/form-input";
// import FormTextarea from "../formtextarea/form-textarea";
import { connect } from "react-redux";
import { setProfileSection } from '../../redux/profile/profileaction';
import CustomInput from "../custominput/custom-input";
import CustomFileUploadBtn from "../custom-file-upload-btn/custom-file-upload-btn";
import Button from "../btn/btn";
import './ProfileSection.css';

function ProfileSection({setProfileSection, style}) {
    const [state,setState] = useState({
        firstname: "",
        lastname: "",
        phonenumber: "",
        address: "",
        profilePicture: ""
    });


    const [warningStatesOfCustomInputs,setwarningStatesOfCustomInputs] = useState({
        firstnameWM: "",
        lastnameWM: "",
        phonenumberWM: "",
        addressWM: "",
        profilePictureWM: ""
    });

    let changedStateValueKey = useRef("");
    let isStateChanged = useRef("");

    useEffect(() => {
        // console.log(state);
        // console.log(changedStateValueKey);
        // console.log("warnings state", warningStatesOfCustomInputs);

        const changeWarningMessagesState = (changedInputProperty, messageToBeSet) => {
            setwarningStatesOfCustomInputs({
                ...warningStatesOfCustomInputs, 
                [changedInputProperty]: messageToBeSet 
            });
            isStateChanged.current = false;
        }

        switch(changedStateValueKey.current) {
            case "":
                break;
            case "phonenumber":
                console.log("phonenumber case")
                if(/^[0-9]{10}$/.test(state["phonenumber"]) && isStateChanged.current) {                    
                    changeWarningMessagesState("phonenumberWM", "");
                } else {
                    if(isStateChanged.current) {
                        changeWarningMessagesState("phonenumberWM", "Mobile number is in incorrect format");
                    }                    
                }
            break;
            default:
                if(state[changedStateValueKey.current] && isStateChanged.current) {
                    changeWarningMessagesState(changedStateValueKey.current+"WM", "");
                } else if(!state[changedStateValueKey.current] && isStateChanged.current){
                    changeWarningMessagesState(changedStateValueKey.current+"WM", "Please fill this required field");
                }
        }

    }, [state, warningStatesOfCustomInputs]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let updatedWarningsState = {...warningStatesOfCustomInputs};
        for(let key in state) {
            if(!state[key]) {
                updatedWarningsState[key + "WM"] = "Please fill this required field";
            } else if(!state[key] && key !== "phonenumber") {
                updatedWarningsState[key + "WM"] = "";
            }
        }

        let saveSection = false;

        for(let key in updatedWarningsState) {
            if(!updatedWarningsState[key]) {
                saveSection = true;
            } else {
                saveSection = false;
                break;
            }
        }

        // console.log(saveSection);

        if(saveSection) {
            setProfileSection(state);
        } else {
            setwarningStatesOfCustomInputs(updatedWarningsState);
            isStateChanged = false;
        }
    }

    const handleChange = ({target: {name, value}, target}) => {
        if(value.length > 0) {
            target.parentNode.classList.add("value-present");
        } else {
            target.parentNode.classList.remove("value-present");
        }
        changedStateValueKey.current = name;
        setState({...state, [name]: value});
        isStateChanged.current = true;
        // console.log(state, "state log from onchange method");
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
                isStateChanged.current = true;
                changedStateValueKey.current = "profilePicture";
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
        <div style={style} className="profile-section-con">
            <div className="profile-section-form-container cards-list">
                <form
                    id="profile-section-form"
                    // onSubmit={handleSubmit} 
                    // style={{backgroundColor: "#deffde"}}
                    noValidate
                >        

                    <CustomInput
                        label={"First Name"}
                        name="firstname"
                        value={state.firstname}
                        onChange={handleChange}
                        type="text"
                        required
                        warning={warningStatesOfCustomInputs["firstnameWM"]}
                    />

                    <CustomInput
                        label={"Last Name"}
                        name="lastname"
                        value={state.lastname}
                        onChange={handleChange}
                        type="text"
                        required
                        warning={warningStatesOfCustomInputs["lastnameWM"]}
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
                        warning={warningStatesOfCustomInputs["phonenumberWM"]}
                    />

                    <CustomFileUploadBtn 
                        onChange={handlImageChange}
                        name="profilepicture"
                        accept="image/*"
                        btnText={"Choose Profile Picture"}
                        required
                        warning={warningStatesOfCustomInputs["profilePictureWM"]}
                    />

                    {/* TA means textarea*/}
                    <CustomInput
                        label={"Address"}
                        name="address"
                        value={state.address}
                        onChange={handleChange}
                        required
                        component={"TA"}
                        warning={warningStatesOfCustomInputs["addressWM"]}
                    />                    
                </form>               
            </div>
            <div className="save-add-card-btn-container">
                <Button
                    className="profile-section-save-btn"
                    btnContent="Save Profile Section"
                    type="submit"
                    onClick={handleSubmit}
                />
            </div>            
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
