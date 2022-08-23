import Vue from 'vue'
export default new Vue({

    data(){
        return {
            taskList: [],
        }
    },
    methods:{
        addTask(task){
            this.taskList.push(task)
            this.$emit('addingTask', this.taskList)
        },
        getTask(callback){
            this.$on('addingTask', callback)
        },
        addTaskDone(task){
            if(this.taskList.length > 0){
                for(const taskO of this.taskList){
                    if(taskO.taskDescript === task.taskDescript){
                        taskO.taskDone = !taskO.taskDone
                        break
                    }
                }
            }
            this.$emit('editingDoneList', this.taskList)
        },
        getTaskDoneList(callback){
            this.$on('editingDoneList', callback)
        },
    }
})