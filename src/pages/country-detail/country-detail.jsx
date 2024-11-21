import React from 'react'
import { Container } from 'react-bootstrap'
import { Breadcrumb, ListCountryDetail } from '../../components'
import { useHooks } from './country-detail-hof'
import './style.scss'

const CountryDetail = () => {
	const {
		datas: { isCountryDetail },
		methods: { handleBack, handlePartnership },
	} = useHooks()

	return (
		<div id="country-detail">
			<Container>
				<div className="title-wrapper">
					<h1 className="title">Country Detail</h1>
				</div>
				<div className="country-detail-wrapper">
					<Breadcrumb
						label="List of Countries "
						desc="/ Country Detail"
						onClick={handleBack}
					/>
					<div className="country">
						<div>
							<img
								src={isCountryDetail.flags.png}
								alt="country flag"
							/>
							<p className="label mt-2">
								{isCountryDetail.name.common}
							</p>
						</div>
						<button
							className="btn-custom"
							onClick={handlePartnership}
						>
							Offer Partnership
						</button>
					</div>
					<ListCountryDetail
						label="Google Maps Location"
						desc={isCountryDetail.maps.googleMaps}
					/>
					<ListCountryDetail
						label="Language(s) Spoken"
						desc={Object.values(isCountryDetail.languages).join(
							', '
						)}
					/>
					<ListCountryDetail
						label="Currency used"
						desc={Object.values(isCountryDetail.currencies)
							.map(
								(currency) =>
									`${currency.name} (${currency.symbol})`
							)
							.join(', ')}
					/>
					<ListCountryDetail
						label="Independence Status"
						desc={isCountryDetail.independent ? 'True' : 'False'}
					/>
					<ListCountryDetail
						label="Capital City"
						desc={isCountryDetail.capital[0]}
					/>
					<ListCountryDetail
						label="Flag Description"
						desc={isCountryDetail.flags.alt}
					/>
					<ListCountryDetail
						label="Emblem"
						icon={isCountryDetail.coatOfArms.png}
					/>
					<ListCountryDetail
						label="Population"
						desc={isCountryDetail.population}
					/>
				</div>
			</Container>
		</div>
	)
}

export default CountryDetail
