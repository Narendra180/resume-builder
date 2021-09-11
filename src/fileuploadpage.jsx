import React, {useState} from 'react';

export default function FileUploadPage(){

    const [selectedFile, setSelectedFile] = useState(new File([""], "filename"));
    const [isFileSelected, setIsFileSelected] = useState(false);
    const [image, setImage] = useState("k");

    function handleChange(event) {
        setSelectedFile(event.target.files[0]);
        const fileReader = new FileReader();
        fileReader.onload = (e) => {
            setImage(e.target.result);
        };
        fileReader.readAsDataURL(event.target.files[0]);
        console.log(image)
    }

    // console.log(selectedFile, isFileSelected, selectedFile.size);

	return(
        <div>
            {console.log(typeof image)}
			<input type="file" name="file" onChange={handleChange}
            accept="image/*"
            />
            <img src={image} alt=""/>
		</div>
	)
}