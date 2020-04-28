<template>
  <div :class="$style.buttonContainer">
    <slot></slot>
    Hi
  </div>
</template>

<script>
export default {
  name: "CButton"
};
</script>
<style lang="scss" module>
.buttonContainer {
  display: inline-block;
  background-color: red;
}
</style>
