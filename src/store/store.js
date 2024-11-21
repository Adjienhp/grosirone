import { configureStore } from '@reduxjs/toolkit'
import {
	loadingSlice,
	listCountrySlice,
	partnershipSlice,
	countryDetailSlice,
} from './slices'

export const store = configureStore({
	reducer: {
		listCountry: listCountrySlice,
		loading: loadingSlice,
		countryDetail: countryDetailSlice,
		partnership: partnershipSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})
