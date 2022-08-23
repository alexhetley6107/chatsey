import React from 'react';
import s from './Header.module.scss';
import logo from './../../assets/icon-face.svg';

type Props = {};

export default function Header({}: Props) {
	return (
		<header>
			<img src={logo} alt='' />
			<p className={s.title}>Chatsey</p>
		</header>
	);
}
