# Next TS Gym

Тренировочный репозиторий: рабочий Next.js App Router проект, в котором
**намеренно** нет нормальной типизации и есть архитектурные антипаттерны.
Задача — не написать что-то новое, а привести существующий код к
продакшн-виду, шаг за шагом, по плану ниже.

Все проблемные места помечены `// TODO` прямо в коде — начинай с них.

## Установка

```bash
npm install
npm run dev        # запустить локально
npm run typecheck  # tsc --noEmit — гоняй после каждого шага
```

`tsconfig.json` сейчас специально с `"strict": false`. Включение `strict`
— это первое, что нужно сделать (см. Этап 1, дни 1-3).

---

## Этап 1 — TypeScript (текущий фокус)

### Дни 1-3 — базовые типы + strict
- [ ] Включи `"strict": true` в `tsconfig.json`
- [ ] Убери implicit `any` в `app/layout.tsx` (типизируй `children`)
- [ ] Прогони `npm run typecheck` — компилятор начнёт ругаться в разных
      местах, это ожидаемо и это и есть цель упражнения

### Дни 4-6 — discriminated unions
- [ ] В `app/orders/page.tsx` замени `loading: boolean` на
      `AsyncState<Order[]>` (`idle | loading | success | error`)
- [ ] Сделай 5-8 заданий из папки `easy` в
      [type-challenges](https://github.com/type-challenges/type-challenges)

### Дни 7-9 — дженерики
- [ ] Сделай `components/Table.tsx` дженериком (`Table<T>`)
- [ ] Примени его на странице `/orders` вместо ручного `.map`

### Дни 10-12 — Zod как источник истины
- [ ] Напиши схему в `schemas/order.schema.ts` (инструкция внутри файла)
- [ ] Выведи `type Order = z.infer<typeof orderSchema>`
- [ ] Замени этим типом все `any` в `lib/data.ts`, `app/orders/page.tsx`,
      `app/api/orders/route.ts`, `app/api/orders/[id]/route.ts`

### Дни 13-14 — финальный чек
- [ ] `npm run typecheck` — ноль ошибок
- [ ] Ни одного `any`, `as`, `!`, `@ts-ignore` во всём проекте
- [ ] `DeleteButton` и `OrderFilters` тоже полностью типизированы

**Когда закончишь — залей репозиторий на GitHub и пришли ссылку в чат,
разберём построчно.**

---

## Этап 2 — архитектура (не трогать, пока не закрыт Этап 1)

Отмечено TODO-комментариями в `app/orders/page.tsx` и
`app/orders/components/OrderFilters.tsx`:
- перевести `OrdersPage` в Server Component
- `handleDelete` → Server Action + `revalidatePath`
- фильтр статуса → `searchParams` в URL вместо локального state
- `loading.tsx` / `error.tsx` вместо ручных флагов

## Этап 3 — тесты (параллельно с этапом 2)
Добавь Vitest + React Testing Library, напиши тесты на форму создания
заказа и на Server Action удаления — руками, без ИИ, потом сравни.

## Этап 4 — auth
Добавь простую ролевую модель (admin/user): кнопка Delete видна только
admin.

## Этап 5 — таблицы/деплой
`components/Table.tsx` — эволюционирует в реальный TanStack Table
(серверная пагинация/сортировка). Настрой staging/production окружения.
