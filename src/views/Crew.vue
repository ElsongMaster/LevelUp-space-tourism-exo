<template>
  <div class="Crew">
    <div class="main-container">
      <h2><span>03</span> meet your crew</h2>
      <div class="container-router-content">
        <div class="container-router-link">
          <router-link
            v-for="member in crew"
            :key="member.id"
            :to="{
              name: 'CrewDetails',
              params: { id: member.id },
            }"
            class="link-line"
          >
          </router-link>
        </div>
        <router-view :key="$route.path" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  data() {
    return {
      crew: store.crew,
    };
  },
};
</script>

<style lang="scss" scoped>
.Crew {
  background-image: url("../assets/crew/background-crew-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;

  h2 {
    margin-top: 150px;
    text-align: left;
    padding-left: 100px;
    color: rgb(216, 215, 215);
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 0.2rem;
    span {
      color: gray;
    }
  }
  .container-router-content {
    height: 100%;
    min-height: 60vh;
    width: 90vw;
    display: flex;
    padding-left: 100px;
    .container-router-link {
      height: 100px;
      width: 200px;
      display: flex;
      justify-content: space-between;
      position: absolute;
      bottom: 0;
      left: 13vw;

      .link-line {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: rgb(165, 160, 160);
      }
      .router-link-exact-active {
        transform: scale(1.3);
        background-color: white;
      }
    }
  }
}
</style>
