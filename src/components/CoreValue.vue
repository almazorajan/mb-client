

<template> 
<div class="jumbotron main-jumbotron custom-jumbotron">
      <div class="container">
        <div class="content" data-aos="fade-in">
          <div class="row">
               <h2 class="text-center" style="padding-bottom: 30px; color:white;">{{title}}</h2>    
          </div>
          <div class="row">
   
            <div class="col-md-12 text-center">
                <div data-aos="fade">
                    <h2 class="gold">Quality</h2>
                    <p class="lead text-center">
                        We are Professionals permitted in developing and delivering quality services
                    </p>
                </div>
                <div data-aos="fade">
                    <h2 class="gold">Unity</h2>
                    <p class="lead text-center">
                        We achieve more by working effectively and collectively in High – Performance teams.
                    </p>
                </div>
                <div data-aos="fade">
                    <h2 class="gold">Innovation</h2>
                    <p class="lead text-center">
                        We constantly develop new ideas and adapt to the latest trends in the Industry to attain up-to-date outputs.
                    </p>
                </div>
                    <div data-aos="fade">
                    <h2 class="gold">Customer-focused</h2>
                    <p class="lead text-center">
                        Our customer is our Priority. We are passionate about exceeding their expectations and making them Happy.
                    </p>
                </div>
                <div data-aos="fade">
                    <h2 class="gold">Knowledge</h2>
                    <p class="lead text-center">
                        We are an information–driven company ommitted incontinuously learning about our business and the industry.
                    </p>
                </div>
                <div data-aos="fade">
                    <h2 class="gold">Leadership</h2>
                    <p class="lead text-center">
                        We seek to be First in all our Endeavors. We are a step ahead in identifying and seizing market opportunities.
                    </p>
                </div>
                <div data-aos="fade">
                    <h2 class="gold">Ability</h2>
                    <p class="lead text-center">
                        We deliver with Swiftness and Precision.
                    </p>
                </div>
            </div>
        </div>     
        </div>
      </div>
    </div>
</template>
<script>
const title = "Core Values";

export default {
  name: "CoreValue",
  data: () => {
    return {
      title
    };
  }
};
</script>

<style scoped>
/* h2 {
	color: white;
} */

.custom-jumbotron {
  /* background-image: url(https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1350&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3eae6e84dcc92d3e96b39814a73002c6&auto=format&fit=crop&w=1287&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1505082527911-33423132c73d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ced17ce1f07a51c722e9f802176e5e42&auto=format&fit=crop&w=668&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1509453721491-c3af5961df76?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0b1fc9a24ad1e028e0a1ff3e28f01ba&auto=format&fit=crop&w=750&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71a7bf83a2ee0f744cf11b0554554f4&auto=format&fit=crop&w=1350&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c3d4d6196ff46a8fabff56843392833&auto=format&fit=crop&w=800&q=60); */
  background-image: url(https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=054902654baaa326e52880319521d63f&auto=format&fit=crop&w=1321&q=80);
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	border-top: 2px solid black;
	border-bottom: 2px solid black; */
}
</style>
