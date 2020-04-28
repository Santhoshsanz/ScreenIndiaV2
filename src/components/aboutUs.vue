<template>
  <div :class="$style.mainContainer">
    <div class="oSliceSpacing o-container">
      <div :class="$style.splitScreen">
        <div :class="$style.content">
          <div>
            <h1>About Us</h1>
            <div class="para">
              For the last two decades, Screen India has earned its reputation
              for its design lead solution and providing high quality signage on
              time.
            </div>
          </div>
        </div>
        <div :class="$style.imageContent">
          <div :class="$style.dummmyDiv"></div>
          <div :class="$style.imageContainer">
            <img alt="Vue logo" src="./../assets/hero.png" />
          </div>
        </div>
      </div>
      <div :class="$style.description">
        We are proud of our signs, and place great importance on working closely
        with the end user, in partnership with architects and designers, or
        through building contractors and property agents.Our document only gives
        a modest indication of the vast range of signing schemes undertaken by
        Screen India. In this regard we are able to take carry out both large
        and small projects using our range of modular signing systems and will
        be happy to work with you to bring your plans to fruition.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About Us"
};
</script>
<style lang="scss" module>
.splitScreen {
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  @include above("large") {
    flex-direction: row-reverse;
  }
}
.content {
  flex-basis: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 70rem;
  @include above("large") {
    padding-left: 4rem;
  }
}

.imageContent {
  flex-basis: 45%;
  // position: relative;
}

.detail {
  padding: 4rem;
  font-size: 3rem;
}

.description {
  text-align: left;
  font-size: 2.1rem;
  padding: 0;
  @include above("large") {
    text-align: center;
    padding: 2rem;
  }
}

.dummmyDiv {
  height: 250px;
  @include above("small") {
    height: 300px;
  }
  @include above("medium") {
    height: 520px;
  }
  @include above("large") {
    height: 500px;
  }
}
.imageContainer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  @include above("large") {
    width: 45%;
  }
}

.mainContainer {
  position: relative;
}
</style>
