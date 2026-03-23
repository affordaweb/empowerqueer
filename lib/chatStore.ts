// Module-level singleton so any client component can trigger the chat
let _openFn: (() => void) | null = null;

export const chatStore = {
  register(fn: () => void) {
    _openFn = fn;
  },
  open() {
    _openFn?.();
  },
};
