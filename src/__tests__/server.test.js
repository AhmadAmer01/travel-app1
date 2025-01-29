const request = require("supertest");
const app = require("../server/server");
require("dotenv").config();

describe("Server API Routes", () => {
  it("should return city data from Geonames", async () => {
    const res = await request(app).post("/geonames").send({ city: "Nablus" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("lat");
    expect(res.body).toHaveProperty("lng");
    expect(res.body).toHaveProperty("countryName");
  });

  it("should return weather data from Weatherbit", async () => {
    const res = await request(app)
      .post("/weatherbit")
      .send({ lat: "32.22", lon: "35.26" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("data");
    expect(res.body.data).toBeInstanceOf(Array);
  });

  it("should return an image from Pixabay", async () => {
    const res = await request(app).post("/pixabay").send({ city: "Nablus" });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("image");
  });
});

