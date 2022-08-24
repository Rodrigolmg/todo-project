<template>
    <div @click="doingTask" :class="stateClass">
        <span class="close" @click.stop="deleteTask">x</span>
        <span>{{ taskObj.taskDescript }}</span>
    </div>
</template>

<script>
//@click="doingTask"

export default {
    props:{ 
        taskObj: {
            type: Object
        }
    },
    computed:{
        stateClass(){
            return {
                pending: !this.taskObj['taskDone'],
                done: this.taskObj['taskDone'],
            }
        }
    },
    methods:{
        doingTask(){
            this.$emit('taskStateChanged', this.taskObj)
        },
        deleteTask(){
            this.$emit('deleteTask', this.taskObj)
        }
    }
}
</script>

<style scoped>
    div {
        position: relative;
        box-sizing: border-box;
        justify-content: center;
        vertical-align: middle;
        width: 190px;
        height: 100px;
        padding: 10px;
        border-radius: 8px;
        font-size: 1.5rem;
        font-weight: 300;
        cursor: pointer;
        user-select: none;
        align-items: center;
        display: flex;
        margin-left: 15px;
    }

    .pending{
        background-color: rgb(226, 81, 81);
        border-left: 0.3em solid rgb(194, 63, 63);
    }

    .pending .close {
        background-color: #B73229;
    }

    .done {
        color: #DDD;
        text-decoration: line-through;
        background-color: rgb(82, 202, 78);
        border-left: 0.3em solid rgb(67, 139, 53);
    }

    .done .close {
        background-color: #0A8F08;
    }

    .close {
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 0.9rem;
        font-weight: 600;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        display: flex;
        justify-content: center;
    }

</style>