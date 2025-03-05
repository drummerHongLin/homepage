<template>
    <div class="footer">
        <div class="beian">蜀ICP备2023013036  邮箱:honghouse@yeah.net</div>
        <div class="thanks">模板来源：叫我凤凰Blanco@bilibili</div>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0.5rem 10%;
    @media screen and (max-width:1320px) {
        padding: 0.5rem 8%;
    }
    @media screen and (max-width:900px) {
        padding: 0.5rem 5%;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    font-size: 0.6rem;
    color: #b7b2a9;
    //background-color: #1f242d;
}
</style>