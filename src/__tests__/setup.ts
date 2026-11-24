// Vitest setup file for global configurations
import { config } from '@vue/test-utils';

import { vi } from 'vite-plus/test';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create vuetify instance for testing
const vuetify = createVuetify({
  components,
  directives
});

// Configure Vue Test Utils to use vuetify
config.global.plugins = [vuetify];

// Mock any window methods if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn<(query: string) => MediaQueryList>().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn<MediaQueryList['addListener']>(),
    removeListener: vi.fn<MediaQueryList['removeListener']>(),
    addEventListener: vi.fn<MediaQueryList['addEventListener']>(),
    removeEventListener: vi.fn<MediaQueryList['removeEventListener']>(),
    dispatchEvent: vi.fn<MediaQueryList['dispatchEvent']>(() => true)
  }))
});
