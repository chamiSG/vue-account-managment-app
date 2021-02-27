<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="font-weight-semibold">Account List</h4>
          </div>
          <div class="card-body">
            <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
            <div class="row">
              <div class="col-md">
                <button type="button" class="btn btn-outline-primary btn-lg btn-block">Add New Account</button>
              </div>
            </div>
            <div class="row justify-content-left">
              <div class="col-md-12">
                <div class="card mb-3" v-for="record in records" :key="record.id">
                  <div class="card-header">
                    <p class="font-weight-semibold font-20">Anatoliy Kondratenko</p>
                  </div>
                  <div class="card-body">
                    <div class="account-info pb-3">
                      <h5 class="font-weight-semibold text-primary">Account Info</h5>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">TeamView : <span class="mb-n1 font-weight-semibold">{{record.tv_info}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.tv_pwd}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Anydesk : <span class="mb-n1 font-weight-semibold">{{record.any_info}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.any_pwd}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">VPS/Computer: <span class="mb-n1 font-weight-semibold">{{record.vps_info}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.vps_pwd}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Upwork : <span class="mb-n1 font-weight-semibold">{{record.upwork_info}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.upwork_pwd}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Freelancer : <span class="mb-n1 font-weight-semibold">{{record.freelan_info}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.freelan_pwd}}</span></p>
                        </div>
                      </div>
                    </div>
                    <div class="profile-info">
                      <h5 class="font-weight-semibold text-primary">Profile Info</h5>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">First Name : <span class="mb-n1 font-weight-semibold">{{record.firstname}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Last Name : <span class="mb-n1 font-weight-semibold">{{record.lastname}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Email : <span class="mb-n1 font-weight-semibold">{{record.email}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.email_pwd}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2 border-bottom">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Country/Region: <span class="mb-n1 font-weight-semibold">{{record.country}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Phone Number : <span class="mb-n1 font-weight-semibold">{{record.phone}}</span></p>
                        </div>
                      </div>
                      <div class="d-flex flex-row p-2">
                        <div class="col-md p-2">
                          <p class=" text-md-left">Address : <span class="mb-n1 font-weight-semibold">{{record.address}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">City : <span class="mb-n1 font-weight-semibold">{{record.city}}</span></p>
                        </div>
                        <div class="col-md p-2">
                          <p class=" text-md-left">Zip/Post Code : <span class="mb-n1 font-weight-semibold">{{record.post_code}}</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import json from "../data.json";
export default {
  data() {
    return {
      records: [],
      error: null
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  },
  mounted() {
    var vm = this;
    vm.records = json;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
