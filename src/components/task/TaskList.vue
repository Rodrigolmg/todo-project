<template>
    <div class="task-list">
        <template v-if="tasks.length">
            <TaskCard v-for="(taskObj, i) in tasks" :key="taskObj.taskDescript" 
                      :taskObj="taskObj"
                      @deleteTask="removingTask(i)" @taskStateChanged="changeTaskState(i)"/>
        </template>
        <p v-else class="no-task">Your life is running good!</p>
    </div>
</template>

<script>
import TaskCard from './TaskCard.vue'

export default {
    props:{
        tasks:{ type: Array, required: false}
    },
    components: {TaskCard},
    methods: {
        removingTask(i){
            this.$emit('deleteTask', i)
        },
        changeTaskState(i){
            this.$emit('taskStateChanged', i)
        }
    }
    // data(){
    //     return {
    //         tasksReceived: []
    //     }
    // },
    
}
</script>

<style scoped>
    div{
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
    }

    .no-task {
        color: #AAA;
        font-size: 1.1rem;
    }
</style>