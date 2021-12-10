<template>
  <div class="container-technology">
      <div class="text-content">
         <p>The terminology...</p>
         <h1>{{tech.name}}</h1>
         <p class="description">{{tech.description}}</p>
      </div>
      <img :src="require('@/assets/technology/'+tech.images.portrait)" :alt="tech.name">
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      launchId: this.$route.params.id,
    };
  },
  computed: {
    tech() {
      return store.technology.find(
        (tech) => tech.id == this.launchId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
    .container-technology{
        display: flex;
        *{
            text-align: left;
        }
        .text-content{
        // border: 2px solid;
            padding-left: 100px;
            padding-top:40px;
            p:first-child{
                text-transform: uppercase;
            }
            p{
                color:gray
            }
            h1{
                font-size: 45px;
                color: rgb(194, 190, 190);
                text-transform: uppercase;
                font-weight: 100;
            }
            .description{
                line-height: 1.9rem;
                padding-right: 40%;
            }
        }
    }
</style>