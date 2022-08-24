/* USED ON THE FIRST VERSION */
import Vue from 'vue'
export default new Vue({

    data(){
        return {
            taskList: [],
        }
    },
    methods:{
        // addTaskDone(task){
        //     if(this.taskList.length > 0){
        //         for(const taskO of this.taskList){
        //             if(taskO.taskDescript === task.taskDescript){
        //                 taskO['taskDone'] = !taskO['taskDone']
        //                 break
        //             }
        //         }
        //     }
        //     this.$emit('editingDoneList', this.taskList)
        // },
        // getTaskDoneList(callback){
        //     this.$on('editingDoneList', callback)
        // },
        deleteTask(index){
            this.$emit('deleteTask', index)
        },
        doingTask(task){
            this.$emit(task.taskDone ? 'taskCompleted' : 'taskPending', task)
        },
        removingFromList(callback){
            this.$on('deleteTask', callback)
        }
    }
})