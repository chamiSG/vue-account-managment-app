<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md">
        <div class="card">
          <div class="card-header ">
            <h5 class="font-weight-semibold">Account Register</h5>
          </div>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="accountSubmit">
              <div class="profile pb-3">
                <p class="font-weight-semibold font-20 text-gray">Profile Register</p>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" class="form-control" id="inputFirstName" placeholder="First Name" name="firstname" value required autofocus v-model="form.firstname">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputLastName">Last Name</label>
                    <input type="text" class="form-control" id="inputLastName" placeholder="Last Name" name="lastname" value required autofocus v-model="form.lastname">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail">Email</label>
                    <input type="email" class="form-control" id="inputEmail" placeholder="Email" name="email" value required autofocus v-model="form.email">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword">Password</label>
                    <input type="password" class="form-control" id="inputPassword" placeholder="Password" name="email_pwd" value required autofocus v-model="form.email_pwd">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCountry">Country/Region</label>
                    <select id="inputCountry" class="form-control" name="country" value autofocus v-model="form.country">
                      <option selected>Choose...</option>
                      <option v-for="country in countries" :key="country.name">{{country.name}}</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPhone">Phone Number</label>
                    <input type="text" class="form-control" id="inputPhone" placeholder="+79594843733" name="phone" value autofocus v-model="form.phone">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Apartment, studio, or floor" name="address" value autofocus v-model="form.address">
                  </div>
                  <div class="form-group col-md-4">
                    <label for="inputCity">City</label>
                    <input type="text" class="form-control" id="inputCity" placeholder="Moscow" name="city" value autofocus v-model="form.city">
                  </div>
                  
                  <div class="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" class="form-control" id="inputZip" placeholder="45654" name="zip" value required autofocus v-model="form.zip">
                  </div>
                </div>
              </div>

              <div class="account pb-3">
                <p class="font-weight-semibold font-20 text-gray">Account Register</p>
                
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputTV">TeamView ID</label>
                    <input type="text" class="form-control" id="inputTV" placeholder="TeamView ID" name="tv_id" value autofocus v-model="form.tv_id">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputTVPassword">Password</label>
                    <input type="password" class="form-control" id="inputTVPassword" placeholder="Password" name="tv_pwd" value autofocus v-model="form.tv_pwd">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputAnyD">AnyDesk ID</label>
                    <input type="text" class="form-control" id="inputAnyD" placeholder="AnyDesk ID" name="any_id" value autofocus v-model="form.any_id">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputADPassword">Password</label>
                    <input type="password" class="form-control" id="inputADPassword" placeholder="Password" name="any_pwd" value autofocus v-model="form.any_pwd">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputVPS">VPS/Computer ID</label>
                    <input type="text" class="form-control" id="inputVPS" placeholder="VPS/Computer ID" name="vps_id" value autofocus v-model="form.vps_id">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputVPSPassword">Password</label>
                    <input type="password" class="form-control" id="inputVPSPassword" placeholder="Password" name="vps_pwd" value autofocus v-model="form.vps_pwd">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputUpwork">Upwork ID</label>
                    <input type="text" class="form-control" id="inputUpwork" placeholder="Upwork ID" name="upwork_id" value autofocus v-model="form.upwork_id">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputUpworkPassword">Password</label>
                    <input type="password" class="form-control" id="inputUpworkPassword" placeholder="Password" name="upwork_pwd" value autofocus v-model="form.upwork_pwd">
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputFreelancer">Freelancer ID</label>
                    <input type="text" class="form-control" id="inputFreelancer" placeholder="Freelancer ID" name="freelan_id" value autofocus v-model="form.freelan_id">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputFreelancerPassword">Password</label>
                    <input type="password" class="form-control" id="inputFreelancerPassword" placeholder="Password" name="freelan_pwd" value autofocus v-model="form.freelan_pwd">
                  </div>
                </div>
              </div>
              <div class="row justify-content-end">
                <div class="col-md-2">
                  <button type="button" class="btn btn-secondary  btn-lg btn-block" @click.prevent="backBtn">Back</button>
                </div>
                <div class="col-md-2">
                  <button variant="success" type="submit" class="btn btn-primary btn-lg btn-block">Save</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import countryJson from "../data/country.json";

export default {
  data() {
    return {
      countries: [],
      form: {
        firstname: "",
        lastname: "",
        email: "",
        country: "",
        phone: "",
        address: "",
        city: "",
        zip: "",
        tv_id: "",
        tv_pwd: "",
        any_id: "",
        any_pwd: "",
        vps_id: "",
        vps_pwd: "",
        upwork_id: "",
        upwork_pwd: "",
        freelan_id: "",
        freelan_pwd: ""
      },
      error: null
    };
  },
  mounted() {
    var vm = this;
    vm.countries = countryJson;
  },
  
  methods: {
    backBtn() {
      this.$router.replace({
        name: "Dashboard"
      });
    },
    makeToast(variant = null) {
      this.$bvToast.toast('Your account saved successfully!', {
        title: `Notification`,
        variant: variant,
        solid: true
      })
    },

    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },

    accountSubmit() {
      const db = this.$firebase.database();
      var accountRef = db.ref("/account");

      var shortFirstName = this.form.firstname.charAt(0).toUpperCase();
      var shortLastName = this.form.lastname.charAt(0).toUpperCase();
      var short_name = shortFirstName + shortLastName;

      var colorPacks = ['secondary', 'primary', 'dark', 'light', 'success', 'warning', 'info', 'danger'];
      var avatarBg = colorPacks[Math.floor(Math.random() * colorPacks.length)];

      var data = {
        firstname:   this.capitalizeFirstLetter(this.form.firstname),
        lastname:    this.capitalizeFirstLetter(this.form.lastname),
        short_name:  short_name,
        avatarBg:    avatarBg,
        email:       this.form.email,
        email_pwd:   this.form.email_pwd,
        country:     this.form.country,
        phone:       this.form.phone,
        address:     this.form.address,
        city:        this.form.city,
        zip:         this.form.zip,
        tv_id:       this.form.tv_id,
        tv_pwd:      this.form.tv_pwd,
        any_id:      this.form.any_id,
        any_pwd:     this.form.any_pwd,
        vps_id:      this.form.vps_id,
        vps_pwd:     this.form.vps_pwd,
        upwork_id:   this.form.upwork_id,
        upwork_pwd:  this.form.upwork_pwd,
        freelan_id:  this.form.freelan_id,
        freelan_pwd: this.form.freelan_pwd
      }
      accountRef.push(data).then(data => {
        this.makeToast('success');
      })
    }
    
   
  }
};
</script>

