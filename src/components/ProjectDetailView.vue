<template>
  <div>
    <div class="box box-services">
      <div :onclick="onclickModalLink" data-aos="fade">
        <div class="post">
          <div class="image">
            <img :src="project.thumbnail" class="card-image" alt="">
          </div>
          <h4>{{this.project.projectName}}</h4>
        </div>
      </div>  
    </div>
    <div :id="this.id" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" class="modal fade">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button>
            <h4 id="Login" class="modal-title">
              <i class="padding-right-10px" :class="this.project.icon"></i>
              <span id="modal-title">{{this.project.projectName}}</span>
            </h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <p class="text-left text-muted">
                  {{this.project.desc}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12" v-if="!project || !project.images || !project.images.length">
                <div class="text-center">
                  <h4>No photos available as of this moment.</h4>
                </div>
              </div>
              <div class="col-sm-4" :key="index" v-if="project && project.images && project.images.length" v-for="(imageUrl, index) in project.images">
                <div class="post">
                  <div class="image">
                    <img :src="imageUrl" alt="" class="card-image">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>	
</template>

<script>
export default {
  name: "ProjectDetailView",
  computed: {
    id() {
      return `${this.index}-${this.project.projectName
        .replace(/\s+/g, "")
        .trim()}`;
    },
    onclickModalLink() {
      return `$('#${this.id}').modal('show')`;
    }
  },
  props: {
    index: Number,
    project: Object
  }
};
</script>
