import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
async function main() {
  // await prisma.permission.deleteMany();
  // await prisma.user.deleteMany();
  // await prisma.role.deleteMany();
  // await prisma.userRole.deleteMany();

  await prisma.permission.createMany({
    data: [
      { "name": "view_users", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "manage_users", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "view_roles", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "manage_roles", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "view_permissions", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "manage_permissions", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "view_products", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "manage_products", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "view_orders", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" },
      { "name": "manage_orders", roleId: "cc2015d4-ff5b-4f87-ac17-ae4573f6507a" }
    ]
  })

  // await prisma.role.createMany({
  //   data: [
  //     { "name": "Admin" },
  //     { "name": "Manager" },
  //     { "name": "Editor" },
  //     { "name": "Viewer" }
  //   ]
  // })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })