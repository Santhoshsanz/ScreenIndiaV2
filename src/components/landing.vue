<template>
  <section>
    <NavBar />
    <div class="o-container">
      <div :class="$style.fullHeight">
        <div :class="$style.heroFlex">
          <div :class="$style.heroText">
            <div :class="$style.heroContent">
              <h1>Welcome To Screen India</h1>
              <div class="para">
                Secondary Text to DEscribe SOme Data in here
              </div>
              <span class="smallText">Caption Text Smaller Text</span>
            </div>
          </div>
          <div :class="$style.heroImage"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import NavBar from "./../components/navBar";

export default {
  name: "Landing",
  components: {
    NavBar
  }
};
</script>

<style lang="scss" module>
.fullHeight {
  min-height: calc(100vh - 19.372rem);
  display: flex;
  align-items: center;
}
.heroText {
  @include above("large") {
    max-width: 70rem;
  }
  flex: 1;
  display: flex;
  align-items: center;
}

.heroImage {
  flex: 1;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -o-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -webkit-transition: all 0.25s ease-in-out;
  -moz-transition: all 0.25s ease-in-out;
  -ms-transition: all 0.25s ease-in-out;
  -o-transition: all 0.25s ease-in-out;
  transition: all 0.25s ease-in-out;
  background-image: url("./../assets/welcome.jpg");
  background-size: 100% 100%;
  min-height: 24rem;
  margin-left: -3.2rem;
  margin-right: -3.2rem;

  @include above("large") {
    min-height: 50rem;
    border-radius: 1rem;
  }
  @include above("medium") {
    min-height: 50rem;
    margin-left: -5rem;
    margin-right: -5rem;
  }
}
.heroFlex {
  display: flex;
  width: 100%;

  flex-direction: column-reverse;
  @include above("large") {
    flex-direction: inherit;
  }
}

.heroContent {
  padding: 3rem;
}
</style>
