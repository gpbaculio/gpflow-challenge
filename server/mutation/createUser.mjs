import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";
import bcrypt from "bcryptjs";

import { generateToken } from "../auth.mjs";
import { prisma } from "../query/index.mjs";
import cloudinary from "../cloudinary.mjs";

const GraphQLCreateUserMutation = mutationWithClientMutationId({
  name: "CreateUser",
  inputFields: {
    fullName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    image: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  mutateAndGetPayload: async ({ fullName, email, password, image }) => {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    const result = await cloudinary.uploader.upload(image, { folder: "users" });

    if (existingUser) {
      return {
        token: null,
        error: "EMAIL_ALREADY_IN_USE",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        fullName,
        email,
        password: hashedPassword,
        type: "admin",
        image: result.secure_url,
      },
    });

    console.log("newUser ", JSON.stringify(newUser, null, 2));

    const token = generateToken(newUser);

    return { token, error: null };
  },
  outputFields: {
    token: {
      type: GraphQLString,
      resolve: ({ token }) => token,
    },
    error: {
      type: GraphQLString,
      resolve: ({ error }) => error,
    },
  },
});

export default GraphQLCreateUserMutation;
