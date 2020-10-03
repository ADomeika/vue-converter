<template>
  <div class="wrapper">
    <Converter
      buttonTitle="Save to Favourites"
      @onButtonClick="onSaveToFavouritesClick"
      initialAmount="0"
      initialBaseCurrency="GBP"
      initialTargetCurrency="USD"
    />
  </div>
</template>

<script>
import Converter from "@/components/layouts/Converter.vue";

export default {
  components: {
    Converter
  },
  methods: {
    onSaveToFavouritesClick({ baseAmount, baseCurrency, targetCurrency }) {
      this.$store.dispatch("saveToFavourites", {
        id: Math.random(),
        baseAmount,
        baseCurrency,
        targetCurrency
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
}
</style>
