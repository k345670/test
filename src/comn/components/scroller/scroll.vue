<template>
    <div class="scroll-wrap" ref="wrap" :style="wrapStyle">
        <div class="scroll-content" ref="content">
            <div class="pull-up" v-if="forward"></div>
            <slot/>
            <div class="pull-down" v-if="next"></div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"scroller",
    props:{
        width:Number,
        height:Number,
        top:Number,
        bottom:Number,
        next:Function,
        forward:Function
    },
    computed:{
        wrapStyle(){
            if(this.top&&this.bottom){
                return{
                    position:'absolute',
                    top:this.top + 'px',
                    bottom:this.bottom + 'px',
                }
            }else{
                return{
                    width:this.width+'px',
                    height:this.height+'px'
                }
            }
        }
    },
    methods:{
        scrollTo(y,time){
            this.scroll.scrollTo(0,y,time);
        }
    },
    mounted(){
       this.scroll = new BScroll(this.$refs.wrap,{
            click:true,
            mouseWheel:false,
            startY:this.forward ? -50 : 0,
            tap:true,
            probeType:3
        });
        this.scroll.on('beforeScrollStart',() => {
            this.scroll.refresh();
        })
        if(this.forward){
            this.scroll.on('scrollEnd',() => {
                let y = this.scroll.y;
                if(y >= -15){
                    this.forward();
                }
                if(y>-50){
                    this.scrollTo(-50,200)
                }
            })
        }
        if(this.next){
            this.scroll.on('scrollEnd',() => {
                let y = this.scroll.y;
                let maxY = this.scroll.maxScrollY;
                console.log(y,maxY);
                if(y < maxY +50){
                   this.scrollTo(maxY+50,200)
                }
                if(y <= maxY){
                    this.next()
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-wrap{
    overflow: hidden;
    width: 100%;
    left: 0;
    .pull-up{
        width: 100%;
        height: 50px;
    }
    .pull-down{
        width: 100%;
        height: 50px;
    }  
}
</style>

