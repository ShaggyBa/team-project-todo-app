import React from 'react'
import cssStyles from "./Header.module.css"


const Header: React.FC = () => {
	return (
		<header className={cssStyles.todoApp__header}>
				<img className={cssStyles.todoApp__header__img} src='https://assets.bbhub.io/company/sites/51/2022/01/todo-color-2048x829-1.png'></img>
		</header >
	)
}

export default Header;