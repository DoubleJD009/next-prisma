import { PrismaClient } from "@prisma/client";

// eslint-disable-next-line import/no-anonymous-default-export
const client = new PrismaClient();

client.user.create({
  data: {
    email: "jd@test.com",
    name: "jd",
  },
});
