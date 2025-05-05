import './TextField.css'
const TextField = (props) => {

    let valueInput = 'Caio henrique'
    const onTyping = (event) => {
        valueInput = event.target.value
        console.log(event.target.value)
    }

    return (
        <div className="text-field">
            <label>{ props.label }</label>
            <input value={valueInput} onChange={onTyping} required={props.mandatory} placeholder={ props.placeholder }/>
        </div>
    )
}

export default TextField