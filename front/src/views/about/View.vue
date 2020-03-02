<template>
    <div class="row page">

        <!-- Блок 2 -->
        <div class="col-8 offset-2 py-4 text-white bg-secondary rounded-top border-bottom">
            <span class="page__header">
                Цифровой помощник
            </span>
        </div>

        <div class="col-8 offset-2 py-2 text-white bg-secondary border-bottom">
            <span>Версия: {{version}}</span>
        </div>

        <div class="col-8 offset-2  py-2 text-white bg-secondary border-bottom">
            <span>Разработчик: {{autor}}</span>
        </div>

        <div class="col-8 offset-2 py-2 mb-3 text-white bg-secondary rounded-bottom link">
            <div class="row">
                <div class="col mr-auto">
                    <a class="link" href="#">Сообщить о проблеме</a>
                </div>
                <div class="col text-right px-4 h5 mb-0">
                    <b-icon icon="envelope" variant="warning"></b-icon>
                </div>
            </div>
            
        </div>

        <!-- Блок 2 -->
        <div class="col-8 offset-2 py-2 text-white bg-secondary rounded-top">
            <span>
                Программа создана на основе программного обеспечения с открытым исходным кодом.
                <router-link to="/license" class="link">Условия использования</router-link>
            </span>
        </div>

        <div class="col-8 offset-2 mb-1 py-2 text-white bg-secondary rounded-bottom">
            <p class="mb-0">chd.su</p>
            <span>@Все права защищены. 2020г.</span>
        </div>
        
    </div>
</template>

<script>
import { BIcon } from 'bootstrap-vue'

export default {
    name: "AboutView",
    components: {
        BIcon,
    },
    data(){
        return {
            version: "0.1b",
            autor: "Чакирян Д. <davidchak@yandex.ru>"
        }
    }
}
</script>

<style lang="less" scoped>

</style>