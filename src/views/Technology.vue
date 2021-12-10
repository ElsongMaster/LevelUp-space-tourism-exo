<template>
  <div class="Technology">
    <div class="main-container">
      <h2><span>03</span> space launch 101</h2>
      <div class="container-router-content">
        <div class="container-router-link">
          <router-link
            v-for="tech in technology"
            :key="tech.id"
            :to="{
              name: 'TechnologyDetails',
              params: { id: tech.id },
            }"
            class="link-line"
          >
            {{ tech.id }}
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
      technology: store.technology,
    };
  },
};
</script>

<style lang="scss" scoped>
.Technology {
  background-image: url("../assets/technology/background-technology-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  min-height: 95vh;
  width: 100vw;
  z-index: -1;
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
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      height: 100%;
      min-height: 69vh;
      width: 100px;
      .link-line {
        color: rgb(189, 186, 186);
        text-decoration: none;
        font-size: 35px;
        font-weight: 100;
        border: 1px solid gray;
        padding: 0.7em 0.9em;
        border-radius: 50%;
      }
      .router-link-exact-active {
        background-color: white;
        color: rgb(83, 83, 83);
      }
    }
  }
}
</style>
