<template>
  <main role="main" class="invest-prtfolio overview">
    <section class="container-fluid page">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-10 justify-content-center">
            <AccriditationStatus></AccriditationStatus>
            <div class="content">
              <div class="row">
                <div
                  class="titr col-xs-12 col-9 offset-3 order-md-0 order-1 mt-2"
                >
                  <h4>Overview</h4>
                </div>
                <PortfolioNav class="order-md-1 order-0"></PortfolioNav>
                <div class="col-12 col-md-8 col-lg-9 order-md-2 order-2">
                  <div class="tab-content cart-offer" id="v-pills-tabContent">
                    <div
                      class="tab-pane fade show
                                                active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div class="row">
                        <div class="col-12">
                          <div class="cover cadr1">
                            <h5>Overview of Active Investments</h5>
                            <div class="column">
                              <span class="font-style-overviwe"
                                >Amount Funded</span
                              ><b class="font-style-overviwe"
                                >{{ overviews.amount_funded | currency }} $</b
                              >
                            </div>
                            <div class="column">
                              <span class="font-style-overviwe"
                                >Marked Value</span
                              ><b class="font-style-overviwe"
                                >{{ overviews.marked_value | currency }} $</b
                              >
                            </div>
                            <div class="column">
                              <span class="font-style-overviwe"
                                >Distributions</span
                              ><b class="font-style-overviwe"
                                >{{ overviews.distribution | currency }} $</b
                              >
                            </div>
                            <div class="column">
                              <span class="font-style-overviwe"
                                >Marked Value + Distributions</span
                              ><b class="font-style-overviwe"
                                >{{
                                  overviews.sum_marked_value_distribution
                                    | currency
                                }}
                                $</b
                              >
                            </div>
                          </div>
                        </div>
                        <div v-if="assets && assets.length > 0" class="col-12">
                          <div class="cover cadr2">
                            <h5>Asset Types</h5>
                            <div class="row">
                              <div
                                class="right-col col-lg-8 col-12 justify-content-center"
                              >
                                <div
                                  v-for="asset in assets"
                                  :key="asset.id"
                                  class="column mt-3 mt-md-0"
                                >
                                  <span>{{ asset.title }}</span>
                                  <div class="line"></div>
                                  <b>{{ asset.amount | currency }} $</b>
                                </div>
                              </div>
                              <div
                                class="left-col col-lg-4 col-12 justify-content-center"
                              >
                                <apexchart
                                  type="pie"
                                  width="100%"
                                  :options="chartOptions"
                                  :series="series"
                                ></apexchart>
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
      </div>
    </section>
  </main>
</template>
<script>
import AccriditationStatus from "./../../components/AccriditationStatus.vue";
import PortfolioNav from "./../../components/PortfolioNav.vue";

export default {
  name: "Overview",
  components: {
    AccriditationStatus,
    PortfolioNav
  },
  data() {
    return {
      overviews: {},
      assets: [],
      series: [],
      chartOptions: {
        labels: [],
        colors: [
          "#004373",
          "#aecbd6",
          "#5699d0",
          "#db3200",
          "#22232180",
          "#22232180"
        ],
        legend: {
          show: false
        }
      }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.$store
        .dispatch("investor/getOverview")
        .then(res => {
          this.overviews = res.overviews;
          this.assets = res.asset_types;
          this.chartOptions.labels = this.assets.map(item => {
            return item.title;
          });
          // this.chartOptions.colors = this.assets.map(item => {
          //   return item.colors;
          // });
          this.series = this.assets.map(item => {
            return item.amount;
          });
        })
        .catch(() => {
          this.$snotify.error("Server Internal Error.");
        });
    }
  }
};
</script>
<style scoped>
@media only screen and (max-width: 468px) {
  .font-style-overviwe {
    font-size: 10px;
  }
}
</style>
