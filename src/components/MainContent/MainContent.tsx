import React from 'react'
import cssStyles from "./MainContent.module.css"

const MainContent: React.FC = () => {
	return (
		<main className={cssStyles.todoApp__taskArea}>
			<p>Задачи отсутствуют</p>
		</main >
	)
}

export default MainContent;