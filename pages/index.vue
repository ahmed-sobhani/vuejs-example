<template>
  <main role="main" class="home">
    <section class="container-fluid sec1">
      <div class="container">
        <div class="row">
          <div class="col-8 offset-lg-1 sec1-info align-self-center">
            <div class="titre">
              <h2>
                test investing
                <br />
                <vue-typer
                  :text="[
                    'Simplified',
                    'Unbundled',
                    'Democratized',
                    'Demystified',
                  ]"
                  :type-delay="300"
                  class="text-muted vue-typer"
                ></vue-typer>
              </h2>
            </div>
            <div>
              <p>
                Access institutional-grade alternative investment opportunities.
                Build a diversified portfolio of direct private equity and real
                estate assets curated by industry veterans.
              </p>
              <div
                :class="
                  islogged == false
                    ? 'd-flex justify-content-center align-items-center w-75'
                    : ''
                "
              >
                <a
                  @click="handleGetStart"
                  target="_blank"
                  rel="noopener
                                    noreferrer"
                  :class="
                    islogged == false
                      ? 'text-capitalize lg-device w-50 mt-0'
                      : 'text-capitalize lg-device'
                  "
                >
                  get started
                </a>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  v-model="UserEmail"
                  @input="$v.UserEmail.$touch()"
                  placeholder="Enter your email address"
                  v-if="islogged == false"
                />
              </div>
              <p
                v-if="
                  !$v.UserEmail.required && islogged == false && downgetstart
                "
                class="text-danger"
              >
                You must enter your email to get started
              </p>
              <p
                v-if="!$v.UserEmail.email && islogged == false"
                class="text-danger"
              >
                Email is not valid
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid sec2-mob sm-device">
      <div class="container">
        <div class="row">
          <div class="col-12 aligm-self-center">
            <a
              @click="handleGetStart"
              rel="noopener
                                noreferrer"
              class="text-capitalize"
            >
              get started
            </a>
          </div>
        </div>
      </div>
    </div>
    <section class="sec-mid position-relative">
      <div class="container-fluid block-top">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-lg-6 align-self-start">
            <h3>Why invest in private equity and real estate?</h3>
            <p>
              “Private equity and Real Estate have historically been the best
              performing risk-adjusted investments. Typically only available to
              large institutions. “
            </p>
            <a
              href="#"
              target="_blank"
              rel="noopener
                                noreferrer"
              class="text-capitalize"
            >
              learn more
            </a>
          </div>
        </div>
      </div>
      <div class="block-center">
        <img src="./../assets/img/home_tbl.png" alt="" class="lg-device" />
        <img src="./../assets/img/home-tbl-mob.jpg" alt="" class="sm-device" />
      </div>
      <div class="container-fluid block-btn">
        <div class="container">
          <div class="row align-items-start mx-lg-5 lg-device">
            <div class="col-4">
              <h3>Non-correlated</h3>
              <p>
                The performance of alternative investments is not closely
                correlated with stocks and bond.
              </p>
            </div>
            <div class="col-4">
              <h3>Superior risk adjusted returns</h3>
              <p>
                Alternative investing traditionally benefits from structural
                downside protection mechanism but offers significantly higher
                risk adjusted returns versus traditionally easy to access
                investment opportunities in bonds, stock and corporate traded
                debt.
              </p>
            </div>
            <div class="col-4">
              <h3>Capital preservation</h3>
              <p>
                When the appropriate levels of leverage are applied, alternative
                investments offer better opportunities to preserve wealth.
              </p>
            </div>
          </div>

          <div
            id="carouselE"
            class="carousel slide sm-device items"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselE"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselE" data-slide-to="1"></li>
              <li data-target="#carouselE" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <h3>Non-correlated</h3>
                <p class="text-center">
                  The performance of alternative investments is not closely
                  correlated with stocks and bond.
                </p>
              </div>
              <div class="carousel-item">
                <h3>Superior risk adjusted returns</h3>
                <p class="text-center">
                  > Alternative investing traditionally benefits from structural
                  downside protection mechanism but offers significantly higher
                  risk adjusted returns versus traditionally easy to access
                  investment opportunities in bonds, stock and corporate traded
                  debt.
                </p>
              </div>
              <div class="carousel-item">
                <h3>Capital preservation</h3>
                <p class="text-center">
                  > When the appropriate levels of leverage are applied,
                  alternative investments offer better opportunities to preserve
                  wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
    <section class="container-fluid sec-2">
      <div class="container">
        <div class="row mx-lg-5 title">
          <div class="col-lg-6 col-md-12">
            <h2 class="text-capitalize">RealEstate Capital’s Advantge</h2>
          </div>
          <div class="col-lg-6 lg-device">
            <p>
              Invest easily in curated, institutional-grade opportunities, with
              full transparency and a potential for early liquiditys.
            </p>
          </div>
        </div>
        <div class="row mx-lg-5 items lg-device">
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="cover">
              <img
                src="./../assets/img/man-2.png"
                class="rounded mx-auto d-block"
                alt="..."
              />
              <h5>Unparalleled underwriting</h5>
              <p>
                We partner with sponsor who bring unqiue and in most instances
                bilaterally negotited investment opportunities to our attention.
                All our investment opportunities go through two investment
                committees... more
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="cover">
              <img
                src="./../assets/img/low-price.png"
                class="rounded mx-auto d-block"
                alt="..."
              />
              <h5>Low fees</h5>
              <p>
                We cut out a layer of fees for larger institutions to deliver a
                fee structure that is more than 30% lower than traditional blind
                pools of capital.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="cover">
              <img
                src="./../assets/img/shapes.png"
                class="rounded mx-auto d-block"
                alt="..."
              />
              <h5>No minimums</h5>
              <p>
                You can invest with us with as little as US$5,000. We are
                levelling the playing field by driving a paradigm shift that
                allows investors access to opportunities previously available to
                the top 1% or very large institutions.
              </p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="cover">
              <img
                src="./../assets/img/money.png"
                class="rounded mx-auto d-block"
                alt="..."
              />
              <h5>Opportunity for early liquidity</h5>
              <p>
                Typically, private investments are locked up for long periods of
                time. Our Secondary Market offers potential for early liquidity.
              </p>
            </div>
          </div>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide sm-device items"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="cover">
                <img
                  src="./../assets/img/man-2.png"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
                <h5>Unparalleled underwriting</h5>
                <p>
                  We partner with sponsor who bring unqiue and in most instances
                  bilaterally negotited investment opportunities to our
                  attention. All our investment opportunities go through two
                  investment committees... more
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cover">
                <img
                  src="./../assets/img/low-price.png"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
                <h5>Low fees</h5>
                <p>
                  We cut out a layer of fees for larger institutions to deliver
                  a fee structure that is more than 30% lower than traditional
                  blind pools of capital.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cover">
                <img
                  src="./../assets/img/shapes.png"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
                <h5>No minimums</h5>
                <p>
                  You can invest with us with as little as US$5,000. We are
                  levelling the playing field by driving a paradigm shift that
                  allows investors access to opportunities previously available
                  to the top 1% or very large institutions.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <div class="cover">
                <img
                  src="./../assets/img/money.png"
                  class="rounded mx-auto d-block"
                  alt="..."
                />
                <h5>Opportunity for early liquidity</h5>
                <p>
                  Typically, private investments are locked up for long periods
                  of time. Our Secondary Market offers potential for early
                  liquidity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid sec-last">
      <div class="container">
        <div class="block-a row mx-lg-5">
          <h3 class="col-12">What we invest in</h3>
          <p class="col-12">
            We source hundreds of opportunities annually and select a small
            subset for investing across Western Europe and North America. Our
            sourcing gives us access to some of the better risk-adjusted return
            opportunities across the alternative landscape with a strong focus
            on key thematic trends shaping various industries.
          </p>
          <div class="col-6 lg-device">
            <div class="cover">
              <img
                src="./../assets/img/idea.png"
                alt="idea"
                sizes=""
                srcset=""
              />
              <h4>Direct Private Equity</h4>
              <p>
                We invest in buy & builds, middle market to upper middle market
                buy-outs, corporate carve-outs and special situation
                opportunities where enterprise values fall between US$250-2.5bn.
                This in our view is where we find the best risk-reward
                opportunities
              </p>
            </div>
          </div>
          <div class="col-6 lg-device">
            <div class="cover">
              <img
                src="./../assets/img/hotel.png"
                alt="hotel"
                sizes=""
                srcset=""
              />
              <h4>Direct Real Estate</h4>
              <p>
                We invest across the entire real estate capital stack across
                industrial, residential and commercial opporunities in the
                sector with a thematic approach across areas of bridge
                financing, planning plays, income generation, value-add and
                greenfield / brownfield development
              </p>
            </div>
          </div>
          <nav class="col-12 sm-device">
            <div class="row row-cols-2 nav-tabs" id="nav-tab" role="tablist">
              <a
                class="col nav-item nav-link"
                :class="{ active: !showDirectRealEstate }"
                id="nav-home-tab"
                @click="handleShowDirectRealEstate(false)"
                role="tab"
                aria-controls="nav-home"
              >
                <img
                  src="./../assets/img/idea.png"
                  alt="idea"
                  sizes=""
                  srcset=""
                />
              </a>
              <a
                class="col nav-item nav-link"
                :class="{ active: showDirectRealEstate }"
                id="nav-profile-tab"
                @click="handleShowDirectRealEstate(true)"
                role="tab"
                aria-controls="nav-profile"
              >
                <img
                  src="./../assets/img/hotel.png"
                  alt="idea"
                  sizes=""
                  srcset=""
                />
              </a>
            </div>
          </nav>
          <div class="tab-content sm-device" id="nav-tabContent">
            <div
              class="tab-pane fade"
              :class="{
                active: !showDirectRealEstate,
                show: !showDirectRealEstate,
              }"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="cover">
                <h4>Direct Private Equity</h4>
                <p>
                  We invest in buy & builds, middle market to upper middle
                  market buy-outs, corporate carve-outs and special situation
                  opportunities where enterprise values fall between
                  US$250-2.5bn. This in our view is where we find the best
                  risk-reward opportunities
                </p>
              </div>
            </div>
            <div
              class="tab-pane fade"
              :class="{
                active: showDirectRealEstate,
                show: showDirectRealEstate,
              }"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="cover">
                <h4>Direct Real Estate</h4>
                <p>
                  We invest across the entire real estate capital stack across
                  industrial, residential and commercial opporunities in the
                  sector with a thematic approach across areas of bridge
                  financing, planning plays, income generation, value-add and
                  greenfield / brownfield development
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="divider lg-device"></div>
        <div class="block-b row mx-lg-5 lg-device">
          <h3 class="col-12">Secondary Market</h3>
          <p class="col-12">
            Traditional alternative investment funds typically target a 3–5 year
            hold, but with our Secondary Market you have the potential to exit
            early.
          </p>
          <div class="col-4">
            <div class="cover">
              <h5>Transparency</h5>
              <p>
                Secondary market investors have always benefitted from
                asymmetric information. We provide all participants with the
                same asset-level reporting and performance information.
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="cover">
              <h5>Easy Access</h5>
              <p>
                Secondary Market is open for transactions semi-annually for four
                weeks.
              </p>
            </div>
          </div>
          <div class="col-4">
            <div class="cover">
              <h5>Automated Process</h5>
              <p>
                Our streamlime the process to match buyers and sellers to
                execute transfers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="container-fluid sec-m sm-device">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h3>Secondary Market</h3>
            <p>
              Traditional alternative investment funds typically target a 3–5
              year hold, but with our Secondary Market you have the potential to
              exit early.
            </p>
            <div
              id="carouselEl"
              class="carousel slide sm-device items"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselEl"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#carouselEl" data-slide-to="1"></li>
                <li data-target="#carouselEl" data-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div class="cover">
                    <h3>Transparency</h3>
                    <p>
                      Secondary market investors have always benefitted from
                      asymmetric information. We provide all participants with
                      the same asset-level reporting and performance
                      information.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="cover">
                    <h3>Easy Access</h3>
                    <p>
                      Secondary Market is open for transactions semi-annually
                      for four weeks.
                    </p>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="cover">
                    <h3>Automated Process</h3>
                    <p>
                      Our streamlime the process to match buyers and sellers to
                      execute transfers.
                    </p>
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

import { required, email } from "vuelidate/lib/validators";
export default {
  middleware: 'CheckAuth',
  name: "Home",
  metaInfo: {
    title: "Vue SSR Simple Setup Home",
    meta: [{ name: "description", content: "Home page description" }],
  },

  data() {
    return {
      showDirectRealEstate: false,
      Typed: false,
      UserEmail: "",
      islogged: false,
      downgetstart: false,
    };
  },
  methods: {
    handleGetStart() {
      if (this.$store.state.auth.status.loggedIn) {
        this.$router.push("/invest");
        this.islogged = true;
      } else {
        if (this.$v.$invalid == false) {
          this.$store.dispatch("auth/SetUserEmail", this.UserEmail).then(() => {
            this.$router.push("/signup");
          });
        } else {
          this.downgetstart = true
        }
      }
    },
    handleShowDirectRealEstate(show) {
      this.showDirectRealEstate = show;
    },
    onTyped: function () {
      document.querySelector(".vue-typer .custom.caret").style.backgroundColor =
        "red";
    },
  },
  mounted() {
    this.islogged = this.$store.state.auth.status.loggedIn;
  },
  validations: {
    UserEmail: {
      required,
      email,
    },
  },
};
</script>
<style lang="scss">
.vue-typer .custom.caret {
  width: 5px;
  background-color: #89a851;
}
.vue-typer {
  .custom.caret {
    &.idle {
      display: none;
    }
  }
}
</style>
