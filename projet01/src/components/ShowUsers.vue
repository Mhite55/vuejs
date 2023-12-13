<template>
    <div v-for="(u, key) in users" :key="key">
        <h1>{{ u.name }}</h1>
        <h3>{{ u.street_name }}</h3>
        <h3>{{ u.city }}</h3>
        <h3>{{ u.zip_code }}</h3>
    </div>
</template>
<script>
export default {
    name: 'ShowUsers',
    data() {
        return{
            users: null,
        }
    },
    methods:{
        getUsers(){
            fetch('http://localhost/php_vue/user.php')
            .then(response => response.json())
            .then(data => {
                console.log(data.users);
                this.users = data.users;

            })
        }
    },
    mounted() {
        this.getUsers()
    },
}
</script>
<style>
    
</style>