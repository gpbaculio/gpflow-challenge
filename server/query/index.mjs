// external imports
import { GraphQLObjectType } from "graphql";
import { PrismaClient } from "@prisma/client";

import ViewerType from "./ViewerType.mjs";

import { nodeField } from "./definitions.mjs";

export const prisma = new PrismaClient();

const query = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    viewer: {
      type: ViewerType,
      resolve: (_root, _args, { user }) => user,
    },
    node: nodeField,
  }),
});

export default query;
