<template>
  <div>
    <div class="box box-services">
      <div :onclick="onclickModalLink" data-aos="fade">
        
        <div class="post">
          <div class="image">
            <img :src="accreditation.thumbnail" :width="accreditation.thumbnailWidth" alt="">
          </div>
        </div>
      </div>  
    </div>
    <div :id="this.id" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" class="modal fade">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button>
            <h4 id="Login" class="modal-title text-center">
              <!-- <i class="padding-right-10px" :class="this.accreditation.icon"></i> -->
              <img :src="accreditation.thumbnail" :width="accreditation.thumbnailWidth" style="padding-bottom: 20px;" alt="">
              <br/>
              <span id="modal-title">{{this.accreditation.name}}</span>
            </h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <p class="text-left text-muted">
                  {{this.accreditation.desc}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12" v-if="!accreditation.images || !accreditation.images.length">
                <div class="text-center">
                  <h4>No photo/s available as of this moment.</h4>
                </div>
              </div>
              <div class="col-sm-12" v-if="accreditation && accreditation.images && accreditation.images.length" v-for="(image, index) in accreditation.images" :key="index">
                <div class="post">
                  <div class="image text-center">
                    <img :src="image" alt="">
                  </div>
                </div>
              </div>
              <!-- <div class="col-sm-4">
                <div class="post">
                  <div class="image">
                    <a href="text.html">
                      <img src="img/projects/smdc-showroom.png" alt="" class="card-image">
                    </a>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>	
</template>

<script>
export default {
  name: "AccreditationDetailView",
  computed: {
    id() {
      return `${this.index}-${this.accreditation.name
        .replace(/\s+/g, "")
        .trim()}`;
    },
    onclickModalLink() {
      return `$("[id='${this.id}']").modal('show')`;
    }
  },
  props: {
    index: Number,
    accreditation: Object
  }
};
</script>
