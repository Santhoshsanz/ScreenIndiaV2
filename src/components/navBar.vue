<template>
  <section :class="$style.navSection">
    <nav role="navigation" :class="[$style.mobNov, { [$style.openNav]: open }]">
      <div
        :class="[$style.menu, $style.btn2, { [$style.open]: open }]"
        data-menu="2"
        @click="toggle()"
      >
        <div :class="$style.icon"></div>
      </div>
      <ul :class="$style.menuSection" v-if="open">
        <li v-for="menu of menus" :key="menu" :class="$style.menus">
          <a href="#" :class="$style.menuItem">{{ menu }}</a>
        </li>
      </ul>
    </nav>
    <transition name="fade">
      <header :class="$style.navHolder">
        <div>
          <img
            alt="Vue logo"
            src="./../assets/logo.png"
            style="max-width:150px"
          />
        </div>
        <nav :class="$style.navContainer">
          <div>
            <ul :class="$style.menuSection">
              <li v-for="menu of menus" :key="menu" :class="$style.menus">
                <a href="#" :class="$style.menuItem">{{ menu }}</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </transition>
  </section>
</template>

<script>
export default {
  name: "NavBar",
  data: () => {
    return {
      menus: ["Our Products", "About", "Clients", "Contact Us"],
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  }
};
</script>
<style lang="scss" module>
$dark: #212121;

.navContainer {
  display: none;
  justify-content: center;
  align-items: center;
  display: none;
  @include above("large") {
    display: flex;
  }
}
.menuSection {
  transition-duration: 0.5s;
  flex-direction: column;
  padding: 10rem 4rem;
  @include above("large") {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0;
  }
}
.menus {
  padding: 1rem 3rem;
}
.navHolder {
  display: flex;
  justify-content: end;
  margin: 0.32rem 1rem;
  @include above("medium") {
    margin: 1rem 3.2rem;
  }
  @include above("large") {
    margin: 2rem 5rem;
  }
  @include above("medium") {
    justify-content: space-between;
  }
}

.menuItem {
  text-decoration: none;
  font-size: 2.1rem;
  color: color("primary-text");
}

@mixin btn($left, $top) {
  position: absolute;
  width: 60px;
  height: 60px;
  top: $top;
  left: $left;
  transition-duration: 0.5s;
}

@mixin icon($height, $width) {
  transition-duration: 0.5s;
  position: absolute;
  height: $height;
  width: $width;
  top: 30px;
  background-color: $dark;
  border-radius: 0.3rem;
}

@mixin icon-before($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $dark;
  content: "";
  top: $top;
  border-radius: 0.3rem;
}

@mixin icon-after($height, $width, $top) {
  transition-duration: 0.5s;
  position: absolute;
  width: $width;
  height: $height;
  background-color: $dark;
  content: "";
  top: $top;
  border-radius: 0.3rem;
}

.btn2 {
  @include btn(-80px, 8px);

  .icon {
    @include icon(8px, 60px);

    &:before {
      @include icon-before(8px, 60px, -20px);
    }

    &:after {
      @include icon-after(8px, 60px, 20px);
    }
  }

  &.open {
    transition-duration: 0.5s;
    left: 8px;
    .icon {
      transition-duration: 0.5s;
      background: transparent;

      &:before {
        transform: rotateZ(45deg) scaleX(1.25) translate(13px, 13px);
      }

      &:after {
        transform: rotateZ(-45deg) scaleX(1.25) translate(12px, -12px);
      }
    }
  }
  &:hover {
    cursor: pointer;
  }
}

.mobNov {
  right: 0;
  height: 100%;
  position: fixed;
  // border: 1px solid black;
  display: block;
  max-width: 400px;
  @include above("large") {
    display: none;
  }
  transition-duration: 0.5s;
  &.openNav {
    width: 100%;
    background-color: #eff5f7;
  }
}
x .navSection {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
