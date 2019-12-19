import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName : '',
            lastName : '',
            gender : '',
            tech : false,    
            sales : false,
            analyst : false
            
        }
        this.handleChange = this.handleChange.bind(this)
    }
    // event contains the information about properties of component that triggered event

    //for checkboxes - we need extra care (becuz its have "checked" attribute instead of value)
    handleChange(event) {
        const {name, value, type, checked}  = event.target
        type == 'checkbox' ? this.setState({
                [name] : checked
        }) :
        this.setState({
            [name] : value
        })
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                {/*Formik - for implemnting Forms*/}
                <form className='form' onSubmit={this.handleSubmit}>
                    
                    <input type='text' placeholder='firstName' name='firstName'
                    value={this.state.fisrtName} onChange={this.handleChange}/>
                    <br />
                    <p>{this.state.firstName}</p>

                    <input type='text' placeholder='lastName' name='lastName'
                    value={this.state.lastName} onChange={this.handleChange}/>
                    <br />
                    <p>{this.state.lastName}</p>
                    <br />
                    

                    {/* for checkboxes - we need extra care (becuz its have "checked" attribute instead of value) */}
                    <label>
                        <input type='checkbox' name='tech' checked={this.state.tech}
                        onChange={this.handleChange} />Tech
                    </label>
                    <label>
                        <input type='checkbox' name='sales' checked={this.state.sales}
                        onChange={this.handleChange} />Sales
                    </label>
                    <label>
                        <input type='checkbox' name='analyst' checked={this.state.analyst}
                        onChange={this.handleChange} />Analyst
                    </label>

                    <p>{}</p>



                    <br />
                    <label>
                        <input type='radio' name='gender' value='male' checked={this.state.gender == 'male'}
                        onChange={this.handleChange} />Male
                    </label>
                    <label>
                        <input type='radio' name='gender' value='female' checked={this.state.gender == 'female'}
                        onChange={this.handleChange} />Female
                    </label>

                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form