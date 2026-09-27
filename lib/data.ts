// Намеренно без типов — это твоя первая рабочая зона (Этап 1, дни 10-12).
// После того как напишешь Zod-схему в schemas/order.schema.ts,
// замени все "any" здесь на Order, выведенный через z.infer.

let orders: any[] = [
  { id: "1", customerName: "Иван Петров", total: 1500, status: "paid" },
  { id: "2", customerName: "Мария Сидорова", total: 2300, status: "pending" },
  { id: "3", customerName: "Алексей Ким", total: 800, status: "cancelled" },
  { id: "4", customerName: "Ольга Титова", total: 4200, status: "paid" },
  { id: "5", customerName: "Дмитрий Носов", total: 1990, status: "pending" },
];

export function getAllOrders(params?: any) {
  // TODO: params должен быть типизирован ({ status?: OrderStatus })
  let result = orders;
  if (params?.status) {
    result = result.filter((o) => o.status === params.status);
  }
  return result;
}

export function deleteOrder(id: any) {
  orders = orders.filter((o) => o.id !== id);
}

export function createOrder(data: any) {
  const newOrder = { id: String(Date.now()), ...data, status: "pending" };
  orders.push(newOrder);
  return newOrder;
}
