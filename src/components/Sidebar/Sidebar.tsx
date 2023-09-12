import React from 'react'
import { VariantBtn } from '../VariantBtn/VariantBtn'

export const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className="sidebar__filters"></div>
			<div className="sidebar__lists"></div>
			<VariantBtn variant="add-list" />
		</div >
	)
}
