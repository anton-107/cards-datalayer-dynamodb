"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStringFromConfig = exports.Constants = void 0;
require("dotenv/config");
var Constants;
(function (Constants) {
  Constants["DYNAMOCLIENT_ENDPOINT_OVERRIDE"] =
    "DYNAMOCLIENT_ENDPOINT_OVERRIDE";
  Constants["DYNAMODB_CARD_TABLENAME"] = "DYNAMODB_CARD_TABLENAME";
})(Constants || (exports.Constants = Constants = {}));
function getStringFromConfig(variableName) {
  return String(process.env[variableName]);
}
exports.getStringFromConfig = getStringFromConfig;
