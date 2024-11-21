import { createSlice } from '@reduxjs/toolkit'

const getCountryDetail = JSON.parse(localStorage.getItem('countryDetail'))

const initialState = {
	countryDetail: getCountryDetail || {},
}

const countryDetailSlice = createSlice({
	name: 'countryDetail',
	initialState,
	reducers: {
		setCountryDetail(state, action) {
			state.countryDetail = action.payload
		},
	},
})

export const { setCountryDetail } = countryDetailSlice.actions
export default countryDetailSlice.reducer
