import { GraphQLObjectType, GraphQLString, GraphQLList } from "graphql";
import {
  globalIdField,
  connectionDefinitions,
  connectionArgs,
  connectionFromArray,
} from "graphql-relay";

import { nodeInterface } from "./definitions.mjs";
import { prisma } from "./index.mjs";

export const VIEWER_TYPE = "Viewer";
export const PRODUCT_TYPE = "Product";
export const ORDER_TYPE = "Order";

export const ProductType = new GraphQLObjectType({
  name: PRODUCT_TYPE,
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(PRODUCT_TYPE),
    productName: {
      type: GraphQLString,
      resolve: ({ productName }) => productName,
    },
    price: {
      type: GraphQLString,
      resolve: ({ price }) => price,
    },
    description: {
      type: GraphQLString,
      resolve: ({ description }) => description,
    },
    image: {
      type: GraphQLString,
      resolve: ({ image }) => image,
    },
  },
});

export const {
  connectionType: ProductConnection,
  edgeType: GraphQLProductEdge,
} = connectionDefinitions({
  name: PRODUCT_TYPE,
  nodeType: ProductType,
});

export const OrderType = new GraphQLObjectType({
  name: ORDER_TYPE,
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(ORDER_TYPE),
    productIds: {
      type: new GraphQLList(GraphQLString),
      resolve: ({ productIds }) => productIds,
    },
    status: {
      type: GraphQLString,
      resolve: ({ status }) => status,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ createdAt }) => createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: ({ updatedAt }) => updatedAt,
    },
  },
});

export const { connectionType: OrderConnection, edgeType: GraphQLOrderEdge } =
  connectionDefinitions({
    name: ORDER_TYPE,
    nodeType: OrderType,
  });

const ViewerType = new GraphQLObjectType({
  name: VIEWER_TYPE,
  interfaces: [nodeInterface],
  fields: {
    id: globalIdField(VIEWER_TYPE),
    fullName: {
      type: GraphQLString,
      resolve: ({ fullName }) => fullName,
    },
    image: {
      type: GraphQLString,
      resolve: ({ image }) => image,
    },
    email: {
      type: GraphQLString,
      resolve: ({ email }) => email,
    },
    createdAt: {
      type: GraphQLString,
      resolve: ({ createdAt }) => createdAt,
    },
    updatedAt: {
      type: GraphQLString,
      resolve: ({ updatedAt }) => updatedAt,
    },
    products: {
      type: ProductConnection,
      args: { ...connectionArgs },
      resolve: async (_, { ...args }) => {
        const products = await prisma.product.findMany();
        // https://github.com/graphql/graphql-relay-js/issues/94#issuecomment-232410564
        return connectionFromArray(products, args);
      },
    },
    orders: {
      type: OrderConnection,
      args: { ...connectionArgs },
      resolve: async (_, { ...args }) => {
        const orders = await prisma.order.findMany();
        return connectionFromArray(orders, args);
      },
    },
  },
});

export default ViewerType;
