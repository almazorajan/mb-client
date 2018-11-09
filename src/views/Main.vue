<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <NavBar msg="Welcome to Your Vue.js App"/>
    <Banner/>
    <CompanyOverview/>
    <CoreValue/>
    <Service/>
    <Project/>
    <Contact/>
    <!-- <Accreditation/> -->
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Accreditation from "@/components/Accreditation.vue";
import Banner from "@/components/Banner.vue";
import CompanyOverview from "@/components/CompanyOverview.vue";
import Contact from "@/components/Contact.vue";
import CoreValue from "@/components/CoreValue.vue";
import Footer from "@/components/Footer.vue";
import NavBar from "@/components/NavBar.vue";
import Project from "@/components/Project.vue";
import Service from "@/components/Service.vue";

import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "home",
  created() {
    AOS.init();
  },
  components: {
    Accreditation,
    Banner,
    CompanyOverview,
    Contact,
    CoreValue,
    Footer,
    NavBar,
    Project,
    Service
  }
};
</script>
