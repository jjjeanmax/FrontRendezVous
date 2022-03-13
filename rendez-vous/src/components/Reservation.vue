<template>
    <div class="submit-form"> 
        <div class="loader" v-if="!submitted">
            <div class="form-group">
                <label for="phone_number">Phone Number</label>
                <input
                type="tel"
                placeholder="+70000000000"
                class="form-control"
                id="phone_number"
                required
                v-model="client.phone_number"
                name="phone_number"
                />
            </div>
            <div class="form-group">
                <label for="email">Email Address</label>
                <input
                type="email"
                placeholder="example@mail.com"
                class="form-control"
                id="email"
                required
                v-model="client.email"
                name="email"
                />
            </div>
            <div class="form-group">
                <label for="last_name">Last Name</label>
                <input
                type="text"
                class="form-control"
                id="last_name"
                required
                v-model="client.last_name"
                name="last_name"
                />
            </div>
            <div class="form-group">
                <label for="first_name">First Name</label>
                <input
                type="text"
                class="form-control"
                id="first_name"
                required
                v-model="client.first_name"
                name="first_name"
                />
            </div>
            <div class="form-group">
                <label for="created_at">Rendez Vous</label>
                <input
                type="datetime-local"
                class="form-control"
                id="created_at"
                required
                v-model="client.created_at"
                name="created_at"
                />
            </div>
            <button @click="CreateReservation" class="btn btn-success">Submit</button>
            <p>{{ messages }}</p>
        </div>
        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newReservation">Create</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientDataService from "@/services/ClientDataService";
import Client from "@/types/Client";
import ResponseData from "@/types/ResponseData";
export default defineComponent({
  name: "reservation",
  data() {
    return {
      client: {
        id: null,
        phone_number: "",
        email: "",
        last_name: "",
        first_name: "",
        created_at: new Date(),
        published: false,
      } as Client,
      submitted: false,
      messages: "",
    };
  },
  methods: {
    CreateReservation() {
      let data = {
        phone_number: this.client.phone_number,
        email: this.client.email,
        last_name: this.client.last_name,
        first_name: this.client.first_name,
        created_at: this.client.created_at,
      };
      ClientDataService.create(data)
        .then((response: ResponseData) => {
          this.client.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
          this.messages = "The status was updated successfully!";

        })
        .catch((e: Error) => {
          alert("form not submitted");
          console.log(e);
        });
    },
    newReservation() {
      this.submitted = false;
      this.client = {} as Client;
    },
  },
});
</script>
