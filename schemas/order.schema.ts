// TODO (Этап 1, дни 10-12):
//
// import { z } from "zod";
//
// export const orderSchema = z.object({
//   id: z.string(),
//   customerName: z.string().min(1),
//   total: z.number().positive(),
//   status: z.enum(["paid", "pending", "cancelled"]),
// });
//
// export type Order = z.infer<typeof orderSchema>;
//
// После этого:
// - замени все "any" в lib/data.ts на Order
// - замени useState<any[]> в app/orders/page.tsx на useState<Order[]>
//   (или на AsyncState<Order[]>, см. TODO в page.tsx)
// - НИ ОДИН тип Order не должен быть продублирован руками где-либо ещё в проекте

export {};
