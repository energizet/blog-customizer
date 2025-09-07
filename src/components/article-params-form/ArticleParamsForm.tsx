import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { OnClick } from 'src/ui/arrow-button/ArrowButton';
import { Select } from 'src/ui/select';
import { useEffect, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Text } from 'src/ui/text';

interface ArticleParamsFormProps {
	isOpen: boolean;
	toggleOpen: OnClick;
	fontStyles: ArticleStateType;
	setFontStyles: (styles: ArticleStateType) => void;
}

export const ArticleParamsForm = ({
	isOpen,
	toggleOpen,
	fontStyles,
	setFontStyles,
}: ArticleParamsFormProps) => {
	const [fontFamily, setFontFamily] = useState(fontStyles.fontFamilyOption);
	const [fontSize, setFontSize] = useState(fontStyles.fontSizeOption);
	const [fontColor, setFontColor] = useState(fontStyles.fontColor);
	const [backgroundColor, setBackgroundColor] = useState(
		fontStyles.backgroundColor
	);
	const [contentWidth, setContentWidth] = useState(fontStyles.contentWidth);
	const [isReset, setIsReset] = useState(false);

	useEffect(() => {
		apply();
		setIsReset(false);
	}, [isReset]);

	const reset = () => {
		setFontFamily(defaultArticleState.fontFamilyOption);
		setFontSize(defaultArticleState.fontSizeOption);
		setFontColor(defaultArticleState.fontColor);
		setBackgroundColor(defaultArticleState.backgroundColor);
		setContentWidth(defaultArticleState.contentWidth);
		setIsReset(true);
	};

	const apply = () => {
		setFontStyles({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		} as ArticleStateType);
	};

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleOpen} />
			<aside
				onClick={(e) => e.stopPropagation()}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						apply();
					}}>
					<Text size={22} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						selected={fontFamily}
						onChange={setFontFamily}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						selected={fontSize}
						name='radio'
						onChange={setFontSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={fontColor}
						onChange={setFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={backgroundColor}
						onChange={setBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={contentWidth}
						onChange={setContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={reset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
