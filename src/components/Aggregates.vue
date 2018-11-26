

<template> 
<div class="jumbotron main-jumbotron custom-jumbotron" id="aggregate">
      <div class="container">
        <div class="content" data-aos="fade-in">
          <div class="row">
               <h2 class="text-center" style="padding-bottom: 30px; color:white;">{{title}}</h2>    
          </div>
          <div class="row" id="aggregate-products">
            <div class="col-md-12 text-center">
                <div data-aos="fade">
                    <h2 class="gold">Products</h2>
                    <p class="lead text-left col-sm-6" :key="index" v-for="(section, index) in productSections">
                        <ul :key="innerIndex" v-for="(product, innerIndex) in section.products">
                            <li>{{product.productName}}</li>  
                        </ul>
                    </p>
                </div>
            </div>
        </div> 
        <div class="row" id="aggregate-quary-sites">
            <div class="col-md-12 text-center">
                <div data-aos="fade">
                    <h2 class="gold">Quary Sites</h2>
                    <p class="lead text-left col-sm-6" :key="index" v-for="(quarySite, index) in quarySites">
                        <ul style="list-style-type: none;">
                            <li>
                                <h3>{{quarySite.title}}</h3>
                                <p>
                                    <span><strong>Location:</strong> {{quarySite.location}}</span>
                                    <br/>
                                    <span><strong>Project Name:</strong> {{quarySite.projectName}}</span>
                                    <br/>
                                    <span><strong>Lot Area:</strong> {{quarySite.lotArea}}</span>
                                    <br/>
                                    <span><strong>Aggregates:</strong> {{quarySite.aggregates}}</span>
                                    <br/>
                                    <span><strong>Capability:</strong> {{quarySite.capability}}</span>
                                </p>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>     
        </div>
      </div>
    </div>
</template>
<script>
import quarySites from "@/data/quarySites.json";
import productSection1 from "@/data/productSection1.json";
import productSection2 from "@/data/productSection2.json";

const title = "Aggregates";
const productSections = [productSection1, productSection2];

export default {
  name: "Aggregates",
  data: () => {
    return {
      quarySites,
      productSections,
      title
    };
  }
};
</script>

<style scoped>
/* h2 {
	color: white;
} */

h3 {
  color: white;
}

.custom-jumbotron {
  /* background-image: url(https://images.unsplash.com/photo-1519120126473-8be7aedcd6c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a55332dfc236b13f118ef77a36b4052f&auto=format&fit=crop&w=1350&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3eae6e84dcc92d3e96b39814a73002c6&auto=format&fit=crop&w=1287&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1505082527911-33423132c73d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ced17ce1f07a51c722e9f802176e5e42&auto=format&fit=crop&w=668&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1509453721491-c3af5961df76?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d0b1fc9a24ad1e028e0a1ff3e28f01ba&auto=format&fit=crop&w=750&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1489515229412-1f3a8f08dc34?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e71a7bf83a2ee0f744cf11b0554554f4&auto=format&fit=crop&w=1350&q=80); */
  /* background-image: url(https://images.unsplash.com/photo-1527199768775-bdabf8b32f61?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7c3d4d6196ff46a8fabff56843392833&auto=format&fit=crop&w=800&q=60); */
  /* background-image: url(https://images.unsplash.com/photo-1533378890784-b2a5b0a59d40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=054902654baaa326e52880319521d63f&auto=format&fit=crop&w=1321&q=80); */
  background-image: url(https://images.unsplash.com/photo-1541888660500-cce0122eadeb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1c84e32a6512d3f8567e73aaba926d7e&auto=format&fit=crop&w=1350&q=80);
  background-repeat: no-repeat;
  background-position: center;
  /* background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: cover;
	border-top: 2px solid black;
	border-bottom: 2px solid black; */
}
</style>
