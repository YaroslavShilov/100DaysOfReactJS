export default function(state, action) {
	//по правилам редюсер в себя принимает стейт и экшин
	//экшин это объект который обязательно имеет type
	//по переданому типу определяем какую логику нам нужно выполнить
	switch (action.type) {
		case 'addTodo':
			return [ //возвращаем новый стейт
				...state,
				{
					id: Date.now(),
					title: action.payload,
					completed: false,
				}
			]
		case 'removeTodo':
			return state.filter(i => i.id !== action.payload)
		
		case 'toggleTodo':
			return state.map(i => {
				if(i.id === action.payload) {
					i.completed = !i.completed
				}
				return i;
			})
		default: 
			return state
	}
}