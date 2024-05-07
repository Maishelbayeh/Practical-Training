<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Company Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ getAddress(user.address) }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.company.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const users = ref([]);
const getAddress = (address) => {
  return `${address.city}-${address.street}(${address.zipcode})`;
};

onMounted(async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    users.value = response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
});
</script>

<style>
/* Add your custom styles here */
</style>
