const request = require("supertest");
const app = require("../server");

describe("POST /api/itunes", () => {
  it("should reject requests without a JWT token", async () => {
    const response = await request(app)
      .post("/api/itunes")
      .send({ term: "beatles", media: "music" });

    expect(response.statusCode).toBe(403);
    expect(response.body).toHaveProperty("error");
  });
});
