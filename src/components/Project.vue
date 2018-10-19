<template>
    <section id="project">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="text-center padding-bottom-50">{{moduleName}}</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        
        <div class="col-sm-4" v-for="project in projects">
          <div class="post">
            <div class="image">
              <a href="javascript:void(0);">
                <img :src="project.thumbnail" alt="" class="card-image">
              </a>
            </div>
            <h3>
              <a href="">{{project.title}}</a>
            </h3>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="col-md-12 text-center">
          <p class="read-more"><a href="text.html" class="btn btn-ghost">View others...</a></p>
        </div>
      </div> -->
    </div>
  </section>
</template>

<script>
const moduleName = "Projects";
const projects = [
  {
    thumbnail: "img/projects/smdc-showroom.png",
    title: "SMDC Showroom (MOA)"
  },
  {
    thumbnail: "img/projects/university-of-perpetual-help.png",
    title: "University of Perpetual Help (Molino, Cavite)"
  },
  {
    thumbnail: "img/projects/mapua-canteen.png",
    title: "Mapua Canteen"
  }
];

export default {
  name: "Project",
  data: () => {
    return {
      moduleName,
      projects
    };
  }
};
</script>
