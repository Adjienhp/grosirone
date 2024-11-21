import React from 'react'
import './style.scss'

const ListCountryDetail = ({ desc, icon, label }) => {
	return (
		<div className="list-country-detail">
			<p className="sublabel">{label}</p>
			{label === 'Emblem' ? (
				<img src={icon} alt="icon" className="icon" />
			) : label === 'Google Maps Location' ? (
				<a href={desc} target="blank" className="desc">
					{desc}
				</a>
			) : (
				<p className="desc">{desc}</p>
			)}
		</div>
	)
}

export default ListCountryDetail
