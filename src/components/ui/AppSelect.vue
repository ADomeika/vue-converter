<template>
  <select v-model="selected" @change="change" class="currency-selection">
    <template v-for="(value, key) in data">
      <option :key="key" :value="key">{{ value }} ({{ key }})</option>
    </template>
  </select>
</template>

<script>
export default {
  props: ["data", "initialSelection"],
  data() {
    return {
      selected: this.initialSelection || "GBP"
    };
  },
  methods: {
    change(event) {
      this.$emit("change", event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.currency-selection {
  width: 50%;
  font-size: 16px;
  padding: 5px;
}
</style>