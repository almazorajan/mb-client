<template> 
  <section id="core-values">
    <div class="container">
        <div class="col-md-12">
            <h2 class="h1" data-aos="fade">{{title}}</h2>
            <div class="row">
                <div class="col-md-4 text-right" data-aos="fade-right">
                    <img src="https://images.unsplash.com/photo-1518600570419-81324064e9ae?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=04af4a3ac17780fdc82adf7e68b1f6ec&auto=format&fit=crop&w=1350&q=80" style="width: 100%;" alt="">
                    <!-- <img src="https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1350&q=80" style="width: 100%" alt=""> -->
                </div>
                <div class="col-md-8 text-left">
                <div data-aos="fade-right">
                    <h2>Quality</h2>
                    <p class="lead text-left">
                        We are Professionals permitted in developing and delivering quality services
                    </p>
                </div>
                <div data-aos="fade-left">
                    <h2>Unity</h2>
                    <p class="lead text-left">
                        We achieve more by working effectively and collectively in High – Performance teams.
                    </p>
                </div>
                <div data-aos="fade-right">
                    <h2>Innovation</h2>
                    <p class="lead text-left">
                        We constantly develop new ideas and adapt to the latest trends in the Industry to attain up-to-date outputs.
                    </p>
                </div>
                    <div data-aos="fade-left">
                    <h2>Customer-focused</h2>
                    <p class="lead text-left">
                        Our customer is our Priority. We are passionate about exceeding their expectations and making them Happy.
                    </p>
                </div>
                <div data-aos="fade-right">
                    <h2>Knowledge</h2>
                    <p class="lead text-left">
                        We are an information–driven company ommitted incontinuously learning about our business and the industry.
                    </p>
                </div>
                <div data-aos="fade-left">
                    <h2>Leadership</h2>
                    <p class="lead text-left">
                        We seek to be First in all our Endeavors. We are a step ahead in identifying and seizing market opportunities.
                    </p>
                </div>
                <div data-aos="fade-right">
                    <h2>Ability</h2>
                    <p class="lead text-left">
                        We deliver with Swiftness and Precision.
                    </p>
                </div>
                </div>
            </div> 
      	</div>
    </div>
  </section>
</template>

<script>
import ServiceDetailView from "@/components/ServiceDetailView";

const title = "Core Values";

export default {
  name: "Service",
  components: {
    ServiceDetailView
  },
  data: () => {
    return {
      title
    };
  }
};
</script>

<style scoped>
section#core-values {
  /* background-image: url(https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1350&q=80); */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
