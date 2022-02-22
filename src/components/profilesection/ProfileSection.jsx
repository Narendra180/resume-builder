import { useState,useRef,useEffect } from "react";
// import FormInput from "../forminput/form-input";
// import FormTextarea from "../formtextarea/form-textarea";
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


    const [warningStatesOfCustomInputs,setwarningStatesOfCustomInputs] = useState({
        firstnameWM: "",
        lastnameWM: "",
        phonenumberWM: "",
        addressWM: "",
        profilePictureWM: ""
    });

    let changedStateValueKey = useRef("");

    useEffect(() => {
        console.log(state);
        console.log(changedStateValueKey);
        console.log("warnings state", warningStatesOfCustomInputs);

        if(state[changedStateValueKey.current]) {
            setwarningStatesOfCustomInputs({
                ...warningStatesOfCustomInputs, 
                [changedStateValueKey.current+"WM"]: "" 
            });
        }

        if(changedStateValueKey.current === "phonenumber") {
            if(/^[0-9]{10}$/.test(state["phonenumber"])) {
                setwarningStatesOfCustomInputs({
                    ...warningStatesOfCustomInputs, 
                    "phonenumberWM": "" 
                });
            } else {
                setwarningStatesOfCustomInputs({
                    ...warningStatesOfCustomInputs, 
                    "phonenumberWM": "Mobile number is in incorrect format" 
                });
            }
            // setwarningStatesOfCustomInputs({
            //     ...warningStatesOfCustomInputs, 
            //     [changedStateValueKey.current+"WM"]: "" 
            // });
        }

        // regex for email /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test("n@gmail.com")     

        // if(changedStateValueKey.current === "firstname") {
        //     let regexTestResult = /^[a-zA-Z]{4}$/.test(state[changedStateValueKey.current]);
        //     console.log(regexTestResult);
        // }
    }, [state]);


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        // setProfileSection(state);
        console.log(state,warningStatesOfCustomInputs);

        // check if any inputs are empty and update warnings state of custom inputs.
        let updatedWarningsState = {...warningStatesOfCustomInputs};
        for(let key in state) {
            if(!state[key]) {
                console.log(key);
                updatedWarningsState[key+"WM"] = "Please fill this required field";
            } else if(!state[key] && key !== "phonenumber") {
                updatedWarningsState[key+"WM"] = "";
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

        console.log(saveSection)

        if(saveSection) {
            setProfileSection(state);
        } else {
            setwarningStatesOfCustomInputs(updatedWarningsState);
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
        <div style={style}>
            <form
                id="profile-section-form"
                onSubmit={handleSubmit} 
                style={{backgroundColor: "#deffde"}}
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
