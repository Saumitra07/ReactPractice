const Modal=(props)=>{

    // function cancelHandler()
    // {
    //     props.onCancel();
    // }
    // function ConfirmHandler()
    // {
    //     props.onConfirm();
    // }


    return <div className="modal">
        <p>Are you sure</p>
        <button className="btn btn--alt" onClick={props.onCancel}>Cancel</button>
        <button className="btn" onClick={props.onConfirm}>Confirm</button>
      
    </div>
}

export default Modal;

