<template>
	<div id="app">
		<h1>Tarefas</h1>
		<TaskText/>
		<br/>
		<br/>
		<TaskList/>
	</div>
</template>

<script>
import TaskText from './components/task/TaskText.vue'
import TaskList from './components/task/TaskList.vue'

export default {
	components: {TaskText, TaskList}	
}
</script>

<style>
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
