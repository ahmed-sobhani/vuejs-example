<template>
  <div class="row content-2" @click="handleProductPage(opportunity.id)">
    <div class="col-md-4 col-lg-3 img">
      <img :src="opportunity.thumbnail" alt="" />
    </div>
    <div class="col-12 col-lg-9 col-md-8 lg-box">
      <div class="row">
        <div class="col-12 col-lg-9 col-md-8 table">
          <div class="col-12 col-lg-3 col-md-4 align-self-center sm-device">
            <div class="circle">
              <h2>75%</h2>
              <small class="text-uppercase">allocation remaining</small>
            </div>
          </div>
          <h3>
            {{ opportunity.name }}
            <small class="text-muted lg-device">{{
              opportunity.desc_short
            }}</small>
          </h3>

          <ul class="list-inline fr-ul">
            <li
              v-show="opportunity.industries_info.length > 0"
              class="list-inline-item"
            >
              <span>{{
                opportunity.industries_info.length > 0
                  ? opportunity.industries_info[0].title
                  : ""
              }}</span>
            </li>
            <li v-show="opportunity.country_info" class="list-inline-item">
              <span>{{
                opportunity.country_info ? opportunity.country_info.title : ""
              }}</span>
            </li>
          </ul>
          <p class="lead text-justify lg-device">
            {{ opportunity.desc_long }}
          </p>
          <hr class="my-4" />
          <ul class="list-inline ul-footer">
            <li class="list-inline-item">
              <span class="text-uppercase">Target returns</span>
            </li>
            <li class="list-inline-item">
              <h2>
                {{ opportunity.target_gross_IRR }}%
                <small class="text-muted text-uppercase">IRR</small>
              </h2>
            </li>
            <li class="list-inline-item">
              <h2>
                {{ opportunity.invested_capital }}x
                <small class="text-muted text-uppercase"
                  >Multiple on invested capital</small
                >
              </h2>
            </li>
            <li class="list-inline-item">
              <h2>
                {{ opportunity.ebitda_ev }}x
                <small class="text-muted text-uppercase"
                  >{{ opportunity.ebitda_ev_title_name }} multiple</small
                >
              </h2>
            </li>
          </ul>
        </div>
        <div class="col-12 col-lg-3 col-md-4 align-self-center lg-device">
          <div class="circle">
            <h2>75%</h2>
            <small class="text-uppercase">allocation remaining</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Offer",
  props: {
    opportunity: Object,
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    handleProductPage(id) {
      this.$router.push(`/opportunity/${id}`);
    },
  },
};
</script>

<style scoped>
p.lead {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}
</style>
