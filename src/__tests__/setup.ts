// Vitest setup file for global configurations
import { config } from '@vue/test-utils';
import { vi } from 'vitest';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Create vuetify instance for testing
const vuetify = createVuetify({
  components,
  directives,
});

// Configure Vue Test Utils to use vuetify
config.global.plugins = [vuetify];

// Mock any window methods if needed
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
