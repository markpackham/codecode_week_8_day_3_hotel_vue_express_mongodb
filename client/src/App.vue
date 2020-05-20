<template>
  <div id="app">
    <main-header></main-header>
    <guest-form></guest-form>
    <ul v-for="(guest ,index) in guests" :guest="guest" :key="index">
      <li>{{ guest.name }}</li>
      <li>{{ guest.email }}</li>
      <li>{{ guest.checked_in }}</li>
      <button v-on:click="deleteGuest">Delete booking</button>
    </ul>
    <main-footer></main-footer>
  </div>
</template>

<script>
import { eventBus } from "./main.js";
import GuestService from "./services/GuestService.js";
import MainHeader from "./components/layouts/Main-Header";
import MainFooter from "./components/layouts/Main-Footer";
import GuestForm from "./components/GuestForm";
export default {
  name: "app",
  data() {
    return {
      guests: [],
      guest: {}
    };
  },
  components: {
    "main-header": MainHeader,
    "main-footer": MainFooter,
    "guest-form": GuestForm
  },
  methods: {
    fetchData() {
      GuestService.getGuests().then(guests => (this.guests = guests));
    },
    deleteGuest() {
      console.log(this.guest);
      GuestService.deleteGuest(this.guest._id).then(() =>
        eventBus.$emit("guest-deleted", this.guest._id)
      );
    }
  },
  mounted() {
    this.fetchData();

    // eventBus.$on("guest-deleted", id => {
    //   GuestService.deleteGuest(id);
    //   const index = this.guests.findIndex(guest => guest._id === id);
    //   this.guests.splice(index, 1);
    // });
    eventBus.$on("guest-deleted", id => {
      let index = this.guests.findIndex(guest => guest._id === id);
      this.guests.splice(index, 1);
    });
  }
};
</script>

<style>
</style>