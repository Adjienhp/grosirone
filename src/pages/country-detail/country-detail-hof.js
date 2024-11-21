import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setPartnership } from '../../store'
import { toast } from 'react-toastify'

export const useHooks = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const isCountryDetail = useSelector(
		(state) => state.countryDetail.countryDetail
	)

	console.log(isCountryDetail)

	const handlePartnership = () => {
		const isSuccess = Math.random() >= 0.5
		if (isSuccess) {
			toast.success('Partnership request successful!', {
				position: 'top-center',
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'colored',
			})
			dispatch(setPartnership(isCountryDetail))
		} else {
			toast.error('Partnership request failed!', {
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
	}

	const handleBack = () => {
		navigate('/')
	}

	return {
		datas: { isCountryDetail },
		methods: { handleBack, handlePartnership },
	}
}
