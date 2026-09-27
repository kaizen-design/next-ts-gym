"use client";

import { useState } from "react";

// TODO (Этап 1): типизируй e (React.ChangeEvent<HTMLSelectElement>) и value
// TODO (Этап 2, позже): фильтр должен менять URL через router.push,
//   а не жить только в локальном state — не трогай пока, если ещё не дошёл
export default function OrderFilters() {
  const [status, setStatus] = useState("");

  return (
    <select value={status} onChange={(e) => setStatus(e.target.value)}>
      <option value="">Все</option>
      <option value="paid">Оплачено</option>
      <option value="pending">В ожидании</option>
      <option value="cancelled">Отменено</option>
    </select>
  );
}
