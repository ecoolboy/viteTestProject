<template>
  <div class="home">
    <HomeAside/>
    <div class="content">
      <HomeHeader/>
      <div id="mouse" class="mouseStyle"></div>
      <transition  name="transitionRouter">
        <router-view class="show"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HomeAside from "./HomeAside.vue";
import HomeHeader from "./HomeHeader.vue";

function render(x,y){
  let mouse=document.getElementById('mouse')
  mouse.style.left=`${x-60}px`
  mouse.style.top=`${y-5}px`
}
window.addEventListener('mousemove',(e)=>{
  render(e.x,e.y)
})

export default defineComponent({
  components: {HomeAside, HomeHeader},
});
</script>

<style scoped>
.mouseStyle{
  width: 20px;
  height: 20px;
  background: #42b983;
  position: absolute;
  border-radius: 50%;
  opacity: 50%;
}
  .home {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
  }

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: #F0F2F5;
  overflow-y: hidden;
  position: relative;
}

.show {
  height: 100%;
  overflow-y: scroll;
}
.transitionRouter-enter-active,
.transitionRouter-leave-active {
  transition: all 0.4s;
}

.transitionRouter-enter,
.transitionRouter-leave{
  transform: translate3d(100%, 0, 0);
}

</style>
