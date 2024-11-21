import { createSlice } from '@reduxjs/toolkit'

const getPartnership = JSON.parse(localStorage.getItem('partnership'))

const initialState = {
	partnership: getPartnership || [],
}

const partnershipSlice = createSlice({
	name: 'partnership',
	initialState,
	reducers: {
		setPartnership(state, action) {
			state.partnership.push(action.payload)
			localStorage.setItem(
				'partnership',
				JSON.stringify(state.partnership)
			)
		},
		removePartnership(state, action) {
			state.partnership = state.partnership.filter(
				(country) => country.name.common !== action.payload
			)
		},
	},
})

export const { setPartnership, removePartnership } = partnershipSlice.actions
export default partnershipSlice.reducer
