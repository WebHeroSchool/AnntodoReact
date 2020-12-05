import React from 'react';
import styles from './Footer.module.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const Footer = ({ count}) => (<div>
	<div className={styles.counter}>
		Осталось выполнить вот столько дел: { count }
	</div>
	<div className={styles.filter}>
		<ButtonGroup color="secondary" aria-label="outlined secondary button group">
			<Button>Все</Button>
			<Button>Активные</Button>
			<Button>Выполненные</Button>
		</ButtonGroup>
	</div>
	<div>
		<Button variant="outlined" color="secondary">
  			Удалить выполненные дела
		</Button>
	</div>
</div>);

export default Footer;
