<template>
  <header class="drpblue">
    <nav class="navbar navbar-expand-lg navbar-light">
      <NuxtLink class="navbar-brand" to="/">
        <img src="./../assets/img/moblogo.png" alt="logo" width="160" />
      </NuxtLink>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="modal"
        data-target="#navmob"
        aria-controls="navmob"
        aria-expanded="false"
        data-backdrop-in="false"
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/invest">Invest</NuxtLink>
          </li>
          <li v-show="!loggedIn" class="nav-item">
            <NuxtLink class="nav-link" to="/ourFrim">Our Firm</NuxtLink>
          </li>
          <li v-show="loggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >View Portfolio</a
            >
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/overview"
                >Overview</NuxtLink
              >
              <NuxtLink class="dropdown-item" to="/investments"
                >Investment</NuxtLink
              >
              <NuxtLink class="dropdown-item" to="/taxCenter"
                >Tax Center</NuxtLink
              >
            </div>
          </li>
          <li v-show="loggedIn" class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >Manage Account</a
            >
            <div class="dropdown-menu">
              <NuxtLink class="dropdown-item" to="/investor/accounts"
                >Investor accounts</NuxtLink
              >
            </div>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Resources Center
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NuxtLink class="dropdown-item" to="/faq">FAQ</NuxtLink>
              <!-- <NuxtLink class="dropdown-item" to="/resourceCenterInside"
                >the blog “Accrue | Insights”</NuxtLink
              > -->
              <a class="dropdown-item" href="http://blog.accretecap.com/news"
                >the blog “Accrue | Insights”</a
              >
              <a class="dropdown-item" href="http://blog.accretecap.com/news"
                >RealEstate University</a
              >
              <!-- <NuxtLink class="dropdown-item" to="/resourceCenterUniversity"
                >RealEstate University</NuxtLink
              > -->
            </div>
          </li>
          <li class="nav-item" v-if="!loggedIn">
            <NuxtLink class="nav-link" to="/raiseCapital"
              >raise capital</NuxtLink
            >
          </li>
        </ul>
        <div v-show="!loggedIn" class="right-block">
          <NuxtLink v-show="!loggedIn" class="login nav-link" to="/signin"
            >login</NuxtLink
          >
          <NuxtLink v-show="!loggedIn" class="sign-up nav-link" to="/signup"
            ><span class="align-middle">create acount</span>
            <i
              class="fa fa-angle-right"
              aria-hidden="true"
              data-toggle="modal"
            ></i
          ></NuxtLink>
        </div>
        <div v-show="loggedIn" class="rtl-block">
          <ul class="nav nav-pills">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fa fa-user-o" aria-hidden="true"></i>
                <span class="align-middle">{{ userFullName }}</span>
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <div class="dropdown-menu">
                <NuxtLink class="dropdown-item" to="/profile"
                  >Profile</NuxtLink
                >
                <a
                  class="dropdown-item"
                  @click="handleLogout"
                  style="color: #89a851 !important"
                  >Log Out</a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div
      class="modal"
      tabindex="-1"
      id="navmob"
      aria-labelledby="navmob"
      aria-hidden="true"
      ref="navmenumob"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <nav class="navbar mob-menu" id="">
            <ul class="nav navbar-nav flex-column">
              <li class="nav-item get-str">
                <div
                  class="d-flex align-items-center justify-content-between"
                  v-if="!loggedIn"
                >
                  <NuxtLink class="nav-link active" to="/invest">
                    <span> Get Started </span>
                  </NuxtLink>
                  <a
                    aria-hidden="true"
                    class="fa fa-angle-right nav-link active"
                    data-target="#navmob"
                    aria-controls="navmob"
                    data-toggle="modal"
                    ref="btntoggle"
                  ></a>
                </div>

                <div
                  class="d-flex align-items-center justify-content-between"
                  v-else
                >
                  <NuxtLink class="nav-link active" to="/profile">
                    <span> {{ userFullName }}</span>
                  </NuxtLink>
                  <a
                    aria-hidden="true"
                    class="fa fa-angle-right nav-link active"
                    data-target="#navmob"
                    aria-controls="navmob"
                    data-toggle="modal"
                    ref="btntoggle"
                  ></a>
                </div>
              </li>
              <li class="nav-item">
                <NuxtLink v-if="!loggedIn" class="nav-link" to="/signin">
                  Login
                </NuxtLink>
                <NuxtLink v-else class="nav-link" to="/profile">
                  Profile
                </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="/invest">Invest</NuxtLink>
              </li>
              <li v-show="!loggedIn" class="nav-item">
                <NuxtLink class="nav-link" to="/ourFrim"
                  >Our Firm</NuxtLink
                >
              </li>
              <li v-if="loggedIn" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDr"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  View Portfolio
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDr">
                  <NuxtLink class="dropdown-item" to="/overview"
                    >Overview</NuxtLink
                  >
                  <NuxtLink class="dropdown-item" to="/investments"
                    >Investment</NuxtLink
                  >
                  <NuxtLink class="dropdown-item" to="/taxCenter"
                    >Tax Center</NuxtLink
                  >
                </div>
              </li>
              <li v-if="loggedIn" class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDr"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Manage Account
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDr">
                  <NuxtLink class="dropdown-item" to="/investor/accounts"
                    >Investor accounts</NuxtLink
                  >
                </div>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDr"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources Center
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDr">
                  <NuxtLink class="dropdown-item" to="/faq">FAQ</NuxtLink>
                  <a
                    class="dropdown-item"
                    href="http://blog.accretecap.com/news"
                    >the blog “Accrue | Insights”</a
                  >
                  <a
                    class="dropdown-item"
                    href="http://blog.accretecap.com/news"
                    >RealEstate University</a
                  >
                </div>
              </li>
              <li v-if="!loggedIn" class="nav-item">
                <NuxtLink class="nav-link" to="/raiseCapital"
                  >Raise Capital</NuxtLink
                >
              </li>
              <li v-else class="nav-item">
                <a
                  class="nav-link logout"
                  @click="handleLogout"
                  style="color: #89a851 !important"
                  >Log Out</a
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  // data(){
  //   return {
  //     isLoggedIn: false
  //   }
  // },
   middleware: 'CheckAuth',
     created(){
    if(process.client){
    this.$store.dispatch('auth/initAuth')
     console.log('mounted')
    }
   
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    userFullName() {
      if (!this.$store.state.auth.status.loggedIn) {
        return "";
      } else {
        if (this.$store.state.auth.user.first_name) {
          return `${this.$store.state.auth.user.first_name} ${this.$store.state.auth.user.last_name}`;
        } else {
          return " ";
        }
      }
    }
  },
  methods: {
    handleLogout() {
      this.$store
        .dispatch("auth/logout", this.user)
        .then(() => {
          this.$router.push("/");
        })
        .catch(() => {});
    }
  },
  watch: {
    $route(to) {
      if (this.$refs.navmenumob.classList.value) {
        if (this.$refs.navmenumob.classList.value === "modal show") {
          this.$refs.btntoggle.click();
          this.$router.push(to.fullPath);
        }
      }
    }
  }
};
</script>
<style scoped>
.logout {
  color: #89a851 !important;
}
</style>
