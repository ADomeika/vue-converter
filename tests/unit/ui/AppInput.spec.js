import { shallowMount } from '@vue/test-utils';
import AppInput from '@/components/ui/AppInput.vue';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(AppInput);
});

describe('AppInput.vue', () => {
  it('should successfully receive type prop', () => {
    const type = 'number';
    wrapper.setProps({
      type,
    });
    expect(wrapper.props().type).toBe(type);
  });

  it('should emit an "input" event when input is changed', async () => {
    const input = wrapper.find('input');
    await input.setValue('5');

    expect(wrapper.emitted('input')).toBeTruthy();
  });
});
