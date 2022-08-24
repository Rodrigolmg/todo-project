<template>
	<div id="app">
		<ProgressBar :percentDone="percentDone"/>
		<h1 id="titulo-tarefas">Tasks To Do</h1>
		<TaskText @taskAdded="addTask"/>
		<TaskList :tasks="this.tasks" @deleteTask="removeTask" @taskStateChanged="changeTaskState"/>
	</div>
</template>

<script>
import ProgressBar from './components/ProgressBar.vue'
import TaskText from './components/task/TaskText.vue'
import TaskList from './components/task/TaskList.vue'

export default {
	components: {TaskText, TaskList, ProgressBar},
	data(){
		return {
			tasks: []
		}
	},
	watch:{
		tasks:{
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	computed: {
        percentDone(){
            let taskListLength = this.tasks.length
            let doneListLength = this.tasks.filter(taskFiltered => taskFiltered['taskDone']).length
            let percentValue = (doneListLength / taskListLength) * 100  
            return Math.round(percentValue) || 0
        }
	},
	methods:{
		addTask(task){
			const isSameTask = t => t.taskDescript === task.taskDescript
			const notSameTaskLength = this.tasks.filter(isSameTask).length == 0

			notSameTaskLength && this.tasks.push(task)

			// if(this.taskList.length > 0){
            //     for(const taskO of this.tasks){
            //         if(taskO.taskDescript === task.taskDescript){
            //             taskO.taskDone = !taskO.taskDone
            //             break
            //         }
            //     }
            // }
		},
		removeTask(i){
			this.tasks.splice(i, 1)
		},
		changeTaskState(i){
			this.tasks[i]['taskDone'] = !this.tasks[i]['taskDone']
		}
	},
	created(){
		const json = localStorage.getItem('tasks')
		const taskArray = JSON.parse(json)
		this.tasks = Array.isArray(taskArray) ? taskArray : []
	}
}
</script>

<style>

	#titulo-tarefas{
		margin-top: 20px;
	}

	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
