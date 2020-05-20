<template>
  <div id="app">
    <main-header></main-header>
    <div v-for="(guest ,index) in guests" :guest="guest" :key="index">
      <ul>
        <li>{{ guest.name }}</li>
        <li>{{ guest.email }}</li>
        <li>{{ guest.checked_in }}</li>
      </ul>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import GuestService from "./services/GuestService.js";
import MainHeader from "./components/layouts/Main-Header";
import MainFooter from "./components/layouts/Main-Footer";
export default {
  name: "app",
  data() {
    return {
      guests: []
    };
  },
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter
  },
  methods: {
    fetchData() {
      GuestService.getGuests().then(guests => (this.guests = guests));
    },
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<style>
</style>