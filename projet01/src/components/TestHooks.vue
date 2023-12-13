<template>
    <div>
        <img :src="img" height="500" :width="size" alt="Un chat">
    </div>
</template>
<script>
export default {
    name: "TestHooks",
    data() {
        return {
            img:""
        }
    },
    props : {
        size: Number
    },
    methods: {
        getCat(){
            fetch('https://api.thecatapi.com/v1/images/search')
            .then(response => response.json())
            .then(cat => this.img = cat[0].url)
        }   
    },
    mounted() {
        this.getCat();   
    }
}
</script>
<style>
    
</style>