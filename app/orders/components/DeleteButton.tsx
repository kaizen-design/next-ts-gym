"use client";

// TODO (Этап 1): типизируй пропсы — onDelete: () => void
export default function DeleteButton({ onDelete }) {
  return <button onClick={onDelete}>Delete</button>;
}
