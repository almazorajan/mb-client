<template> 
  <section class="accreditation-section">
    <div class="container clearfix">
      	<div class="row services">
			<div class="col-md-12">
				<h2 class="h1" data-aos="fade" style="padding-bottom: 30px;">{{title}}</h2>
				<div class="row">

          <div class="col-md-3" v-for="(accreditation, index) in accreditations" :key="index">
            <AccreditationDetailView  :accreditation="accreditation" :index="index" />
          </div>

           <!-- <div class="col-md-3 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/sec.png" width="250px" alt="">
							</div>
						</div>
					</div> -->



					<!-- <div class="col-sm-3 text-center box box-services">
						<img src="img/gov-icons/manila.png" width="150px" alt="">	
					</div>

           <div class="col-sm-3 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/pcab.jpeg" width="220px" alt="">
							</div>
						</div>	
					</div>

					<div class="col-sm-3 text-center box box-services">
						<div class="post">
							<div class="image">
								<img src="img/gov-icons/bir.png" width="150px" alt="">
							</div>
						</div>
					</div> -->

				</div>
				<div class="row">
					
				</div>
			</div>
		</div>
	</div>
  </section>
</template>

<script>
import AccreditationDetailView from "@/components/AccreditationDetailView";
import accreditationData from "@/data/accreditations.json";

const accreditations = accreditationData;
const title = "Accreditation";

export default {
  name: "Accreditation",
  components: {
    AccreditationDetailView
  },
  data: () => {
    return {
      accreditations,
      title
    };
  }
};
</script>

<style scoped>
/* .accreditation-section {
	background-image: url(https://images.unsplash.com/photo-1518169811655-27c3a4327016?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d31bd2512f92ca5444a1e501634257ca&auto=format&fit=crop&w=1350&q=80);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
} */

/* CSS used here will be applied after bootstrap.css */
/* ul {
	list-style: none;
	margin: 0;
	padding: 0;
} */
/* .ratio-4-3 {
	width: 100%;
	position: relative;
	background: url() 50% 50% no-repeat;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-clip: content-box;
	background-attachment: initial;
} */
/* .ratio-4-3:before {
	display: block;
	content: "";
	padding-top: 75%;
} */
</style>
