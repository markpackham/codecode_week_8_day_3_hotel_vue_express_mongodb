<template>
  <form v-on:submit="addGuest" method="post">
    <h3>Add a Guest</h3>
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Bob" required v-model="name" />
    <label for="email">Name:</label>
    <input type="text" id="email" placeholder="bob@gmail.com" required v-model="email" />
    <label for="checked in">Checked In Status</label>
    <input type="text" id="checked in" placeholder="y or n" v-model="checked_in" />
    <input type="submit" value="Add Guest" />
  </form>
</template>

<script>
import { eventBus } from "@/main.js";
import GuestService from "../services/GuestService";
export default {
  name: "guest-form",
  data() {
    return {
      name: "",
      email: "",
      checked_in: ""
    };
  },
  methods: {
    addGuest(e) {
      e.preventDefault();
      const guest = {
        name: this.name,
        email: this.email,
        checked_in: this.checked_in
      };
      GuestService.postGuest(guest).then(res => eventBus.$emit("guest-added", res));
    }
  }
};
</script>
<style>
label{
    padding: 1rem;
}
input{
    margin: 0.5rem;
}
</style>