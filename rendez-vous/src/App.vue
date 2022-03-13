<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">JMax</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/rendezvous" class="nav-link">RendezVous</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/reservation" class="nav-link">Reservation</router-link>
        </li>
      </div>
    </nav>
   <div class="container">
      <div class="long">
         <router-view />
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

