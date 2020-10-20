// имеется массив Lists в котором лежат объекты - списки
// каждый список имеет свой id и массив с задачами
//задача:
//найти нужную задачу и заменить состояние на completed: true при этом задача не должна изменить своё местоположение в массиве
type Task = {
	id: number;
	completed: boolean
}

type ListType = {
	id: number
	tasks: Array<Task>
}

const Lists: ListType[] = [
	//begin list with tasks
	{
		id: 1,
		tasks: [
			{
				id: 1,
				completed: false
			},
			{
				id: 2,
				completed: false
			},
			{
				id: 3,
				completed: false
			}
		]
	}
	//end list with tasks
	// ..... other lists with tasks
]

console.log('Lists before map', Lists)

//BEGIN check "Readonly", I mutate task for checking "Readonly"
type GetNewList = (lists: Readonly<ListType[]>, listId: number, taskId: number) => ListType[]
const getNewList: GetNewList = (
	lists,
) => {
	return lists.map((list: Readonly<ListType>) => {
		list.find(list)
		return list
	})
}

const NewLists = getNewList(Lists, 1, 1);
//END

//Result:
// const NewLists = Lists.map(list => {
// 	if(list.id === 1) {
// 		const newTasks = list.tasks.map(task => {
// 			if(task.id === 1) {
// 				return {...task, completed: true}
// 			}
// 			return task
// 		})
// 		return {...list, tasks: [...newTasks]}
// 	}
// 	return list
// })

console.log('Lists after map', Lists)

console.log('NewTasks', NewLists)