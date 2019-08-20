import React from 'react'
import ReactDOM from 'react-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MainContent />
				<Footer />
			</div>	
		)
	}
} 

export default App