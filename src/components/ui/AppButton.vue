<template>
  <button @click="click" class="button">
    {{ title }}
  </button>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  background-color: gold;
  border: 1px solid grey;
  margin-bottom: 10px;
  padding: 10px 20px;
}
</style>