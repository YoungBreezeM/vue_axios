<template>
    <div id="Admin">
        <p>欢迎进入后台</p>
        <a v-on:click="logout">退出</a>
    </div>
</template>

<script>
    import * as types from "../store/types";
    export default {
        name: "Admin",
        methods:{
            logout:function () {
                this.$store.commit(types.LOGOUT);
                this.$router.push({
                    path: '/',//路由重定向
                });
                alert("退出成功")
            }
        }
    }
</script>

<style scoped>

</style>