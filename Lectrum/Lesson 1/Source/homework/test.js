var Lists = [
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
];
console.log('Lists before map', Lists);
var getNewList = function (lists) {
    return lists.map(function (list) {
        list.find(list);
        return list;
    });
};
var NewLists = getNewList(Lists, 1, 1);
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
console.log('Lists after map', Lists);
console.log('NewTasks', NewLists);
