<template>
   <v-simple-table v-if="isVisible">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            NAME
          </th>
        </tr>
      </thead>
      <tbody id="diplaylist">
        <!-- <tr
          v-for="item in desserts"
          :key="item.name"
        >
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr> -->
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import Communivation from '../services/Communivation' 

  export default {
    // drawer: 'Entry'
    data(){
      return {
        isVisible: false
      }
    },
    methods:{
      async getAll(){
        const response = await Communivation.getAll()
        this.isVisible = true
        console.log(response.data)
      }
    }
  }
</script>
