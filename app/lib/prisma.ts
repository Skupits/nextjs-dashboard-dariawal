import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function fetchCustPrisma() {
    try {
        const data = await prisma.customers.findMany({
            orderBy : {
                name: 'asc',
            },
        });
        return data;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error('Failed to fetch all data customers.');
    }
}