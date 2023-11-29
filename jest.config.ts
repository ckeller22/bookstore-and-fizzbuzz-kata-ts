// jest.config.ts
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  testPathIgnorePatterns: ["/node_modules/", "/helpers/", "/testHelpers.ts"],
};
export default config;
