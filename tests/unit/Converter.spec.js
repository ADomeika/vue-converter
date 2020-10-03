import { shallowMount } from '@vue/test-utils';

import Converter from '@/components/layouts/Converter.vue';
import formatNumber from '@/filters/formatNumber';

describe('Converter.vue', () => {
  describe('methods', () => {
    it('should change baseAmount and targetAmount data when "onBaseAmountInput is called', () => {
      const wrapper = shallowMount(Converter);
      const mockRate = 1.2;
      wrapper.setData({ baseAmount: 0, targetAmount: 0, rate: mockRate });

      const value = 100;
      wrapper.vm.onBaseAmountInput(value);

      expect(wrapper.vm.baseAmount).toBe(value);
      expect(wrapper.vm.targetAmount).toBe(
        Number((value * mockRate).toFixed(2))
      );
    });
    it('should change targetCurrency, rate and inverseRate when "onTargetCurrencyChange" is called', () => {
      const wrapper = shallowMount(Converter);
      const mockRate = 1.2;
      const mockInverseRate = 0.8;
      wrapper.setData({
        targetCurrency: 'GBP',
        rate: 0,
        inverseRate: 0,
        data: { usd: { rate: mockRate, inverseRate: mockInverseRate } },
      });

      const value = 'USD';
      wrapper.vm.onTargetCurrencyChange(value);

      expect(wrapper.vm.targetCurrency).toBe(value);
      expect(wrapper.vm.rate).toBe(mockRate);
      expect(wrapper.vm.inverseRate).toBe(mockInverseRate);
    });
  });

  describe('filters', () => {
    it('should convert number to number with 2 decimal places', () => {
      const formatted = formatNumber(4);

      expect(formatted).toBe(Number(4).toFixed(2));
    });
  });
});
