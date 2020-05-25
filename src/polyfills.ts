/**
 * Very minimalistic shim of window object to allow loading the library at
 * the server-side.
 */

if (typeof window === "undefined") {
  Object.defineProperty(global, "IS_CLIENT_SIDE", {
    value: false,
    writable: false,
  });
  global.window = <typeof global.window>{};
} else {
  Object.defineProperty(global, "IS_CLIENT_SIDE", {
    value: true,
    writable: false,
  });
}
