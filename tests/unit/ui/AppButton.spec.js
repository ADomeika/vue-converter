import { shallowMount } from '@vue/test-utils';
import AppButton from '@/components/ui/AppButton.vue';

let wrapper;
beforeEach(() => {
  wrapper = shallowMount(AppButton);
});

describe('AppButton.vue', () => {
  it('should successfully receive title prop', () => {
    const title = 'Save';
    wrapper.setProps({
      title,
    });
    expect(wrapper.props().title).toBe(title);
  });

  it('should emit a "click" event when button is clicked', async () => {
    const button = wrapper.find('button');
    await button.trigger('click');

    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
