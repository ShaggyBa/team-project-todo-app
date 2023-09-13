import React from 'react'
import cssStyles from "./MainContent.module.css"

const MainContent: React.FC = () => {
	return (
		<main className={cssStyles.todoApp__taskArea}>
			<p>MainContent</p>
		</main >
	)
}

export default MainContent;