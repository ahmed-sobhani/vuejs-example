<template>
  <main role="main" class="signUp">
    <section class="container-fluid page pg1" v-show="step == 1">
      <Step-One :method="handleNextStep"></Step-One>
    </section>

    <section class="container-fluid page pg2" v-show="step == 2">
      <Step-Tow @handleEntityTypeprop="handleEntityType"> </Step-Tow>
    </section>

    <section class="container-fluid page pg3" v-show="step == 3">
      <Step-Tree
        @handleIsAccreditedprop="handleIsAccredited"
        :user="user"
        :handlePrevStepprop="handlePrevStep"
        :handleNextStepprop="handleNextStep"
      ></Step-Tree>
    </section>

    <section class="container-fluid page pg4" v-show="step == 4">
      <Step-Four
        :user="user"
        :handlePrevStepprop="handlePrevStep"
        :handleNextStepprop="handleNextStep"
      ></Step-Four>
    </section>

    <section class="container-fluid page pg5" v-if="step == 5">
      <Step-Five
        :user="user"
        :handlePrevStepprop="handlePrevStep"
        :handleRegisterprop="handleRegister"
      ></Step-Five>
    </section>
    <section class="container-fluid page pg6" v-show="step == 6">
      <Step-Six></Step-Six>
    </section>

    <section class="container-fluid page pg7" v-show="step == 7">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-md-10 justify-content-center">
            <div class="prgres">
              <ul class="list-unstyled d-flex">
                <li class="active exit">
                  <span></span>
                  <h6>Start</h6>
                </li>
                <li class="active">
                  <span></span>
                  <h6>
                    Pre sign up
                    <small class="d-block xsm-device">General access</small>
                  </h6>
                </li>
                <li class="">
                  <span></span>
                  <h6>
                    Questionnaire
                    <small class="d-block xsm-device">Financial Info</small>
                  </h6>
                </li>
                <li class="">
                  <span></span>
                  <h6>
                    KYC
                    <small class="d-block xsm-device"
                      >Confidential Info access</small
                    >
                  </h6>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-10 col-lg-9 col-md-9 justify-content-center">
            <div class="header">
              <i class="fa fa-check" aria-hidden="true"></i>
              <h2>Email address verified.</h2>
              <span>Thank you for confirming.</span>
            </div>
            <div class="footer">
              <div class="row justify-content-end">
                <div class="col-lg-8 col-md-7 col-12">
                  <h4>Welcome , we’re excited to partner with you</h4>
                  <p>
                    On the following pages, we’ll ask a few questions to get to
                    know you better. There are no wrong answers.
                  </p>
                </div>
                <div class="col-lg-4 col-md-5 col-12 ba10">
                  <router-link class="noopener noreferrer" to="/profile"
                    >Skip</router-link
                  >
                  <router-link class="noopener noreferrer" to="/questionnaire"
                    >Start</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Step-Seven></Step-Seven>
    </section>
  </main>
</template>
<script>
import StepOne from "./../../components/steps-signup/step1";
import StepTow from "./../../components/steps-signup/step2";
import StepTree from "./../../components/steps-signup/step3";
import StepFour from "./../../components/steps-signup/step4";
import StepFive from "./../../components/steps-signup/step5";
import StepSix from "./../../components/steps-signup/step6";
import StepSeven from "./../../components/steps-signup/step7";
import { required } from "vuelidate/lib/validators";
export default {
  name: "SignUp",
  components: {
    StepOne,
    StepTow,
    StepTree,
    StepFour,
    StepFive,
    StepSix,
    StepSeven
  },
  data() {
    return {
      step: 2,
      user: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        user_type: 1,
        country: "",
        organization: null,
        phone: "",
        entity_type: 1,
        is_accredited: false
      }
    };
  },
  methods: {
    handleNextStep() {
      this.$validator.validateAll().then(() => {
        let isOK = true;
        let errors = [];
        if (this.step == 4) {
          if (this.user.first_name == null || this.user.first_name == "") {
            errors.push("Frist Name is required.\n");
            isOK = false;
          }
          if (this.user.last_name == null || this.user.last_name == "") {
            errors.push("Last Name is required.\n");
            isOK = false;
          }
          if (this.user.phone == null || this.user.phone == "") {
            errors.push("Phone is required.\n");
            isOK = false;
          }
          if (this.user.country == null || this.user.country == "") {
            errors.push("Country is required.\n");
            isOK = false;
          }
          if (
            this.user.entity_type == 2 &&
            (this.user.organization == null || this.user.organization == "")
          ) {
            errors.push("Organization is required.\n");
            isOK = false;
          }
        }
        // else if (this.step == 5) {

        // }
        if (isOK) {
          this.step++;
          if (this.user.entity_type == 2 && this.step == 3) this.step++;
        } else {
          errors.forEach(error => {
            this.$snotify.error(error);
          });
        }
      });
    },
    handlePrevStep() {
      this.step--;
      if (this.user.entity_type == 2 && this.step == 3) this.step--;
      else if (this.step < 1) this.step = 1;
    },
    handleEntityType(entity) {
      this.user.entity_type = entity;
      this.handleNextStep();
    },
    handleIsAccredited(is_accredited) {
      this.user.is_accredited = is_accredited;
    },
    handleRegister() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$store
            .dispatch("auth/register", this.user)
            .then(response => {
              // const ToJsonPars = `${response.token}`;
              // const replacejson = ToJsonPars.replace(/'/g, '"');
              // const jsonPars = JSON.parse(replacejson);
              localStorage.setItem("token", response.token);
              this.$store
                .dispatch("auth/getProfile")
                .then(response => {
                  localStorage.setItem("user",JSON.stringify(response.user) );
                  this.step = 7;
                })
                .catch(() => {
                  this.$snotify.error("Server Internal Error.");
                });
              this.step = 7;
            })
            .catch(e => {
              if (e.response.data.non_field_errors.length > 0) {
                this.$snotify.error(
                  e.response.data.non_field_errors.join(" and ")
                );
              }
              console.log(e)
              this.$snotify.error("Server Internal Error.");
            });
        } else {
          this.$validator.errors.all().forEach(error => {
            this.$snotify.error(error);
          });
        }
      });
    }
  },
  created() {
   this.user.email = this.$store.state.auth.EmialUser 
  },
  validations: {
    first_name: {
      required
    }
  }
};
</script>

<style scoped>
.deactive {
  background-color: #262626 !important;
  color: rgb(255 255 255 / 90%) !important;
  filter: brightness(0.4) !important;
  -webkit-filter: brightness(1.4) !important;
}
.signUp .pg3 .ba10L a:nth-child(2) {
  background-color: transparent;
  color: #000000;
  padding: 0.2rem 1.2rem;
  margin-top: 1rem;
  border: 1px solid #000;
  filter: brightness(1);
  -webkit-filter: brightness(1);
}
</style>
