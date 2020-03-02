<template>
    <div class="row">
        <!-- TODO: добавить вывод информации о системе -->
        <div class="col-12">
            <p>Информация о системе:</p>
            <p>Pywebview: {{ status }}</p>
            <p>Msg: {{ message }}</p>
            <p>OS info:</p>
            <p>{{ osInfo }}</p>
        </div>
        <div class="col-12">
            <div @click="runTest" class="btn btn-outline-success">Test</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
    
    data(){
        return {
            status: 'not ready',
            message: '',
            osInfo: Object()
        }
    },

    methods: {

        runTest(){
            window.pywebview ? this.message = 'success' : this.message = 'error';
            window.pywebview.api.test_py().then(resp => this.status = resp.message);
            window.pywebview.api.get_os_info().then(resp => this.osInfo = resp.data);
        },

        computed:{
            
        }


    },

    created(){

    }
}
</script>

<style lang="less" scoped>

</style>