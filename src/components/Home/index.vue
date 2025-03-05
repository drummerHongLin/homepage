<template>
    <section class="home">
      <router-view></router-view>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.home {
    position: relative;
    width: 100%;
    height: 100vh;
    
    padding: 3.5rem 10% 0;
    @media screen and (max-width:1320px) {
      padding: 3.5rem 8% 0;
    }
    @media screen and (max-width:900px) {
      padding: 3.5rem 5% 0;
    }
}

</style>