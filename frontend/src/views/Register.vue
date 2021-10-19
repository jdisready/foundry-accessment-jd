<template>

<div>
  <h1>Register</h1>
<br>
  <input type="email" name="email" placeholder="email" v-model="email"/>
  <br>
  <input type="password" name="password" placeholder="pwd" v-model="password"/>
<br>
<v-btn 
class="cyan"
@click="register">Register</v-btn>
<br>
<button 
@click="getAll">getall</button>
<br>

<button 
@click="create">Create</button>
</div>
  


  
</template>

<script>
  // import HelloWorld from '../components/HelloWorld'
import Communivation from '../services/Communivation'
  export default {
    data(){
      return {
        email: 'sdf@gm.com',
        password: '2222'
      }
    },
    methods:{
      async register(){
      const response = await  Communivation.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      },

      async getAll(){
        const response = await Communivation.getAll()
        console.log(response.data)
      },
      async get(){
        const response = await Communivation.get({
          id: this.password
        })
        console.log(response.data)
      },
      async create(){
        const response = await Communivation.create({
          email: this.email
        })
        console.log(response.data)
      }
    }

    
  }

</script>
