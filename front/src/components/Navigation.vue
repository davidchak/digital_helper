<template>
    <div class="row">
        <ul class="nav w-100 mb-4">
            <li class="nav-item">
                <router-link to="/" class="nav-link text-success">Главная</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/config" class="nav-link">Настройки</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/about" class="nav-link">Справка</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Navigation"
}
</script>

<style lang="less" scoped>
    .nav{
        cursor: pointer;
        box-shadow: 0 5px 10px rgba(0,0,0,0.25);
        font-size: 16px;
    }
</style>