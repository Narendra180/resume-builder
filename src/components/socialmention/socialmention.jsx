import { forwardRef, useState } from "react";
import Button from "../btn/btn";
import CustomInput from "../custominput/custom-input";

const SocialMention = forwardRef(({addData,id,deleteSocialMention}, ref) => {
    const [state,setState] = useState({
        nameofsocialmedia: "",
        links: "",
    });

    const handleChange = ({target: {name, value}}) => {
        setState({...state, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addData({id,state});
    }

    return (
        <div className="social-mention-form card">
            <form
                onSubmit={handleSubmit}
                onKeyPress={
                    (e) => {
                        return e.key === "Enter" && e.preventDefault();
                    }
                }
                data-id={id}
            >
                <CustomInput
                    label={"Name of Social Media"}
                    name="nameofsocialmedia"
                    value={state.nameofsocialmedia}
                    onChange={handleChange}
                    type="text"
                />

                <CustomInput
                    label={"Links"}
                    name="links"
                    value={state.links}
                    onChange={handleChange}
                    type="text"
                />
                
                <Button 
                    className="delete-btn"
                    btnContent="Delete"
                    type="button"
                    onClick={() => deleteSocialMention(id)}
                />

                <button
                    style={
                        {display: "none"}
                    }
                    ref={ref}
                >
                    submit
                </button>
            </form>
        </div>
    )
}); 

export default SocialMention;