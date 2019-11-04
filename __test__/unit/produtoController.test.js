const resquest = require("supertest");
const app = require("../../src/app")

describe('product test',   ()  => {

    it('findProduct', async() => {

        const response = await resquest(app).get("/searchById?terms=")
        
        expect(response.body[0]).toHaveProperty("id")
    });

});