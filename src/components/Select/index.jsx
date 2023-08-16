import './style.css'

export default function Select({ title, options, onChange, onClick, value }) {

    return <div className='box'>

        <label className="select" htmlFor="slct">
            <select
                id="slct"
                required="required"
                onClick={onClick}
                onChange={onChange}
                defaultValue='category'
                value={value}
            >
                <option value="category">{title}</option>
                {options}
            </select>
        </label>
    </div>
}