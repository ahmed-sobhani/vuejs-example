<template>
  <div class="col-12 col-lg-3 col-md-4">
    <div class="cover">
      <figure class="figure position-relative">
        <img
          width="100%"
          height="100%"
          :src="opportunity.thumbnail"
          class="figure-img img-fluid"
          alt=""
        />
        <figcaption class="figure-caption">
          {{
            opportunity.industries_info.length > 0
              ? opportunity.industries_info[0].title
              : ""
          }}
        </figcaption>
      </figure>
      <div class="text">
        <h3 class="text-capitalize text-center">
          {{ opportunity.name }}
          <small class="text-muted d-block">{{
            opportunity.country_info ? opportunity.country_info.title : ""
          }}</small>
        </h3>
        <p class="text-justify">
          {{ opportunity.desc_short }}
        </p>
      </div>
      <div class="footer">
        <h6>Target & return</h6>
        <ul class="d-flex justify-content-between list-unstyled">
          <li>
            <h4>
              {{ opportunity.target_gross_IRR }}%<small
                class="d-block text-uppercase"
                >irr</small
              >
            </h4>
          </li>
          <li>
            <h4>
              {{ opportunity.invested_capital }}x<small
                class="d-block text-uppercase"
                >Multiple on invested capital</small
              >
            </h4>
          </li>
          <li>
            <h4>
              {{ opportunity.ebitda_ev }}x<small class="d-block text-uppercase"
                >{{ opportunity.ebitda_ev_title_name }} multiple</small
              >
            </h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PastOffer",
  props: {
    opportunity: Object,
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {},
};
</script>
<style scoped>
.img-fluid {
  height: 100% !important;
  width: 100% !important;
}
</style>
