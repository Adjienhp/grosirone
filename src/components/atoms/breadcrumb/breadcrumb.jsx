import React from 'react'
import './style.scss'
import { ICChevronBack } from '../../../assets'

const Breadcrumb = ({ desc, label, onClick }) => {
	return (
		<div className="breadcrumb" onClick={onClick}>
			<img src={ICChevronBack} alt="chevron back" />
			<p className="label">
				{label} <span>{desc}</span>
			</p>
		</div>
	)
}

export default Breadcrumb
