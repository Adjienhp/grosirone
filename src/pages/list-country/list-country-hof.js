/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListCountry, setLoading, setCountryDetail } from '../../store'
import { useNavigate } from 'react-router-dom'

export const useHooks = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isLoading = useSelector((state) => state.loading.loading)
	const isListCountry = useSelector((state) => state.listCountry.listCountry)

	const getListCountry = () => {
		axios
			.get(`https://restcountries.com/v3.1/all`)
			.then(({ data }) => {
				dispatch(setLoading(false))
				dispatch(setListCountry(data))

				localStorage.setItem('listCountry', JSON.stringify(data))
			})
			.catch((err) => {
				console.log(err)
				dispatch(setLoading(false))
			})
	}

	const handleDetailCountry = (item) => {
		navigate('/country-detail')
		dispatch(setCountryDetail(item))
		localStorage.setItem('countryDetail', JSON.stringify(item))
	}

	const handleCountryPartnership = () => {
		navigate('/country-partnership')
	}

	useEffect(() => {
		getListCountry()
	}, [])

	return {
		datas: { isLoading, isListCountry },
		methods: { handleDetailCountry, handleCountryPartnership },
	}
}
