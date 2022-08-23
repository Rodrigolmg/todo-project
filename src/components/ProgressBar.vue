<template>
    <div id="outter-div">
        <span>{{ this.percent }}%</span>
        <div id="inner-div">

        </div>
    </div>
</template>

<script>
import bus from "@/script/bus";

export default {
    
    data(){
        return {
            // taskList: [],
            percent: 0
        }
    },
    methods:{
        setTaskPercent(list){

            let taskListLength = list.length // 100%
            console.log(taskListLength)
            let doneListLength = list.filter(taskFiltered => !taskFiltered.taskDone).length
            console.log(doneListLength)
            this.percent = (taskListLength * 100) / doneListLength
            return  isNaN(this.percent) ? 0 : this.percent
            
        }
    },
    create(){
        bus.getTaskDoneList(list => this.setTaskPercent(list))
    }
}
</script>

<style scoped>
    #outter-div {
        display: flex;
        width: 60%;
        border: 1px solid #fff;
        height: 1.3em;
        border-radius: 5px;
        justify-content: center;
        vertical-align: middle;
    }
</style>