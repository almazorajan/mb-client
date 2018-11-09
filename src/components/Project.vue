<template>
    <section id="project">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1 class="text-center padding-bottom-50" data-aos="fade">{{moduleName}}</h1>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-sm-4" :key="index" v-for="(project, index) in projects">  
            <ProjectDetailView :index="index" :project="project" />
          </div>
        </div>
      </div>
  </section>
</template>

<script>
import ProjectDetailView from "@/components/ProjectDetailView";
import projectData from "@/data/projects.json";

const moduleName = "Projects";

export default {
  name: "Project",

  components: {
    ProjectDetailView
  },

  created() {
    this.projects = projectData;
  },

  data() {
    return {
      moduleName,
      projects: []
    };
  }
};
</script>
