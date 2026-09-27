import { NextResponse } from "next/server";
import { deleteOrder } from "@/lib/data";

export async function DELETE(request: Request, { params }: any) {
  // TODO: params должен быть типизирован как { params: { id: string } }
  deleteOrder(params.id);
  return NextResponse.json({ ok: true });
}
