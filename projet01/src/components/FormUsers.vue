<template >
    <div>
        <form @submit="callAjax($event)" class="form">
            
            <label for="">Recherche d'addresse</label>
            <input list="list" v-model="search" @input="getAddress($event)">
            <datalist id="list">
                <option v-for="(a, k) in searchList " :key="k" >{{ a.properties.label }}</option>
            </datalist>

            <label for="name">Nom</label>
            <input type="text" name="name" v-model="userName" >

            <label for="street_name">Nom de la rue</label>
            <input type="text" name="street_name" v-model="streetName" >

            <label for="city">Ville</label>
            <input type="text" name="city" v-model="city">

            <label for="zip_code">Code Postal</label>
            <input type="text" name="zip_code" v-model="zipCode">

            <input type="submit" value="Ajouter l'utilisateur">
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormUsers',
    data() {
        return {
            userName: "",
            city: "",
            streetName: "",
            zipCode: "",
            search:"",
            searchList:[],
        }
    },
    methods: {
        callAjax(e) {
            e.preventDefault();
            const formData = new FormData(e.target);

            const data = {
                method: "POST",
                body: formData,
            }

            fetch('http://localhost/php_vue/add_user.php', data)
            .then(response => response.json())
            .then(responseData =>  console.log(responseData))
        },
        getAddress(e){
            let value = e.target.value
            if (value.length >= 3) {
                fetch('https://api-adresse.data.gouv.fr/search/?q=' + value)
                .then(response => response.json())
                .then(address => {
                //console.log(address.features);
                this.searchList= [... address.features];

                if (this.searchList.length > 0 ) {
                    const a = this.searchList[0];
                    this.city = a.properties.city;
                    this.streetName = a.properties.housenumber + " " + a.properties.street;
                    this.zipCode = a.properties.postcode;
                    }
                }) 
            }
        }
    }
}
</script>
<style scoped>
    div{
        margin-top: 15px;
    }
    input{
        margin-top: 5px;
        margin-bottom: 10px;
    }
    label, input {
        margin: 0 15;
    }
    form{
        width: 30%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: column;
        margin-right: auto;
        margin-left: auto;
    }
</style>