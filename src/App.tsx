import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article';
import { ArticleParamsForm } from 'components/article-params-form';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

export const App = () => {
	const [fontStyles, setFontStyles] = useState({
		fontFamilyOption: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
		fontSizeOption: defaultArticleState.fontSizeOption,
	});

	return (
		<main
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
				fontStyles={fontStyles}
				setFontStyles={setFontStyles}
			/>
			<Article />
		</main>
	);
};
