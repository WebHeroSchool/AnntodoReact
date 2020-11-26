import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';

const todoItem = 'Создать новое приложение';

const App = () => {
	const items = [
		{
			value: 'Создать новое приложение'
		},
		{
			value: 'прописать props-ы'
		},
		{
			value: 'сделать все дела'
		}
	];

    return (
	<div>
		<h1>Важные дела:</h1>
		<InputItem />
		<ItemList items={items} />
		<Footer count={3} />
	</div>);
}

export default App;