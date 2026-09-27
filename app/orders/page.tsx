"use client";

import { useEffect, useState } from "react";
import DeleteButton from "./components/DeleteButton";
import OrderFilters from "./components/OrderFilters";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    await fetch(`/api/orders/${id}`, { method: "DELETE" });
    setOrders(orders.filter((o) => o.id !== id));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <OrderFilters />
      {orders.map((order) => (
        <div key={order.id}>
          <p>
            {order.customerName} — {order.total} ({order.status})
          </p>
          <DeleteButton onDelete={() => handleDelete(order.id)} />
        </div>
      ))}
    </div>
  );
}

/*
  TODO (Этап 1 — типизация, делай это сейчас):
  1. Убери any[] — выведи тип Order из Zod-схемы (schemas/order.schema.ts)
  2. Замени loading: boolean на discriminated union AsyncState<Order[]>
     (idle / loading / success / error)
  3. handleDelete(id) и order в .map должны быть явно типизированы,
     без implicit any (включи "strict": true в tsconfig, когда дойдёшь сюда)

  TODO (Этап 2 — архитектура, НЕ трогай пока):
  - Это должен стать Server Component, без "use client" на весь файл
  - delete — через Server Action, а не fetch к api route
  - фильтр — через searchParams в URL
  - loading.tsx / error.tsx вместо ручных флагов
*/
