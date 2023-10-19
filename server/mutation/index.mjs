import { GraphQLObjectType } from "graphql";

import createUser from "./createUser.mjs";
import loginUser from "./loginUser.mjs";

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser,
    loginUser,
  },
});

export default mutation;
