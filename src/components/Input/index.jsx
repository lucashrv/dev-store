import './style.css'

export default function Input (props) {
    const {
        title = 'Title',
        value,
        onChange
    } = props

    return <>
        <div className="wrapper">
         <div className="input-data">
            <input
                type="text"
                value={value}
                onChange={onChange}
                required
            />
            <div className="underline"></div>
            <label>{title}</label>
         </div>
      </div>
    </>
}