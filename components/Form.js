import React from 'react'

class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName : '',
            lastName : '',
            subscribe : true,
            gender : ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked}  = event.target
        type == 'checkbox' ? this.setState({[name] : checked}) :
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
                    <input type='text' placeholder='lastName' name='lastName'
                    value={this.state.lastName} onChange={this.handleChange}/>
                    <br />


                    <h2>{this.state.firstName} <br /> {this.state.lastName}</h2>
                    <br />
                    <label>
                        <input type='checkbox' name='subscribe' checked={this.state.subscribe}
                        onChange={this.handleChange} />SUBSCRIBE
                    </label>
                    
                    <label>
                        <input type='radio' name='gender' value='male' checked={this.state.gender == 'male'}
                        onChange={this.handleChange} />Male
                    </label>
                    <label>
                        <input type='radio' name='gender' value='female' checked={this.state.gender == 'female'}
                        onChange={this.handleChange} />Female
                    </label>

                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form