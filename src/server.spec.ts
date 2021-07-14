import request from "supertest";
import { expect } from "chai";
import createServer from "./server";

const app = createServer();

describe("server checks", () => {
  it("NODE_ENV is 'test'", (done) => {
      expect(process.env.NODE_ENV).to.equal("test");
      done();
  });

  it("server home route responds without error", (done) => {
    // console.log(`NODE_ENV=[${process.env.NODE_ENV}]`);
    request(app)
      .get("/")
      .expect(200, done);
  });
});
