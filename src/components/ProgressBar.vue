<template>
    <div class="outter-div">
        <span class="progress-value">{{ percentDone }}%</span>
        <div class="progress-div" :style="{width: percentDone + '%'}"></div>
    </div>
</template>

<script>

export default {
    props:{
        percentDone: {type: Number, default: 0}
    },
}
</script>

<style scoped>
    .outter-div {
        position: relative;
        width: 60%;
        border: 1px solid #fff;
        color: #fff;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 1.3em;
    }

    .progress-div{
        background-color: rgb(42, 189, 42);
        position: absolute;
        border-radius: 5px;
        height: 100%;
        align-self: flex-start;
    }

    .progress-value {
        z-index: 1;
    }
</style>