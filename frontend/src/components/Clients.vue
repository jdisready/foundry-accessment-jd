<template>
  <v-sheet>
    <v-toolbar dense>
      

      <v-toolbar-title @click="toggle"> Clients </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="showField">
        
        Create
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn @click="updateItem">
        
        Update
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn >
        
        Delete
      </v-btn>
    </v-toolbar>

    <v-form v-model="valid" v-if="isVisibleC">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        
      </v-container>
      <v-btn @click="create" v-if="isVisibleSBtn">submit</v-btn>
      <v-btn @click="update" v-if="isVisibleUBtn">update</v-btn>
    </v-form>

    <v-simple-table v-if="isVisible">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">NAME</th>
          </tr>
        </thead>
        <tbody id="diplaylist">
          <tr
            v-for="item in names"
            :key="item.id"
            :class="{ selectedRow: item == selectedItem }"
            @click="selected(item)"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-sheet>
</template>
<script>
import Communivation from "../services/Communivation";
export default {
  name: "Clients",
  data: () => {
    return {
      names: [],
      isVisible: true,
      isVisibleC: false,
      isVisibleSBtn:true,
      isVisibleUBtn:false,
      valid: false,
      firstname: "",
      updateName:"",
      selectedItem: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => v.length <= 10 || "Name must be less than 10 characters",
      ],
      
    };
  },
  mounted() {
    Communivation.getAll().then((response) => {
      this.names = response.data;
    });
  },
  methods: {
    
    selected(item) {
      this.selectedItem = item;
      console.log(item.name);
    },
    updateItem() {
        if(this.selectedItem == undefined || this.selectedItem == null || this.selectedItem == ""){
            alert('Please select an item to update')
            return
        }
        this.showField()
        this.isVisibleSBtn = false
        this.isVisibleUBtn = true
        //
    },
    async deleteItem(){
        const isSeleted = this.selectedItem == ""
        if(isSeleted){

            alert('Please select one item to delete')
            return 
        }
        var deleteComfirm = confirm("Are you sure?")
        if(deleteComfirm){

            const response = await Communivation.delete({
                id: this.selectedItem.id
                
            }).catch((err)=>
            {
                console.log(err)
            })
            console.log(response.data);
            // Communivation.delete({
            //     id: this.selectedItem.id
                
            // }).then((value)=>{
            //     //const response  =  value
            //     console.log(value)
            // }).catch()
            //console.log(response.data)
            //alert(response.data)
            //console.log(response.data)
        }
    },
    toggle() {
      this.isVisible = !this.isVisible;
      this.isVisibleC = !this.isVisibleC;
    },
    showField() {
      this.isVisible = false;
      this.isVisibleC = true;

    },
    async create() {
      const response = await Communivation.create({
        name: this.firstname,
      });
      console.log(response.data);
    },
    async update(){
        const response = await Communivation.update({
            id: this.selectedItem.id,
            name: this.firstname,
      });
      console.log(response.data);
    }
  },
};
</script>
<style scoped>
.selectedRow {
  background-color: brown;
  font-weight: bold;
}
</style>