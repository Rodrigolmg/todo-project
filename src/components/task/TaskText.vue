<template >
    <div>
        <input type="text" v-model="taskText" placeholder="Add a task" 
            @keydown.enter="add" class="form-element">
        <button @click="add" class="form-element">+</button>
    </div>
</template>

<script>

export default {
    data(){
        return {
            taskText: ''
        }
    },
    methods:{
        add(){
            this.$emit('taskAdded', {
                taskDescript: this.taskText,
                taskDone: false
            })
            this.taskText = ''
        }
    }
}
</script>


<style scoped>

    .form-element{
        outline: none;
        font-size: 1.1rem;
        border: 1px solid #fff;
        padding: 5px 10px 8px;
        color: #fff;

    }

    input.form-element {
        width: 450px;
        background: #fff2;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    button.form-element {
        border-left: none;
        background-color: #2196F3;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    div{
        margin-top: 30px;
        margin-bottom: 20px;
    }

    /* button{
        background-color: rgb(77, 162, 241);
        color: #fff;
        border-radius: 0px 3px 3px 0px;
        border: 0.1em solid #fff;
        border-left: none;
        height: 1.91em;
    } */

    button:hover{
        background-color: rgb(63, 141, 214);
        color: #fff;
    }

    /* input{
        background: rgba(255, 255, 255, 0.2);
        border: 0.1em solid #fff;
        border-radius: 3px 0px 0px 3px;
        width: 20em;
        color: #fff;
        height: 1.57em;
    } */

    ::placeholder{
        color:#fff;
    }

    input:focus{
        outline: none;
    }

</style>