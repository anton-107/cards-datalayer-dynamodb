import { IDCounter } from "cards-model/dist/repository";
import uuid from "short-uuid";

export class ShortUUIDCounter extends IDCounter {
  next(): string {
    return uuid.generate();
  }
}
