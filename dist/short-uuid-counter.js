"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortUUIDCounter = void 0;
const repository_1 = require("cards-model/dist/repository");
const short_uuid_1 = __importDefault(require("short-uuid"));
class ShortUUIDCounter extends repository_1.IDCounter {
  next() {
    return short_uuid_1.default.generate();
  }
}
exports.ShortUUIDCounter = ShortUUIDCounter;
