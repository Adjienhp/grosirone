import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { Breadcrumb } from '../../components'
import { useHooks } from './country-partnership-list-hof'
import './style.scss'

const CountryPartnershipList = () => {
	const {
		datas: { isPartnership },
		methods: { handleBack, handleDetailCountry, handleRemovePartnership },
	} = useHooks()

	return (
		<div id="country-partnership">
			<Container>
				<div className="title-wrapper">
					<h1 className="title">Country Partnership</h1>
				</div>
				<div className="country-partnership-wrapper">
					<Breadcrumb
						label="List of Countries /"
						desc="Country Partnership"
						onClick={handleBack}
					/>
					<Table className="mt-3">
						<thead>
							<tr>
								<th>Country</th>
							</tr>
						</thead>
						<tbody>
							{isPartnership?.map((item) => (
								<tr key={item.cca2}>
									<td>
										<div
											className="flex"
											onClick={() =>
												handleDetailCountry(item)
											}
										>
											<div className="icon">
												{item.flag}
											</div>
											<p className="label">
												{item.name.common}
											</p>
										</div>
										<button
											className="btn-custom"
											onClick={() =>
												handleRemovePartnership(
													item.name.common
												)
											}
										>
											Cancel Partnership
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
				</div>
			</Container>
		</div>
	)
}

export default CountryPartnershipList
