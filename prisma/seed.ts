import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const genre: Prisma.GenreCreateInput[] = [

]


async function main() {
  console.log(`Start seeding ...`)
  for (const g of genre) {
    const genre = await prisma.genre.create({
      data: g,
    })
    console.log(`Created user with id: ${genre.id}`)
  }
  console.log(`Seeding finished.`)
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
