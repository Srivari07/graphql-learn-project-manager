const express=require("express")
require("dotenv").config()
var { graphqlHTTP } = require("express-graphql");
const { schema } = require("./schema/schema");
const port = process.env.PORT || 5000

const app = express()

var root = { hello: () => "Hello world!" };

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:process.env.NODE_ENV==="devlopment"
}))

app.listen(port,()=>console.log(`Listing to ${port}`))