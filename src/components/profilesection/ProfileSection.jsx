import { useState,useRef,useEffect } from "react";
import FormInput from "../forminput/form-input";
import FormTextarea from "../formtextarea/form-textarea";
import { connect } from "react-redux";
import { setProfileSection } from '../../redux/profile/profileaction';
import CustomInput from "../custominput/custom-input";
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

    const textInput = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target);
        setProfileSection(state);
    }

    const handleChange = ({target: {name, value}}) => {
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
        }
    }

    const handleFocus = () => {
        textInput.current.classList.add("focused");
    }

    const handleBlur = () => {
        textInput.current.classList.remove("focused");
        let ie = document.querySelector("#fn");
        if(ie.value.length > 0) {
            textInput.current.classList.add("vpindiv");
        } else {
            textInput.current.classList.remove("vpindiv");
        }
        // console.log(ie.value.length);
    }

    const handleHover = () => {
        textInput.current.classList.add("hovered");
    }

    const handleMouseOut = () => {
        textInput.current.classList.remove("hovered");
    }

    // console.log(state);
    return (
        <div style={style}>
            <form onSubmit={handleSubmit} style={{backgroundColor: "#deffde"}}>

                <div
                    className="input "                    
                    ref={textInput}
                >
                    <label className="fs-label" htmlFor="fs">First Name</label>                
                    <input                   
                        id="fn"      
                        type="text"                        
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onMouseOver={handleHover}
                        onMouseOutCapture={handleMouseOut}
                    />
                    <fieldset
                        className="fs"
                    >
                        <legend className="legend">First Name</legend>
                    </fieldset>
                </div>

                <div
                    className="box"
                >
                    <p>Hello</p>
                </div>

                <div
                    className="input-con"                    
                >
                    <label className="i-label">First Name</label>
                    <input
                        type="text"
                    />
                </div>

                <CustomInput />
                <CustomInput />
                <CustomInput />
                <CustomInput />



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
