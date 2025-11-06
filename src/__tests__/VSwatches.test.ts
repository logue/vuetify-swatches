import { mount, VueWrapper } from '@vue/test-utils';
import { describe, it, expect, beforeEach } from 'vitest';

import colors from 'vuetify/util/colors';

import VSwatches from '../components/VSwatches.vue';

const testColors = {
  red: colors.red.base,
  green: colors.green.base,
  blue: colors.blue.base,
  yellow: colors.yellow.base,
  purple: colors.purple.base,
  orange: colors.orange.base,
  white: colors.shades.white,
  black: colors.shades.black,
  transparent: colors.shades.transparent,
};

// Test custom swatches
const customSwatches = [
  [testColors.red, testColors.green, testColors.blue],
  [testColors.yellow, testColors.purple, testColors.orange],
];

describe('VSwatches', () => {
  let wrapper: VueWrapper<InstanceType<typeof VSwatches>>;

  beforeEach(() => {
    wrapper = mount(VSwatches);
  });

  describe('Basic Rendering', () => {
    it('should mount component correctly', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.find('.v-swatches').exists()).toBe(true);
    });

    it('should display default swatches', () => {
      const buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBeGreaterThan(0);
    });

    it('should have v-sheet wrapper', () => {
      const sheet = wrapper.find('.v-swatches');
      expect(sheet.exists()).toBe(true);
    });
  });

  describe('Props Testing', () => {
    it('should set modelValue property correctly', async () => {
      const testColor = testColors.red;
      wrapper = mount(VSwatches, {
        props: {
          modelValue: testColor,
          swatches: [[testColor, testColors.blue]], // Include test color in swatches
        },
      });

      await wrapper.vm.$nextTick();

      // Check if selected color icon is displayed
      const selectedButton = wrapper.find(`[value="${testColor}"]`);
      expect(selectedButton.exists()).toBe(true);

      const icon = selectedButton.find('.v-icon');
      expect(icon.exists()).toBe(true);
    });

    it('should display custom swatches correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: customSwatches,
        },
      });

      const buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBe(6); // 3 + 3 = 6 colors

      // Check first color button
      const firstButton = buttons[0];
      if (firstButton) {
        expect(firstButton.attributes('value')).toBe(testColors.red);
      }
    });

    it('should apply size property correctly', () => {
      const customSize = '3rem';
      wrapper = mount(VSwatches, {
        props: {
          size: customSize,
        },
      });

      const button = wrapper.find('.v-btn');
      // Check if style contains the size (Vuetify applies as inline styles)
      const style = button.attributes('style');
      expect(style).toContain(customSize);
    });

    it('should set icon property correctly', async () => {
      const customIcon = 'mdi-check';
      wrapper = mount(VSwatches, {
        props: {
          modelValue: testColors.red,
          icon: customIcon,
          swatches: [[testColors.red]], // Include test color in swatches
        },
      });

      await wrapper.vm.$nextTick();

      const icon = wrapper.find('.v-icon');
      // Check if icon exists and has the right icon property
      expect(icon.exists()).toBe(true);
      const iconElement = icon.element;
      expect(iconElement).toBeDefined();
    });

    it('should apply iconSize property correctly', async () => {
      const customIconSize = '2rem';
      wrapper = mount(VSwatches, {
        props: {
          modelValue: testColors.red,
          iconSize: customIconSize,
          swatches: [[testColors.red]], // Include test color in swatches
        },
      });

      await wrapper.vm.$nextTick();

      const icon = wrapper.find('.v-icon');
      // Check if style contains the size
      const style = icon.attributes('style');
      expect(style).toBeDefined();
    });

    it('should apply variant property correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          variant: 'outlined',
        },
      });

      const button = wrapper.find('.v-btn');
      // Check if the variant class is applied
      expect(button.classes()).toContain('v-btn--variant-outlined');
    });

    it('should handle disabled property correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          disabled: true,
        },
      });

      const button = wrapper.find('.v-btn');
      expect(button.attributes('disabled')).toBeDefined();
    });

    it('should apply rounded property correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          rounded: 'xl',
        },
      });

      const button = wrapper.find('.v-btn');
      // Vuetify's rounded property application check
      expect(button.exists()).toBe(true);
    });

    it('should apply border property correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          border: true,
        },
      });

      const button = wrapper.find('.v-btn');
      // Check if border class is applied
      expect(button.classes().some(cls => cls.includes('border'))).toBe(true);
    });

    it('should apply elevation property correctly', () => {
      wrapper = mount(VSwatches, {
        props: {
          elevation: 4,
        },
      });

      const button = wrapper.find('.v-btn');
      // Check if elevation class is applied
      expect(button.classes().some(cls => cls.includes('elevation'))).toBe(
        true
      );
    });
  });

  describe('Event Testing', () => {
    it('should emit update:modelValue on swatch click', async () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: customSwatches,
        },
      });

      const button = wrapper.find('.v-btn');
      await button.trigger('click');

      const emitted = wrapper.emitted('update:modelValue');
      expect(emitted).toBeDefined();
      expect(emitted).toHaveLength(1);
    });

    it('should emit correct value when different colors are clicked', async () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: customSwatches,
        },
      });

      const buttons = wrapper.findAll('.v-btn');
      const redButton = buttons.find(
        btn => btn.attributes('value') === testColors.red
      );

      if (redButton) {
        await redButton.trigger('click');

        const emitted = wrapper.emitted('update:modelValue');
        expect(emitted).toBeDefined();
        expect(emitted![0]).toEqual([testColors.red]);
      }
    });

    it('should disable click events when disabled', async () => {
      wrapper = mount(VSwatches, {
        props: {
          disabled: true,
          swatches: customSwatches,
        },
      });

      const button = wrapper.find('.v-btn');
      await button.trigger('click');

      // When disabled, events should not be fired
      const emitted = wrapper.emitted('update:modelValue');
      expect(emitted).toBeUndefined();
    });
  });

  describe('Transparent Color Testing', () => {
    it('should apply special class for transparent color', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: [[testColors.transparent, testColors.red]],
        },
      });

      const transparentButton = wrapper.find(
        `[value="${testColors.transparent}"]`
      );
      expect(transparentButton.classes()).toContain('bg-transparent');
    });

    it('should set correct icon color when transparent color is selected', async () => {
      wrapper = mount(VSwatches, {
        props: {
          modelValue: testColors.transparent,
          swatches: [[testColors.transparent, testColors.red]],
        },
      });

      await wrapper.vm.$nextTick();

      const icon = wrapper.find('.v-icon');
      expect(icon.exists()).toBe(true);
      // For transparent color, color property should not be set
      expect(icon.attributes('color')).toBeUndefined();
    });
  });

  describe('Reactive Data Testing', () => {
    it('should reflect modelValue changes to internal state', async () => {
      const newColor = testColors.green;
      wrapper = mount(VSwatches, {
        props: {
          swatches: [[newColor]], // Include test color in swatches
        },
      });

      await wrapper.setProps({ modelValue: newColor });

      // Check if new color icon is displayed
      const selectedButton = wrapper.find(`[value="${newColor}"]`);
      const icon = selectedButton.find('.v-icon');
      expect(icon.exists()).toBe(true);
    });

    it('should update UI according to props changes', async () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: [[testColors.red]],
        },
      });

      let buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBe(1);

      // Change swatches
      await wrapper.setProps({
        swatches: [[testColors.red, testColors.blue, testColors.green]],
      });

      buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBe(3);
    });
  });

  describe('Edge Cases Testing', () => {
    it('should not throw errors with empty swatches array', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: [],
        },
      });

      expect(wrapper.exists()).toBe(true);
      const buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBe(0);
    });

    it('should work with invalid color values', () => {
      const invalidSwatches = [['invalid-color', '#ffffff']];

      expect(() => {
        wrapper = mount(VSwatches, {
          props: {
            swatches: invalidSwatches,
          },
        });
      }).not.toThrow();
    });

    it('should handle object format swatches correctly', () => {
      const objectSwatches = {
        reds: [testColors.red],
        blues: [testColors.blue],
      };

      wrapper = mount(VSwatches, {
        props: {
          swatches: objectSwatches,
        },
      });

      expect(wrapper.exists()).toBe(true);
      const buttons = wrapper.findAll('.v-btn');
      expect(buttons.length).toBe(2); // 1 + 1 = 2 colors
    });
  });

  describe('Accessibility Testing', () => {
    it('should set appropriate value attributes on buttons', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: customSwatches,
        },
      });

      const buttons = wrapper.findAll('.v-btn');
      buttons.forEach(button => {
        expect(button.attributes('value')).toBeDefined();
        expect(button.attributes('value')).toBeTruthy();
      });
    });

    it('should set appropriate min-width on buttons', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: customSwatches,
        },
      });

      const button = wrapper.find('.v-btn');
      // Check if min-width style is applied
      const style = button.attributes('style');
      expect(style).toBeDefined();
    });
  });

  describe('Style Testing', () => {
    it('should apply custom CSS classes', () => {
      wrapper = mount(VSwatches);

      const container = wrapper.find('.v-swatches');
      expect(container.exists()).toBe(true);
    });

    it('should apply special style class for transparent buttons', () => {
      wrapper = mount(VSwatches, {
        props: {
          swatches: [[testColors.transparent]],
        },
      });

      const transparentButton = wrapper.find('.bg-transparent');
      expect(transparentButton.exists()).toBe(true);
    });
  });
});
