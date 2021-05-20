const Button = (props) => {
    return (
        <div className={props.classNameDiv}>
                <button onClick={props.onClick} type={props.type} className={props.classNameBtn}>{props.text}</button>
        </div>
    )
}
export default Button