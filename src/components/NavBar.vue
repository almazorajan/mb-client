<template>
  <header class="header">
    <div role="navigation" class="navbar navbar-default navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a href="index.html" class="navbar-brand">
            <p>
              <img src="@/assets/img/logo.png" class="megabuilder-logo-mini hidden-sm hidden-xs">
              Mega Builders
            </p>
          </a>
          <div class="navbar-buttons">
            <button type="button" data-toggle="collapse" data-target=".navbar-collapse" class="navbar-toggle navbar-btn">
              Menu<i class="fa fa-align-justify"></i>
            </button>
          </div>
        </div>
        <div id="navigation" class="collapse navbar-collapse navbar-right">
          <ul class="nav navbar-nav">
            <li><a href="#company-overview">About Us</a></li>
            <li><a href="#project">Projects</a></li>
            <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle">Aggregates <b class="caret"></b></a>
              <ul class="dropdown-menu drop-down-style">
                <li><a href="#aggregate-products" class="text-white">Products</a></li>
                <li><a href="#aggregate-quary-sites" class="text-white">Quary Sites</a></li>
              </ul>
            </li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.drop-down-style {
  background-color: red;
}

.text-white {
  color: white;
}
</style>
