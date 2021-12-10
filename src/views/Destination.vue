<template>
  <div class="Destination">
    <div class="main-container">
      <h2><span>01</span> pick your destination</h2>
      <div class="content-router">
        <div class="nav-destination">
          <div class="nav-link-content">
            <router-link
              class="router-link"
              v-for="destination in destinations"
              :key="destination.key"
              :to="{
                name: 'DestinationDetails',
                params: { nameExtra: destination.name },
              }"
            >
              {{ destination.name }}</router-link
            >
          </div>
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
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped lang="scss">
.Destination {
  background-image: url("../assets/destination/background-destination-desktop.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  height: fit-content;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-container {
    height: fit-content;
    width: 80vw;
    // border: 2px solid;
    margin-top: 200px;
    h2 {
      text-align: left;
      color: white;
      text-transform: uppercase;
      font-weight: 200;
      span{
          color: gray;
      }
    }
    .content-router {
        .nav-destination{
            width: 100%;
            display: flex;
            justify-content: flex-end;

            .nav-link-content{
                width: 40%;
                display: flex;
                justify-content: space-between;
                margin-right: 50px;
              .router-link{
                color: rgba(201, 190, 190, 0.9);
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 100;
                position: relative;
                height: 75px;
                // border: 2px solid;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .router-link-exact-active::before {
                content:'';
                height: 1px;
                width: 100%;
                background-color: white;
                position: absolute;
                bottom: 0;
                // z-index: 3;
                
              }

            }

        }
    }
  }
}
</style>
