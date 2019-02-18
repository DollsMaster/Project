<template>
    <div>
        <input v-model="name" type="text" placeholder="name">
        <input v-model="age" type="text" placeholder="age">
        <input v-model="love" type="text" placeholder="love">
        <input v-model="job" type="text" placeholder="job">
        <input v-model="birthday" type="text" placeholder="birthday">
        <input v-model="address" type="text" placeholder="address">

        <button @click="Submit">click</button>
        <!-- <ul class="table">
            <li v-for="(item, index) in PersonList" :key="index">
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
                <span>{{item.birthday}}</span>
                <span>{{item.address}}</span>
            </li>
        </ul> -->
    </div>
</template>
<script>
import axios from '../utils/request.js';

    export default {
        name: 'HelloWorld',
        data () {
            return {
                name: '风见幽香',
                age: 18,
                love: '向日葵',
                birthday: '',
                job: '',
                address: '太阳田',

                PersonList: []
            }
        },
        mounted (){
            this.Init();
        },
        methods: {
            Init(){
                axios.get('/person').then((val)=>{
                    console.log(val.data);
                    this.PersonList = val.data;
                    
                }).catch(()=>{
                    console.log('error');
                });
            },
            Submit(){
                axios.post('/person',{
                    name: this.name,
                    age: this.age,
                    love: this.love,
                    job: '',
                    birthday: this.birthday,
                    address: this.address
                }).then((val)=>{
                    console.log(val);
                    
                })
            }
        }
    }

</script>
<style scoped="">

</style>
