import { shallowMount } from '@vue/test-utils';
import AppSelect from '@/components/ui/AppSelect.vue';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(AppSelect);
});

describe('AppSelect.vue', () => {
  it('should successfully receive data prop', () => {
    const data = { GBP: 'Great British Pound' };
    wrapper.setProps({
      data,
    });

    expect(wrapper.props().data).toEqual(data);
  });

  it('should successfully receive initialSelection prop', () => {
    const initialSelection = 'GBP';
    wrapper.setProps({
      initialSelection,
    });

    expect(wrapper.props().initialSelection).toEqual(initialSelection);
  });

  it('should emit a "change" event when other item is selected', async () => {
    const select = wrapper.find('select');
    await select.setValue('USD');

    expect(wrapper.emitted('change')).toBeTruthy();
  });
});
