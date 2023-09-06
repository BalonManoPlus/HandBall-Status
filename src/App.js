import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

// pages
import Home from './pages/Home'
import About from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import DeleteAccount from './pages/DeleteAccount'

// components
import Header from './components/Header'

export default function App() {

	return (
		<BrowserRouter>
			<Header />

			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/privacy-policy' element={<PrivacyPolicy />} />
				<Route path='/delete-account' element={<DeleteAccount />} />
			</Routes>
		</BrowserRouter>
	)
}