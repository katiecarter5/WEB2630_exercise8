<template>
  <div>
    <appheader></appheader>
    <hr>
    <hr>
    <transition name="slide" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
components:{
  appheader: Header
}
}
</script>

<style>
.slide-leave-active{
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards
}
.slide-leave{
  opacity: 1;
  transform: translateX(0);
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-in{
  0%{
    transform: translateX(-30px);
  }
  100%{
    transform: translateX(0)
  }
}

@keyframes slide-out{
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(-30px);
  }
}
</style>

