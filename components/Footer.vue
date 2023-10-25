<template>
  <footer>
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <NuxtLink class="navbar-brand text-capitalize" to="/"
          >RealEstate Capital</NuxtLink
        >
        <ul class="navbar-nav mr-auto lg-device">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/invest">Invest</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/ourFrim">our firm</NuxtLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Resources Center</a>
            <ul class="list-unstyled">
              <li>
                <NuxtLink class="nav-link" to="/faq">FAQ</NuxtLink>
              </li>
              <li>
                <a class="nav-link" href="http://blog.accretecap.com/news"
                  >the blog “Accrue | Insights”</a
                >
                <!-- <NuxtLink class="nav-link" to="/resourceCenterInside"
                  >the blog “Accrue | Insights”</NuxtLink
                > -->
              </li>
              <li>
                <a class="nav-link" href="http://blog.accretecap.com/news"
                  >RealEstate University</a
                >
                <!-- <NuxtLink class="nav-link" to="/resourceCenterUniversity"
                  >RealEstate University</NuxtLink
                > -->
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/raiseCapital"
              >raise capital</NuxtLink
            >
          </li>
        </ul>
        <div class="right-block">
          <p class="lg-device">© Copyright 2020. All Rights Reserved.</p>
          <ul class="social d-flex list-unstyled justify-content-between">
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer"
                ><img
                  src="./../assets/img/insta.png"
                  alt="instagram"
                  sizes=""
                  srcset=""
              /></a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer"
                ><img
                  src="./../assets/img/fb.png"
                  alt="facebook"
                  sizes=""
                  srcset=""
              /></a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer"
                ><img
                  src="./../assets/img/twt.png"
                  alt="twitter"
                  sizes=""
                  srcset=""
              /></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {};
</script>
