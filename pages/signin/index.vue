<template>
  <main role="main" class="login">
    <section class="container-fluid page">
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="col-10 col-lg-6 col-md-9
                            justify-content-center"
          >
            <div class="header">
              <h3>Access your account</h3>
            </div>
            <div class="form">
              <input
                name="email"
                v-model="user.email"
                v-validate="'required|email'"
                type="text"
                class="form-control"
                placeholder="Email"
              />
              <input
                type="Password"
                name="password"
                v-validate="'required'"
                v-model="user.password"
                class="form-control"
                placeholder="Password"
              />
              <div class="row">
                <div class="col-12 col-lg-6">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label class="form-check-label" for="defaultCheck1">
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="col-12 col-lg-6 forgetps">
                  <a href="#" target="_blank" rel="noopener noreferrer"
                    ><u>Forget Password?</u></a
                  >
                </div>
              </div>
            </div>
            <div class="row ba10">
              <a
                @click="handleLogin"
                class="col-12 text-capitalize text-center"
                rel="noopener noreferrer"
                >Login Now</a
              >
              <router-link
                class="col-12 text-capitalize text-center"
                to="/signup"
                rel="noopener noreferrer"
                >Sign Up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: "SignIn",
   middleware: 'CheckAuth',
  data() {
    return {
      user: {
        password: "",
        email: ""
      }
    };
  },
  methods: {
    handleLogin() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$store
            .dispatch("auth/login", this.user)
            .then(response => {
                console.log(response)
              localStorage.setItem("token", response.token);
              localStorage.setItem("user", JSON.stringify(response.user));
              this.$cookies.set("token",response.token)
              this.$cookies.set("userweb",JSON.stringify(response.user))
              this.$router.push("/invest");
            })
            .catch((e) => {
              console.log(e)
              this.$snotify.error("Credential is wrong.");
            });
          return;
        } else {
          this.$validator.errors.all().forEach(error => {
            this.$snotify.error(error);
          });
        }
      });
    }
  }
};
</script>
