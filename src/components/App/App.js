import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
	state = {
		items: [
				{
					value: 'Создать новое приложение',
					isDone: false,
					id: 1
				},
				{
					value: 'прописать props-ы',
					isDone: false,
					id: 2
				},
				{
					value: 'сделать все дела',
					isDone: false,
					id: 3
				}
		]
	};
	
	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;
		});

		this.setState({ items: newItemList});
	};

	onClickDelete = id => {
		const deleteItem = this.state.items.filter(item => item.id !== id);
		this.setState({ items: deleteItem});
	};

	render() {
		return (
			<div className={styles.wrap}>
				<h1 className={styles.title}>Важные дела:</h1>
				<InputItem />
				<ItemList 
					items={this.state.items} 
					onClickDone={this.onClickDone}
					onClickDelete={this.onClickDelete} 
				/>
				<Footer count={3} />
			</div>);
	}
}

export default App;