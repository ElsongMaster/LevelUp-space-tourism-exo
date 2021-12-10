<template>
  <div class="home">
    <div class="main-content">
      <div class="text-content">
        <p>  So, you want to travel to</p>
        <h1>Space</h1>
        <p>  Let’s face it; if you want to go to space, you might as well genuinely go to 
  outer space and not hover kind of on the edge of it. Well sit back, and relax 
  because we’ll give you a truly out of this world experience!</p>
      </div>

      <div class="container-explore"><span class="explore">Explore</span></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: "Home",

};
</script>


<style scoped lang="scss">
  .home{
    background-image: url('../assets/home/background-home-desktop.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    .main-content{
      width:80%;
      height: 50%;
      min-height: 50vh;
      display: flex;
      margin-bottom: 100px;
      .text-content,.container-explore{
        width: 50%;
        height:100%;
        // border: 2px solid;
        p:first-child,h1{
          text-transform: uppercase;
        }
        p:first-child{
          color: gray;
          letter-spacing: 1px;
        }
        h1{
          font-size: 100px;
          font-weight: 100;
          letter-spacing: .2rem;
          margin: 0;
          color: rgb(224, 214, 214);
        }
        p:last-child{
          padding-right: 35%;
          min-width: 300px;
          line-height: 1.9;
          margin: 10px 0 0 0;
          color: gray;
        }
      }
      .text-content{
        *{
          text-align: left;
        }
      }
      .container-explore{
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          // display: inline-flex !important;
          // width: fit-content;
          // height: fit-content;
          // border: 2px solid;
          color: gray;
          text-transform: uppercase;
          font-size: 30px;
          font-weight: 100;
          letter-spacing: 2px;
          padding: 4em 2em;
          background-color: white;
          border-radius: 50%;
        }
      }
    }
  }
</style>
