<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h4 class="font-weight-semibold">Account List</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md">
                <button type="button" class="btn btn-outline-primary btn-lg btn-block" @click.prevent="accountRegister">
                  <b-icon icon="plus"></b-icon>
                  Add New Account
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div v-if="emputy" class="font-weight-semibold font-20 p-3 text-center">
                  {{emputy}}
                </div>
                <div class="accordion" role="tablist" v-for="(record, index) in records" :key="index">
                  <b-card no-body class="mb-3" >
                    <b-card-header header-tag="header" class="alert-success p-0" role="tab">
                      <div class="font-weight-semibold font-20 p-3 account-title" block v-b-toggle="'accordion-' + index">
                        <b-icon icon="person-fill"></b-icon>
                        {{record.firstname}} {{record.lastname}}
                      </div>
                    </b-card-header>
                    <b-collapse :id="'accordion-' + index" accordion="my-accordion" role="tabpanel">
                      <b-card-body>
                        <div class="profile-info pb-2">
                          <p class="font-weight-semibold font-20 text-gray">Profile Info</p>
                          
                          <div class="d-flex flex-row p-2 ">
                            <div class="col-md-2 p-2">
                              <b-avatar :variant="record.avatarBg" rounded="lg" size="8rem" :text="record.short_name"></b-avatar>
                            </div>
                            <div class="col-md-10 p-2">
                              <div class="row border-bottom pb-3 mb-4">
                                <div class="col-md">
                                  <p class=" text-md-left">First Name : <span class="mb-n1 font-weight-semibold">{{record.firstname}}</span></p>
                                </div>
                                <div class="col-md">
                                  <p class=" text-md-left">Last Name : <span class="mb-n1 font-weight-semibold">{{record.lastname}}</span></p>
                                </div>
                              </div>
                              <div class="row border-bottom pb-3">
                                <div class="col-md">
                                  <p class=" text-md-left">Email : <span class="mb-n1 font-weight-semibold">{{record.email}}</span></p>
                                </div>
                                <div class="col-md">
                                  <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.email_pwd}}</span></p>
                                </div>
                              </div>
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
                          <div class="d-flex flex-row p-2 border-bottom">
                            <div class="col-md p-2">
                              <p class=" text-md-left">Address : <span class="mb-n1 font-weight-semibold">{{record.address}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">City : <span class="mb-n1 font-weight-semibold">{{record.city}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Zip/Post Code : <span class="mb-n1 font-weight-semibold">{{record.zip}}</span></p>
                            </div>
                          </div>
                        </div>
                        <div class="account-info">
                          <p class="font-weight-semibold font-20 text-gray">Account Info</p>
                          <div class="d-flex flex-row p-2 border-bottom">
                            <div class="col-md p-2">
                              <p class=" text-md-left">TeamView : <span class="mb-n1 font-weight-semibold">{{record.tv_id}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.tv_pwd}}</span></p>
                            </div>
                          </div>
                          <div class="d-flex flex-row p-2 border-bottom">
                            <div class="col-md p-2">
                              <p class=" text-md-left">Anydesk : <span class="mb-n1 font-weight-semibold">{{record.any_id}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.any_pwd}}</span></p>
                            </div>
                          </div>
                          <div class="d-flex flex-row p-2 border-bottom">
                            <div class="col-md p-2">
                              <p class=" text-md-left">VPS/Computer: <span class="mb-n1 font-weight-semibold">{{record.vps_id}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.vps_pwd}}</span></p>
                            </div>
                          </div>
                          <div class="d-flex flex-row p-2 border-bottom">
                            <div class="col-md p-2">
                              <p class=" text-md-left">Upwork : <span class="mb-n1 font-weight-semibold">{{record.upwork_id}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.upwork_pwd}}</span></p>
                            </div>
                          </div>
                          <div class="d-flex flex-row p-2">
                            <div class="col-md p-2">
                              <p class=" text-md-left">Freelancer : <span class="mb-n1 font-weight-semibold">{{record.freelan_id}}</span></p>
                            </div>
                            <div class="col-md p-2">
                              <p class=" text-md-left">Password : <span class="mb-n1 font-weight-semibold">{{record.freelan_pwd}}</span></p>
                            </div>
                          </div>
                        </div>
                      </b-card-body>
                    </b-collapse>
                  </b-card>
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

export default {
  data() {
    return {
      records: [],
      emputy: '',
      error: null
    };
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    }),
  },
 
  mounted() {
    var vm = this;
    const db = this.$firebase.database();
    db.ref("account").on('value', (snapshot) => {
      vm.records = snapshot.val();  
      if (!vm.records){
        vm.emputy = "No account data."
      }  
    });

  },
  methods: {
    accountRegister() {
      this.$router.replace({
        name: "AccountRegister"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
.account-title:focus{
  outline: none;
}
</style>
