const resquest = require("supertest");
const app = require("../../src/app")

describe('product test',   ()  => {

    it('findProduct', async() => {

        const response = await resquest(app).get("/search")

        expect(response.body[0]).toHaveProperty("id")
    });


    it('test 200', async() => {

        const response = await resquest(app).get("/test")

        expect(response.status).toBe(200)
    });

});