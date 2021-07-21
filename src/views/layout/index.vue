<template>
  <div class="home">
    <HomeAside/>
    <div class="content">
      <HomeHeader/>
<!--      <router-view v-slot="{component}">-->
<!--        <transition name="component-fade" mode="out-in">-->
<!--          <component :is="component"></component>-->
<!--        </transition>-->
<!--      </router-view>-->
      <transition name="component-fade" mode="fade-in">
        <router-view class="show">
        </router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import HomeAside from "./HomeAside.vue";
import HomeHeader from "./HomeHeader.vue";

export default defineComponent({
  components: {HomeAside, HomeHeader},
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.content {
  width: 100%;
  height:100%;
  background-color: #F0F2F5;
  position: relative;
  overflow: scroll;
}

.show {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: scroll;
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
