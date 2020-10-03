<template>
  <div>
    <p>Favourites:</p>
    <template v-for="favItem in favourites">
      <Converter
        buttonTitle="Save"
        :key="favItem.id"
        :initialAmount="favItem.baseAmount"
        :initialBaseCurrency="favItem.baseCurrency"
        :initialTargetCurrency="favItem.targetCurrency"
        @onButtonClick="item => onSaveClick({ ...item, id: favItem.id })"
      />
    </template>
  </div>
</template>

<script>
import Converter from "@/components/layouts/Converter.vue";

export default {
  components: {
    Converter
  },
  computed: {
    favourites() {
      return this.$store.state.favourites;
    }
  },
  methods: {
    onSaveClick(favItem) {
      this.$store.dispatch("saveFavourite", {
        id: favItem.id,
        baseAmount: favItem.baseAmount,
        baseCurrency: favItem.baseCurrency,
        targetCurrency: favItem.targetCurrency
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>