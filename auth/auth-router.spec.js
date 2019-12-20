const request = require('supertest');
const server = require('../api/server.js');
const db = require('../database/dbConfig.js');

describe("register", () => {
    it("Should return json object", async () => {
        const res = await request(server)
          .post("/api/auth/register")
          .send({ username: "Sharky", password: "bites" });
        expect(res.type).toBe("application/json");
      });
  
    it("should return the user added", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({ username: "Sharky", password: "bites" });
      expect({ username: "Sharky" });
    });
    beforeEach(async () => {
      await db("users").truncate();
    });
  });

describe("POST /login", () => {
    it("Should return 200 OK", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "Sharky", password: "bites" });
      expect(res.status).toBe(200);
    });
    it("Should return json object", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({ username: "Sharky", password: "bites" });
      expect(res.type).toBe("application/json");
    });
  });

