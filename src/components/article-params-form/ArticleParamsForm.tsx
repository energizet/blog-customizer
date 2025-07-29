import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { OnClick } from 'src/ui/arrow-button/ArrowButton';

interface ArticleParamsFormProps {
	isOpen: boolean;
	toggleOpen: OnClick;
}

export const ArticleParamsForm = ({
	isOpen,
	toggleOpen,
}: ArticleParamsFormProps) => {
	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={toggleOpen} />
			<aside
				onClick={(e) => e.stopPropagation()}
				className={clsx(styles.container, { [styles.container_open]: isOpen })}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
