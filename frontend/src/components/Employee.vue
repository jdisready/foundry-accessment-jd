<template>
    <v-simple-table >
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
export default {
    name: 'Employee',

}
</script>