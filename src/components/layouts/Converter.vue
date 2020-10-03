<template>
  <div class="converter-wrapper">
    <p class="label">From:</p>
    <div class="container">
      <AppInput
        @input="onBaseAmountInput"
        type="number"
        :initialInputValue="baseAmount"
      />
      <AppSelect
        :data="currencies"
        @change="onBaseCurrencyChange"
        :initialSelection="baseCurrency"
      />
    </div>

    <p class="label">To:</p>
    <div class="container">
      <AppSelect
        :data="currencies"
        @change="onTargetCurrencyChange"
        :initialSelection="targetCurrency"
      />
    </div>

    <p class="label" v-if="baseAmount > 0">
      {{ baseAmount | formatNumber }} {{ baseCurrency }} --->
      {{ targetAmount | formatNumber }}
      {{ targetCurrency }}
    </p>

    <AppButton @click="click" :title="buttonTitle" />
  </div>
</template>

<script>
import api from "@/api";
import AppButton from "../ui/AppButton";
import AppInput from "../ui/AppInput";
import AppSelect from "../ui/AppSelect";
import currencies from "@/assets/data/currencies.json";
import formatNumber from "@/filters/formatNumber";

export default {
  props: [
    "buttonTitle",
    "initialAmount",
    "initialBaseCurrency",
    "initialTargetCurrency"
  ],
  components: {
    AppButton,
    AppInput,
    AppSelect
  },
  data() {
    return {
      currencies,
      baseCurrency: this.initialBaseCurrency,
      baseAmount: this.initialAmount,
      targetCurrency: this.initialTargetCurrency,
      targetAmount: 0,
      rate: 0,
      inverseRate: 0,
      data: {}
    };
  },
  methods: {
    async getRates(currency) {
      const { data } = await api.get(`/${currency}.json`);
      this.rate = data[this.targetCurrency.toLowerCase()].rate;
      this.inverseRate = data[this.targetCurrency.toLowerCase()].inverseRate;
      this.data = data;
      this.targetAmount = this.baseAmount * this.rate;
    },
    async onBaseCurrencyChange(value) {
      await this.getRates(value);
      this.baseCurrency = value;
    },
    onBaseAmountInput(value) {
      this.baseAmount = value;
      this.targetAmount = this.baseAmount * this.rate;
    },
    onTargetCurrencyChange(value) {
      this.targetCurrency = value;
      this.rate = this.data[this.targetCurrency.toLowerCase()].rate;
      this.inverseRate = this.data[
        this.targetCurrency.toLowerCase()
      ].inverseRate;
      this.targetAmount = this.baseAmount * this.rate;
    },
    click() {
      this.$emit("onButtonClick", {
        baseAmount: this.baseAmount,
        baseCurrency: this.baseCurrency,
        targetCurrency: this.targetCurrency
      });
    }
  },
  async mounted() {
    await this.getRates(this.baseCurrency);
  },
  filters: {
    formatNumber
  }
};
</script>

<style lang="scss" scoped>
.converter-wrapper {
  border: 1px solid #000;
}
.label {
  padding: 5px 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
}
</style>