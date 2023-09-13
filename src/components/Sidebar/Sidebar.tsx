import React from 'react'
import { VariantBtn } from '../VariantBtn/VariantBtn'
import cssStyles from './Sidebar.module.css'

export const Sidebar = () => {
	return (
		<nav className={cssStyles.todoApp__navArea}>
			<div className='sidebar'>
				<div className="sidebar__filters"></div>
				<div className="sidebar__lists"></div>
				<VariantBtn variant="add-list" />
			</div >
		</nav>
	)
}
