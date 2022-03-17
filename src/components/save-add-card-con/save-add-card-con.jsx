import Button from "../btn/btn";

function SaveAddBtnsContiner({saveOnClick,addCardOnClick,saveBtnContent,addBtnContent}) {
  return (
    <div className="save-add-card-btn-container">
        <Button 
            className="education-section-save-btn save-btn"
            btnContent={saveBtnContent}
            onClick={saveOnClick}
        />

        <Button 
            className="education-section-save-btn add-btn"
            btnContent={addBtnContent}
            onClick={addCardOnClick}
        />
    </div>     
  );
}

export default SaveAddBtnsContiner;