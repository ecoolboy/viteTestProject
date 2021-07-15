<template>
    <div class="home">
        <HomeAside />
        <div class="content">
            <HomeHeader />
            <router-view class="show"></router-view>
        </div>
    </div>
</template>

<script>
    import {defineComponent} from 'vue';
    import HomeAside from "./HomeAside.vue";
    import HomeHeader from "./HomeHeader.vue";

    export default defineComponent({
        components: { HomeAside, HomeHeader},
    });
</script>

<style scoped>
    .home{
        display: flex;
        flex-direction: row;
        position: relative;
        height: 100vh;
        overflow: hidden;
    }
    .content{
        width: 100%;
        background-color: #F0F2F5;
    }
    .show{
        width: 100%;
        height: 100%;
        position: relative;
        padding: 20px 20px;
        overflow: scroll;
    }
</style>
