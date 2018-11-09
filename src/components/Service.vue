<template> 
  <section class="background-gray-lightest">
    <div class="container clearfix">
      <div class="row services">
        <div class="col-md-12">
			<h2 class="h1" data-aos="fade" style="padding-bottom: 30px;">{{title}}</h2>
			<div class="row">
				<div class="col-sm-3"  v-for="(service, index) in services" :key="index">
					<ServiceDetailView :service="service" :index="index" />	
				</div>
			</div>
      	</div>
    	</div>
    </div>
  </section>
</template>

<script>
import ServiceDetailView from "@/components/ServiceDetailView";
import serviceData from "@/data/services.json";

const title = "Services";

export default {
  name: "Service",
  components: {
    ServiceDetailView
  },
  created() {
    this.services = serviceData;
    console.log(this.services);
  },
  data: () => {
    return {
      services: [],
      title
    };
  }
};
</script>
