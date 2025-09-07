import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [fontStyles, setFontStyles] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
		fontSizeOption: defaultArticleState.fontSizeOption,
	});

	return (
		<main
			onClick={() => setIsOpen(false)}
			className={clsx(styles.main)}
			style={
				{
					'--font-family': fontStyles.fontFamilyOption.value,
					'--font-size': fontStyles.fontSizeOption.value,
					'--font-color': fontStyles.fontColor.value,
					'--container-width': fontStyles.contentWidth.value,
					'--bg-color': fontStyles.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				isOpen={isOpen}
				toggleOpen={() => {
					setIsOpen((prevState) => !prevState);
				}}
				fontStyles={fontStyles}
				setFontStyles={setFontStyles}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
