const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

describe("GET /jokes", () => {
    it("Should return an error", async () => {
      const res = await request(server).get("/api/jokes");
      expect(res.status).toBe(401);
    });
    it("Should return json object", async () => {
      const res = await request(server)
        .get("/api/jokes")
      expect(res.type).toBe("application/json");
    });
  });