<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <NavBar msg="Welcome to Your Vue.js App"/>
    <Banner/>
    <CompanyOverview/>
    <Service/>
    <Project/>
    <Contact/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
import CompanyOverview from "@/components/CompanyOverview.vue";
import Contact from "@/components/Contact.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Project from "@/components/Project.vue";
import Service from "@/components/Service.vue";

export default {
  name: "home",
  components: {
    Banner,
    CompanyOverview,
    Contact,
    Footer,
    NavBar,
    Project,
    Service
  }
};
</script>
