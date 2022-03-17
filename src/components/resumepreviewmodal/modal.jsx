import "./modal.css";

function Modal({children,closeHandler}) {
  return (
    <div
      className="modal"
      onClick={closeHandler}
    >
      {children}
    </div>
  );
}

export default Modal;