# Архитектура приложения

## Общая структура

Приложение построено по принципу Feature-Sliced Design с элементами Clean Architecture.

## Слои приложения

### 1. App Layer (`src/app/`)

Основной слой приложения, содержащий:

- **config/** - Конфигурация приложения (маршруты, store)
- **providers/** - Провайдеры контекста (Redux Provider)
- **styles/** - Глобальные стили и переменные
- **components/** - Переиспользуемые UI компоненты

### 2. Pages Layer (`src/pages/`)

Страницы приложения, каждая в своей папке:

- **home/** - Главная страница
- Каждая страница содержит компонент и стили (SCSS modules)

### 3. Shared Layer (`src/shared/`)

Общие утилиты и сервисы:

- **api/** - API клиенты и запросы
- **libs/** - Константы, утилиты, типы

### 4. Assets (`src/assets/`)

Статические ресурсы (изображения, иконки)

## State Management

Используется Redux Toolkit для управления состоянием:

```typescript
// src/app/config/store/createReduxStore.ts
import {configureStore} from "@reduxjs/toolkit";

export const createReduxStore = () => {
    return configureStore({
        reducer: {
            // slices
        },
    });
};
```

Store обёрнут в Provider в `src/app/providers/store/StoreProvider.tsx`

## Стилизация

### Tailwind CSS

- Основной CSS фреймворк
- Конфигурация в `tailwind.config.ts`
- Глобальные стили в `src/app/styles/global.css`

### SCSS Modules

- Для компонент-специфичных стилей
- Файлы вида `Component.module.scss`
- Импорт: `import styles from './Component.module.scss'`

### CSS Variables

Глобальные CSS переменные определены в `src/index.scss`:

- Цветовая схема (светлая/тёмная тема)
- Типографика
- Размеры и отступы

## Маршрутизация

Используется React Router v7:

- Конфигурация в `src/app/config/route/routeConfig.ts`
- AppRouter в `src/app/config/route/AppRouter.tsx`

## UI Компоненты

### shadcn/ui

- Базовые компоненты (Button, Input и т.д.)
- Расположены в `src/components/ui/`
- Стилизуются через Tailwind CSS

### Кастомные компоненты

- В `src/components/` для специфичной логики

## Типизация

- Полная TypeScript поддержка
- Строгая типизация для Redux state
- Типы для API ответов

## Сборка и разработка

- **Vite** - быстрый build tool
- **ESLint** - линтинг кода
- **TypeScript** - компиляция типов
- Hot reload для быстрой разработки
