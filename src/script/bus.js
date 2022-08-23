import Vue from 'vue'
export default new Vue({
    methods:{
        addTask(task){
            this.$emit('addingTask', task)
        },
        getTask(callback){
            this.$on('addingTask', callback)
        },
        setTaskList(taskList){
            this.$emit('settingTaskList', taskList)
        },
        getTaskList(callback){
            this.$on('settingTaskList', callback)
        },
    }
})