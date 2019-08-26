import React from 'react'
import Link from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import Form from '../components/Form'


class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MainContent />
				<Footer />
				<Form />
			</div>	
		)
	}
} 

export default App