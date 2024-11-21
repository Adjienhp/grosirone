import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ListCountry, CountryDetail, CountryPartnershipList } from '../pages'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<ListCountry />} />
				<Route path="/country-detail" element={<CountryDetail />} />
				<Route
					path="/country-partnership"
					element={<CountryPartnershipList />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
