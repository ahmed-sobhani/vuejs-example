<template>
  <div
    class="col-12 col-md-4 col-lg-3
                                        tab-nav"
  >
    <div
      class="nav flex-md-column flex-row nav-pills"
      id="v-pills-tab"
      role="tablist"
      aria-orientation="vertical"
    >
      <!-- <a
        class="nav-link"
        :class="{'active': currentRouteName == 'Overview'}"
        id="v-pills-home-tab"
        data-toggle="pill"
        href="#v-pills-home"
        role="tab"
        aria-controls="v-pills-home"
        aria-selected="true"
        >Overview</a
      > -->
      <router-link
        :class="{ active: currentRouteName == 'Overview' }"
        class="nav-link"
        to="/overview"
        >Overview</router-link
      >
      <router-link
        :class="{ active: currentRouteName == 'Investments' }"
        class="nav-link"
        to="/investments"
        >Investment</router-link
      >
      <router-link
        :class="{ active: currentRouteName == 'TaxCenter' }"
        class="nav-link"
        to="/taxCenter"
        >Tax Center</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  methods: {
    handleCompleteProfile() {
      if (this.investor.accreditation_status < 3)
        this.$router.push("/questionnaire");
      else this.$router.push("/kyc");
    }
  }
};
</script>
