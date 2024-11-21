import React from 'react'
import { Container } from 'react-bootstrap'
import { Tables } from '../../components'
import { useHooks } from './list-country-hof'
import './style.scss'

const ListCountry = () => {
	const {
		datas: { isLoading, isListCountry },
		methods: { handleDetailCountry, handleCountryPartnership },
	} = useHooks()

	return (
		<div id="list-country">
			<Container>
				<div className="title-wrapper">
					<h1 className="title">List of Countries</h1>
				</div>
				<div className="text-end">
					<button
						className="btn-custom"
						onClick={handleCountryPartnership}
					>
						Country Partnership
					</button>
				</div>
				<div className="list-country-wrapper">
					<Tables
						loading={isLoading}
						data={isListCountry}
						handleDetailCountry={handleDetailCountry}
					/>
				</div>
			</Container>
		</div>
	)
}

export default ListCountry
