import { fromGlobalId, nodeDefinitions } from "graphql-relay";

import ViewerType, {
  VIEWER_TYPE,
  ProductType,
  PRODUCT_TYPE,
  OrderType,
  ORDER_TYPE,
} from "./ViewerType.mjs";

import { prisma } from "./index.mjs";

const { nodeInterface, nodeField } = nodeDefinitions(
  async (globalId) => {
    const { type, id } = fromGlobalId(globalId);

    if (type === VIEWER_TYPE) {
      const user = await prisma.user.findUnique({
        where: { id },
      });

      return user;
    } else if (type === PRODUCT_TYPE) {
      const product = await prisma.product.findUnique({
        where: { id },
      });

      return product;
    } else if (type === ORDER_TYPE) {
      const order = await prisma.order.findUnique({
        where: { id },
      });

      return order;
    } else {
      return null;
    }
  },
  (obj) => {
    // definitely a service request if valid
    if (obj?.fullName) {
      return ViewerType;
    } else if (obj?.productName) {
      return ProductType;
    } else if (obj?.status) {
      return OrderType;
    } else {
      return null;
    }
  }
);

export { nodeField, nodeInterface };
