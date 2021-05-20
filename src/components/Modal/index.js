const Modal = (props) => {
    return (
        <div className={props.class} id={props.id} data-bs-backdrop={props.databsbackdrop} data-bs-keyboard={props.databskeyboard} tabIndex="1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Erro</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.bodymessage}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                    </div>
                    </div>
            </div>
        </div>

    )
}
export default Modal