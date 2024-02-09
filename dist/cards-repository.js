"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsRepositoryDynamo = void 0;
class CardsRepositoryDynamo {
  constructor(cardEntity) {
    this.cardEntity = cardEntity;
  }
  putCard(card) {
    return __awaiter(this, void 0, void 0, function* () {
      yield this.cardEntity.put(card);
    });
  }
  listAllInSpace(spaceID) {
    return __awaiter(this, void 0, void 0, function* () {
      const queryResults = yield this.cardEntity.query(spaceID);
      return queryResults.Items;
    });
  }
  listCardChildren(spaceID, cardID) {
    return __awaiter(this, void 0, void 0, function* () {
      const queryResults = yield this.cardEntity.query(spaceID, {
        beginsWith: `CARD${cardID}_L`,
      });
      return queryResults.Items;
    });
  }
}
exports.CardsRepositoryDynamo = CardsRepositoryDynamo;
