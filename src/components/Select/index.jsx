import './style.css'

export default function Select({ title }) {

    return <div className='box'>

        <label className="select" for="slct">
            <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">{title}</option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
            </select>
            <svg>
                <use xlink:href="#select-arrow-down"></use>
            </svg>
        </label>
        {/* SVG Sprites */}
        <svg className="sprites">
            <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
            </symbol>
        </svg>
    </div>
}