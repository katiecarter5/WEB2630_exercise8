<template>
  <div class="head">
      <ul>
          <router-link to="/" tag="li"><a>Home</a></router-link>
          <router-link to="/about" tag="li"><a>About Me</a></router-link>
          <router-link to="/hobbies" tag="li"><a>My Hobbies</a></router-link>
          <router-link to="/user" tag="li"><a>User Profile</a></router-link>
          
      </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    body {
        font-family:'Raleway', sans-serif;
    }

    h1 {
        padding: 0 5rem;
    }    

    p {
       padding: 0 5rem;
    }

    ul {
        display:inline-block;
        align-content: right;
    }

    ul li {
        display: inline-block;
        margin-right: 1rem;
        padding: 0.5rem;
        background-color: slateblue;
        
    }

    ul li a {
        color: white;
        text-decoration: none;
    }

    

</style>