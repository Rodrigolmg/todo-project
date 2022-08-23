<template>
    <div @click="isClicked" :style="this.isDone ? doneStyle : {}">
        <slot />
    </div>
</template>

<script>
export default {
    props:['taskText'],
    data(){
        return {
            taskTxt: this.taskText,
            isDone: false,
            doneStyle: {
                'text-decoration': 'line-through',
                'background-color': 'rgb(82, 202, 78)',
                'border-left': '0.5em solid rgb(67, 139, 53)'
            }
        }
    },
    methods:{
        isClicked(){
            this.isDone = !this.isDone
        }
    }

}
</script>

<style scoped>
    div{
        align-content: center;
        background-color: rgb(226, 81, 81);
        border-left: 0.5em solid rgb(194, 63, 63);
        border-radius: 5px;
        padding: 35px 80px;
        font-size: 1.1rem;
        margin-left: 15px;
    }


</style>