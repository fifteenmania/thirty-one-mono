import test from "node:test"
import assert from "node:assert"

import { vecFindMin } from "./linarg"

test("vecFindMin", () => {
  assert.strictEqual(vecFindMin([1, 2, 3]), 1)
  assert.strictEqual(vecFindMin([3, 2, 1]), 1)
  assert.strictEqual(vecFindMin([1, 1, 1]), 1)
})
