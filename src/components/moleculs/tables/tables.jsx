import React from 'react'
import { Table } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import './style.scss'

const Tables = ({ data, loading, handleDetailCountry }) => {
	const skeletonCount = 15

	return (
		<Table className="mt-3">
			<thead>
				<tr>
					<th>Country</th>
				</tr>
			</thead>
			<tbody>
				{loading
					? Array.from({ length: skeletonCount }, (_, index) => (
							<tr key={index}>
								<td>
									<div className="flex">
										<Skeleton width={30} />
										<Skeleton width={100} />
									</div>
								</td>
							</tr>
					  ))
					: data?.map((item) => (
							<tr key={item.cca2}>
								<td>
									<div
										className="flex"
										onClick={() =>
											handleDetailCountry(item)
										}
									>
										<div className="icon">{item.flag}</div>
										<p className="label">
											{item.name.common}
										</p>
									</div>
								</td>
							</tr>
					  ))}
			</tbody>
		</Table>
	)
}

export default Tables
