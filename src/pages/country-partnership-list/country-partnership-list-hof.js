import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { removePartnership, setCountryDetail } from '../../store'
import { toast } from 'react-toastify'

export const useHooks = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isPartnership = useSelector((state) => state.partnership.partnership)

	const handleRemovePartnership = (countryName) => {
		dispatch(removePartnership(countryName))
		const updatedPartnership = isPartnership.filter(
			(country) => country.name.common !== countryName
		)
		localStorage.setItem('partnership', JSON.stringify(updatedPartnership))
		toast.success(`Partnership with ${countryName} has been canceled.`, {
			position: 'top-center',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'colored',
		})
	}

	const handleDetailCountry = (item) => {
		navigate('/country-detail')
		dispatch(setCountryDetail(item))
		localStorage.setItem('countryDetail', JSON.stringify(item))
	}

	const handleBack = () => {
		navigate('/')
	}

	return {
		datas: { isPartnership },
		methods: { handleBack, handleDetailCountry, handleRemovePartnership },
	}
}
