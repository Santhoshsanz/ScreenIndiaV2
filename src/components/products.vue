<template>
  <div class="o-container oSliceSpacing">
    <p class="o-preheader">Products</p>
    <GalleryCard></GalleryCard>
    <!-- <div :class="$style.overLayContainer">
    <div :class="$style.overlayPic">

  <picture v-for="(image,value) in gallery"  :key="value" :class="$style.pictureContainer">
    <img :src="image">
  </picture>
    </div>
    </div> -->

    <div id="app">
      <agile
        class="main"
        ref="main"
        :options="options1"
        :as-nav-for="asNavFor1"
      >
        <div
          class="slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="`slide--${index}`"
        >
          <img :src="slide" />
        </div>
      </agile>
      <agile
        class="thumbnails"
        ref="thumbnails"
        :options="options2"
        :as-nav-for="asNavFor2"
      >
        <div
          class="slide slide--thumbniail"
          v-for="(slide, index) in slides"
          :key="index"
          :class="`slide--${index}`"
          @click="$refs.thumbnails.goTo(index)"
        >
          <img :src="slide" />
        </div>
        <template slot="prevButton"
          ><i class="fas fa-chevron-left"></i
        ></template>
        <template slot="nextButton"
          ><i class="fas fa-chevron-right"></i
        ></template>
      </agile>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  // data(){
  //   return {gallery:[
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png'),
  //   require('./../assets/gallery.png')]}
  // }
  props: {},
  data() {
    return {
      asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false
      },

      options2: {
        autoplay: true,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },

          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ]
      },

      slides: [
        "https://images.unsplash.com/photo-1453831362806-3d5577f014a4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1496412705862-e0088f16f791?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1472926373053-51b220987527?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        "https://images.unsplash.com/photo-1497534547324-0ebb3f052e88?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
      ]
    };
  },
  mounted() {
    this.asNavFor1.push(this.$refs.thumbnails);
    this.asNavFor2.push(this.$refs.main);
  }
};
</script>
<style lang="scss">
.overlayPic {
  display: flex;
}

.overLayContainer {
  overflow: hidden;
}

.pictureContainer {
  flex: 0 0 100%;
  flex-basis: 100%;
  border: 1px solid black;
}

.main {
  margin-bottom: 30px;
}

.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.thumbnails .agile__nav-button {
  position: absolute;
  top: 50%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}
.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  height: 450px;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>
