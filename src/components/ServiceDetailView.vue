<template>
  <div>
    <div class="box box-services">
      <div :onclick="onclickModalLink" data-aos="fade">
        <div class="icon"><i :class="this.service.icon"></i></div>
        <h4>{{this.service.name}}</h4>
      </div>  
    </div>
    <div :id="this.id" tabindex="-1" role="dialog" aria-labelledby="Login" aria-hidden="true" class="modal fade">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" data-dismiss="modal" aria-hidden="true" class="close">×</button>
            <h4 id="Login" class="modal-title">
              <i class="padding-right-10px" :class="this.service.icon"></i>
              <span id="modal-title">{{this.service.name}}</span>
            </h4>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-12">
                <p class="text-left text-muted">
                  {{this.service.desc}}
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12" v-if="!service.images || !service.images.length">
                <div class="text-center">
                  <h4>No photos available as of this moment.</h4>
                </div>
              </div>
              <div class="col-sm-4" :key="index" v-if="service.images && service.images.length" v-for="(imageUrl, index) in service.images">
                <div class="post">
                  <div class="image">
                    <img :src="imageUrl" alt="" class="card-image">
                  </div>
                </div>
              </div>
              <!-- <div class="col-sm-4">
                <div class="post">
                  <div class="image">
                    <a href="text.html">
                      <img src="img/projects/university-of-perpetual-help.png" alt="" class="card-image">
                    </a>
                  </div>
                </div>
              </div> -->
              <!-- <div class="col-sm-4">
                <div class="post">
                  <div class="image">
                    <a href="text.html">
                      <img src="img/projects/smdc-showroom.png" alt="" class="card-image">
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-sm-4">
                <div class="post">
                  <div class="image">
                    <a href="text.html">
                      <img src="img/projects/mapua-canteen.png" alt="" class="card-image">
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
  name: "ServiceDetailView",
  computed: {
    id() {
      return `${this.index}-${this.service.name.replace(/\s+/g, "").trim()}`;
    },
    onclickModalLink() {
      return `$('#${this.id}').modal('show')`;
    }
  },
  props: {
    index: Number,
    service: Object
  },
  watch: {
    service() {
      console.log(this.service);
    }
  }
};
</script>
