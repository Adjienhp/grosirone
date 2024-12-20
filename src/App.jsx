import React from 'react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import Router from './router'
import { store } from './store'

const App = () => {
	return (
		<Provider store={store}>
			<Router />
			<ToastContainer />
		</Provider>
	)
}

export default App
