<template>
    <div class="tabs border-top">
        <slot/>
    </div>
</template>

<script>
export default {
    name:'tabs-bar'
}
</script>

<style>
.tabs{
    width: 100%;
    height: 49px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
}
</style>
