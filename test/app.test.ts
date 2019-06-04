import request from "supertest";

import app from "../src/app";

describe("测试koa服务器", () => {
    it("Get /", async () => {
        const result = await request(app.callback()).get("/");
        console.log(result);
        expect(result.text).toEqual("Hello World");
        expect(result.status).toEqual(200);
    });
});
