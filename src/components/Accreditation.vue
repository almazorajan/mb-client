<template> 
  <section class="accreditation-section">
    <div class="container clearfix">
      	<div class="row services">
			<div class="col-md-12">
				<h2 class="h1" data-aos="fade" style="padding-bottom: 30px;">{{title}}</h2>
				<div class="row">
					<div class="col-sm-4 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/pcab.jpeg" width="85%" alt="">
							</div>
						</div>	
					</div>
					<div class="col-sm-4 text-center box box-services">
						<img src="img/gov-icons/manila.png" alt="">	
					</div>
					<div class="col-sm-4 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/bir.png" alt="">
							</div>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/sec.png" width="30%" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </section>
</template>

<script>
import DocumentDetailView from "@/components/DocumentDetailView";

const services = [
  {
    icon: "fas fa-map-marker-alt",
    name: "PCAB",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-city",
    name: "SEC",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-landmark",
    name: "BIR",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  },
  {
    icon: "fas fa-landmark",
    name: "Business Permit",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque nesciunt placeat amet 
		ducimus corporis esse magni hic et dicta quibusdam! Eum, necessitatibus aperiam 
		esse blanditiis laboriosam corporis quis maxime tenetur.`
  }
];
const title = "Accreditation";

export default {
  name: "Accreditation",
  components: {
    DocumentDetailView
  },
  data: () => {
    return {
      services,
      title
    };
  }
};
</script>

<style scoped>
.accreditation-section {
  /* background-image: url(https://images.unsplash.com/photo-1518169811655-27c3a4327016?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d31bd2512f92ca5444a1e501634257ca&auto=format&fit=crop&w=1350&q=80); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

/* CSS used here will be applied after bootstrap.css */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.ratio-4-3 {
  width: 100%;
  position: relative;
  background: url() 50% 50% no-repeat;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-clip: content-box; */
  /* background-attachment: initial; */
}
.ratio-4-3:before {
  display: block;
  content: "";
  padding-top: 75%;
}
</style>
