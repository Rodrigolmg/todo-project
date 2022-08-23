<template >
    <div>
        <input type="text" v-model="taskText" placeholder="Add a task" 
            v-on:keyup.enter="addingTask(taskText)">
        <button @click="addingTask(taskText)">+</button>
    </div>
</template>

<script>
import bus from "@/script/bus";

export default {
    data(){
        return {
            taskText: ''
        }
    },
    methods:{
        addingTask(task){
            bus.addTask(task)
            this.taskText = ''
        }
    }
}
</script>


<style scoped>
    button{
        background-color: rgb(77, 162, 241);
        color: #fff;
        border-radius: 0px 3px 3px 0px;
        border: 0.1em solid #fff;
        border-left: none;
        height: 1.91em;
    }

    button:hover{
        background-color: rgb(63, 141, 214);
        color: #fff;
    }

    input{
        background: rgba(255, 255, 255, 0.2);
        border: 0.1em solid #fff;
        border-radius: 3px 0px 0px 3px;
        width: 20em;
        color: #fff;
        height: 1.55em;
    }

    ::placeholder{
        color:#fff;
    }

    input:focus{
        outline: none;
    }

</style>