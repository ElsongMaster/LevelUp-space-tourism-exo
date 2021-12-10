<template>

  <header>
    <div class="contaier-logo">
      <img :src="require('@/assets/shared/logo.svg')" alt="" />
      <div class="container-border"></div>
    </div>
    <div id="nav">
      <div class="nav-content">
        <router-link class="router-link" to="/"><span>00</span> Home</router-link>
        <router-link class="router-link"  to="/Destination/Moon"><span>01</span> Destination</router-link>
        <router-link class="router-link"  to="/Crew/1"><span>02</span> Crew</router-link>
        <router-link class="router-link"  to="/Technology/1"><span>03</span> Technology</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style  lang="scss">
header {
    position: absolute;
    width: 100%;
    z-index: 3;
  .contaier-logo {
    width: 40vw;
    display: flex;
    align-items: center;
    // border: 2px solid;
    height: 100px;
    margin-left: 50px;
    img {
      height: 50px;
      width: 50px;
      // background-color: gray;
    }
    .container-border {
      margin-top: 0;
      height: 1px;
      width: 80%;
      margin-left: 50px;
      border-top: 1px solid gray;
      // border: 2px solid green;
    }
  }
  #nav {
    display: flex;
    // justify-content: center;
    align-items: center;
    height: 20px;
    width: 55vw;
    position: absolute;
    right: 0;
    top: 20px;
    background-color: rgba(243, 236, 236, 0.05);
    z-index: 3;

    .nav-content {
      display: flex;
      justify-content: space-between;
      width: 60%;
      margin-left: 40px;

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
        // padding-bottom: 10px;
       span {
          color: white;
          padding-right: 5px;
        }
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
</style>
