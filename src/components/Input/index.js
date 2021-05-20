const Input = (props) => {
    return (
        <div className="form-floating mb-3">
                <input name={props.id} type={props.type} autoComplete={props.autoComplete} className="form-control" placeholder={props.placeholder} value={props.value}/>
                <label htmlFor={props.id}>{props.text}</label>
        </div>
    )
}

export default Input