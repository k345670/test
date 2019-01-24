<template>
    <router-link class="tab" :to="info.path">
        <i class="icon" :class=info.icon></i>
        <span>{{info.title}}</span>
    </router-link>
</template>

<script>
export default {
    name:'tab-item',
    props:['info'],
}
</script>

<style lang="scss" scoped>
.tab{
    flex: 1;
    text-align: center;
    div{
        display: block;
        width: 26px;
        height: 30px;
        overflow: hidden;
        margin: 0 auto;
        padding-top: 3px;
        margin-bottom: 3px;
        img{
            width: 100%;
        }

    }
    span{
        display: block;
        font-size: 12px;
    }
    .icon{
        font-size: 26px;
        margin-top: 5px;
        color:darkgrey;
    }
}
.tab.router-link-active{
    color:crimson;
     font-weight: 600;
    i{
        color:crimson;
    }
}
</style>
