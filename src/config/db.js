"use strict";

function createDbConnection() {
  return {
    query: async () => ({ rows: [] }),
    close: async () => undefined,
  };
}

module.exports = {
  createDbConnection,
};
