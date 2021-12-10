<template>
  <div class="container-details">
    <div class="container-img">
      <img
        :src="require('@/assets/destination/' + destination.images.png)"
        :alt="destination.name"
      />
    </div>

    <div class="container-text">
      <h1>{{ destination.name }}</h1>
      <p>{{ destination.description }}</p>
      <div class="container-footer">
        <div class="container-details-footer">
          <p class="title">avg. distance</p>
          <p class="data">{{ destination.distance }}</p>
        </div>
        <div class="container-details-footer">
          <p class="title">est. travel time</p>
          <p class="data">{{ destination.travel }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
    props:{
        nameExtra:{

            nameExtra:String,
            required:true
        }
    },
  data() {
    return {
      destName: this.$route.params.nameExtra,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.name == this.destName
      );
    },
  },
};
</script>

<style lang="scss">
.container-details {
  height: 100%;
  width: 100%;
//   border: 2px solid;
  display: flex;

  .container-img {
    // height: 100%;
    // width: 100%;
    flex: 1;
  }
  .container-text {
    height: 400px;
    width: 50%;
    // border: 2px solid;
    h1 {
      text-align: left;
      color: rgba(255, 255, 255, 0.719);
      font-size: 60px;
      text-transform: uppercase;
      font-weight: 200;
      padding-left: 5px;
    }

    p {
      color: gray;
      text-align: left;
      padding-right: 40px;
      line-height: 1.8;
    }
  }
  .container-footer {
    display: flex;
    border-top: 1px solid rgba(158, 158, 158,0.3);
    .container-details-footer {
        width: 50%;
        padding: 10px;
      .title {
        font-size: 13px;
      }
      .data {
        font-size: 30px;
        font-weight: 300;
        color: rgb(204, 203, 203);
        text-transform: uppercase;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
