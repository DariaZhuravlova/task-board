# UI Components Module

Базовые UI компоненты на основе shadcn/ui.

## Структура

```
components/ui/
├── button.tsx         # Кнопка компонент
└── ...                # Другие компоненты
```

## Компоненты

### Button

Базовый компонент кнопки с вариантами:

- `variant`: `default | destructive | outline | secondary | ghost | link`
- `size`: `default | sm | lg | icon`

Пример использования:

```tsx
import {Button} from "@/components/ui/button";

<Button variant="default">Click me</Button>;
```

## Стилизация

Компоненты используют:

- Tailwind CSS для базовых стилей
- `class-variance-authority` для вариативности
- `clsx` и `tailwind-merge` для условных классов

## Добавление новых компонентов

Используйте shadcn CLI:

```bash
npx shadcn@latest add [component-name]
```

## Зависимости

- shadcn/ui
- Tailwind CSS
- class-variance-authority
- clsx
- tailwind-merge
