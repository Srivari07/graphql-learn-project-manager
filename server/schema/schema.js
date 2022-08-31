var { buildSchema } = require("graphql");
const { projects, clients } = require("../sampleData");

var schema = buildSchema(
    `
  type Query {
    hello: String
  }`
)

module.exports={schema}