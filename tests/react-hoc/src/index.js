import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const starWarssChars = [
	{name: 'Люк Скайвокер', side: 'light'},
	{name: 'Йода', side: 'light'},
	{name: 'Обиван Кеноби', side: 'light'},
	{name: 'Палпатин', side: 'dark'},
	{name: 'Дарт Вэйдер', side: 'dark'}
]

function App ({list}) {
	return (
		<ul>
			{list.map((char, inx) => {
				return (
					<li key={char.name+inx}>
						<strong
							style={{
								display: 'inline-block',
								width: 140,
								marginRight: 10,
							}}
						>{char.name}</strong> - &nbsp;
						{char.side}
					</li>
				)
			})}
		</ul>
	)
}

const withFilteredProps = (Component) => {
	return function (props) {
		const filteredList = props.list.filter(i => i.side === props.side)
		return (
			<Component
				list={filteredList}
			/>
		)
	}
} 

const FilteredList = withFilteredProps(App)

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={starWarssChars} side={'light'}/>
  </React.StrictMode>,
  document.getElementById('root')
);