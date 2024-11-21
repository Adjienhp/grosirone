import { createSlice } from '@reduxjs/toolkit'

const getListCountry = JSON.parse(localStorage.getItem('listCountry'))

const initialState = {
	listCountry: getListCountry || [],
}

const listCountrySlice = createSlice({
	name: 'listCountry',
	initialState,
	reducers: {
		setListCountry(state, action) {
			state.listCountry = action.payload
		},
	},
})

export const { setListCountry } = listCountrySlice.actions
export default listCountrySlice.reducer
