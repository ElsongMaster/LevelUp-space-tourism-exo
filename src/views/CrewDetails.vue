<template>
  <div class="container-crew">
      <div class="text-content">
         <p>{{member.role}}</p>
         <h1>{{member.name}}</h1>
         <p class="description">{{member.bio}}</p>
      </div>
      <img :src="require('@/assets/crew/'+member.images.png)" :alt="member.name">
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      memberId: this.$route.params.id,
    };
  },
  computed: {
    member() {
      return store.crew.find(
        (member) => member.id == this.memberId
      );
    },
  },
};
</script>

<style lang="scss" scoped>
    .container-crew{
        display: flex;
        *{
            text-align: left;
        }
        .text-content{
        // border: 2px solid;
            padding-left: 100px;
            padding-top:40px;
            // border: 2px solid;
            p:first-child{
                text-transform: uppercase;
                font-size: 25px;
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
        img{
            height: 70vh;
            width: 50vw;
        }
    }
</style>