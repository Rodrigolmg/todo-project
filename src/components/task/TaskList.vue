<template>
    <div class="task-list">
        <TaskCard v-for="task in tasksReceived" :key="task">
            <span>{{ task }}</span>
        </TaskCard>
    </div>
</template>

<script>
import bus from "@/script/bus";
import TaskCard from './TaskCard.vue'

export default {
    components: {TaskCard},
    data(){
        return {
            tasksReceived: []
        }
    },
    created(){
        bus.getTask(task => this.tasksReceived.push(task))
        bus.setTaskList(this.tasksReceived)
    }
    
}
</script>

<style scoped>
    div{
        align-content: center;
        display: flex;
    }
</style>