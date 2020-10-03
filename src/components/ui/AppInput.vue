<template>
  <input
    :type="type"
    v-model="inputValue"
    @input="input"
    class="input"
    min="0"
  />
</template>

<script>
export default {
  props: ["type", "initialInputValue"],
  data() {
    return {
      inputValue: this.initialInputValue
    };
  },
  methods: {
    input(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  padding: 10px;
  width: 50%;
}
</style>