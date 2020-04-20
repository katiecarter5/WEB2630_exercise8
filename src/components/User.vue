<template>
  <div>
    <h1>User Profile</h1>
      <router-link 
      tag="button"
      :to="{name: 'UserDetails', query:{id:'0001', dob:'01/01/2000'}}" class="userbtn" 
      >See User Details</router-link>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
</style>