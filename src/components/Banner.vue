<template>
    <div class="jumbotron main-jumbotron custom-jumbotron">
      <div class="container">
        <div class="content" data-aos="fade-in">
          <div class="row">
            <div class="col-md-4 text-right hidden-sm hidden-xs" data-aos="fade-right">
              <img src="@/assets/img/logo.png" class="megabuilder-logo hidden-sm" />
            </div>
            <div class="col-md-8 hidden-xs hidden-sm" style="line-height: 1" data-aos="fade-left">
              <h1 class="text-left">
              MEGA BUILDERS
              </h1>
              <p class="margin-bottom text-left gold-banner">
                & Bldg. Care Services Corporation
              </p>
            </div>

            <div class="col-md-4 text-center hidden-md hidden-lg hidden-xl" data-aos="fade-right">
              <img src="@/assets/img/logo.png" class="megabuilder-logo hidden-sm" />
            </div>
            <div class="col-md-8 text-center hidden-md hidden-lg hidden-xl" style="line-height: 1" data-aos="fade-left">
              <h1>
              MEGA BUILDERS
              </h1>
              <p class="margin-bottom gold-banner">
                & Bldg. Care Services Corporation
              </p>
            </div>
          </div>       
          <p><a href="#company-overview" class="btn btn-white btn-learn-more">Learn More</a></p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "Banner"
};
</script>

<style scoped>
.custom-jumbotron {
  padding-bottom: 94px;
  padding-top: 200px;
}

.gold-banner {
  color: #fbb121;
  font-weight: bold;
  font-size: 40px;
}

.btn-learn-more {
  margin-top: 100px;
}
</style>
