import "@testing-library/jest-dom";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// clean up after every test - unmount my components
afterEach(() => {
  cleanup();
});
