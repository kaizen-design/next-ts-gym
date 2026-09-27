import { NextResponse } from "next/server";
import { getAllOrders, createOrder } from "@/lib/data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const status = searchParams.get("status");
  const orders = getAllOrders({ status });
  return NextResponse.json(orders);
}

export async function POST(request: Request) {
  const body = await request.json();
  // TODO: body должен валидироваться Zod-схемой перед созданием заказа
  const order = createOrder(body);
  return NextResponse.json(order);
}
