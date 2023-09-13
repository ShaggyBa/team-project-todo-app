import React from 'react'
import cssStyles from "./MainContent.module.css"

export const MainContent: React.FC = () => {
	return (
		<main className={cssStyles.todoApp__taskArea}>
			<p>Задачи отсутствуют</p>
		</main >
	)
}
