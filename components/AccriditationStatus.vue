<template>
  <div class="header" v-show="investor.accreditation_status < 4">
    <i class="fa fa-exclamation" aria-hidden="true"></i>
    <h6>Complete your profile and start investing</h6>
    <p>
      Once profile is completed, you will be able to view fund details and make
      investments.
    </p>
    <a @click="handleCompleteProfile" rel="noopener noreferrer"
      ><u>Complete your profile </u></a
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      investor: {}
    };
  },
  created() {
    this.init();
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userFullName() {
      if (!this.$store.state.auth.status.loggedIn) return "";
      return `${this.$store.state.auth.user.first_name} ${this.$store.state.auth.user.last_name}`;
    }
  },
  methods: {
    init() {
      this.$store
        .dispatch("auth/getProfile")
        .then(response => {
          localStorage.setItem("user",JSON.stringify(response.user));
          this.user = { ...response.user };
          this.master_user = { ...response.user };
          this.investor = response;
        })
        .catch(() => {
          this.$snotify.error("Server Internal Error.");
        });
    },
    handleCompleteProfile() {
      if (this.investor.accreditation_status < 3)
        this.$router.push("/questionnaire");
      else this.$router.push("/kyc");
    }
  }
};
</script>
