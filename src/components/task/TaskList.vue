<template>
    <div class="task-list">
        <TaskCard v-for="taskObj in tasksReceived" :key="taskObj.taskDescript" :taskObj="taskObj">
            <span>{{ taskObj.taskDescript }}</span>
        </TaskCard>
    </div>
</template>

<script>
import bus from "@/script/bus";
import TaskCard from './TaskCard.vue'

export default {
    props:{
        taskReceived:{ type: Array, required: false}
    },
    components: {TaskCard},
    data(){
        return {
            tasksReceived: []
        }
    },
    created(){
        bus.getTask(taskR => this.tasksReceived = taskR)
    }
    
}
</script>

<style scoped>
    div{
        align-content: center;
        display: flex;
    }
</style>