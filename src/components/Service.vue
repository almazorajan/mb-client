<template> 
  <section class="background-gray-lightest">
    <div class="container clearfix">
      <div class="row services">
        <div class="col-md-12">
					<h2 class="h1" data-aos="fade">{{title}}</h2>
					<div class="row">
						<div class="col-sm-3" v-for="(service, index) in services">
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

const services = [
  {
    icon: "fas fa-map-marker-alt",
    name: "Site Development",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-city",
    name: "Structural",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-landmark",
    name: "Civil",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-pencil-ruler",
    name: "Architectural",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-bolt",
    name: "Electrical",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-paint-roller",
    name: "Painting",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-tint",
    name: "Water-proofing",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-vector-square",
    name: "Plumbing",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  }
];
const title = "Services";

export default {
  name: "Service",
  components: {
    ServiceDetailView
  },
  data: () => {
    return {
      services,
      title
    };
  }
};
</script>
