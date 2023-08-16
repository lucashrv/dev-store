import './style.css'

export default function Input (props) {
    const {
        title = 'Title',
        type = 'text',
        value,
        onChange,
        onKeyUp
    } = props

    return <>
        <div className="wrapper">
         <div className="input-data">
            <input
                type={type}
                value={value}
                onChange={onChange}
                onKeyUp={onKeyUp}
                required
            />
            <div className="underline"></div>
            <label>{title}</label>
         </div>
      </div>
    </>
}