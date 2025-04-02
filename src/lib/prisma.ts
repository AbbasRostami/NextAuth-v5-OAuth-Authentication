import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default prisma;

const user = await prisma.usersAuth.create({
  data: {
    username: "exampleUser",
    email: "example@example.com",
    password: "hashedPassword",
    role: "user",
  },
});

console.log("Create User:", user);
