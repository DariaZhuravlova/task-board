# Pelegram - Документация

## Описание проекта

Pelegram - это веб-приложение для чата, построенное с использованием современных технологий. Проект следует принципам Feature-Sliced Design и Clean Architecture для обеспечения масштабируемости и поддерживаемости кода.

## Архитектура приложения

### Общая структура

Приложение разделено на слои согласно Feature-Sliced Design:

- **App Layer** (`src/app/`): Основная конфигурация приложения, провайдеры и глобальные компоненты.
- **Pages Layer** (`src/pages/`): Страницы приложения, каждая в отдельной папке.
- **Shared Layer** (`src/shared/`): Общие утилиты, API-клиенты и константы.
- **Assets** (`src/assets/`): Статические ресурсы.

### Детальная структура

```
src/
├── app/                 # Основное приложение
│   ├── config/          # Конфигурация (маршруты, store)
│   │   ├── route/       # Настройка маршрутизации
│   │   └── store/       # Конфигурация Redux store
│   ├── providers/       # Провайдеры контекста
│   │   └── store/       # Redux Provider
│   ├── components/      # Переиспользуемые UI компоненты
│   └── styles/          # Глобальные стили
├── pages/               # Страницы приложения
│   └── home/            # Главная страница
├── shared/              # Общие ресурсы
│   ├── api/             # API клиенты
│   ├── assets/          # Статические ресурсы
│   ├── libs/            # Константы и утилиты
│   └── styles/          # Глобальные стили
└── main.tsx             # Точка входа
```

## Технологии

### Frontend

- **React 19** - Основная библиотека для построения UI
- **TypeScript** - Строгая типизация
- **Vite** - Быстрый инструмент сборки с HMR

### State Management

- **Redux Toolkit** - Управление состоянием приложения
- **React Redux** - Привязки Redux к React

### Стилизация

- **Tailwind CSS** - Утилитарный CSS-фреймворк
- **shadcn/ui** - Компонентная библиотека на базе Radix UI
- **class-variance-authority** - Управление вариантами компонентов
- **tailwind-merge** - Слияние классов Tailwind

### Маршрутизация

- **React Router v7** - Клиентская маршрутизация

### Качество кода

- **ESLint** - Линтинг и форматирование кода
- **Husky** - Git хуки для автоматизации
- **lint-staged** - Запуск линтера на staged файлах
- **Commitlint** - Проверка сообщений коммитов

## Установка и запуск

Подробные инструкции см. в [Setup.md](Setup.md).

### Быстрый старт

```bash
npm install
npm run dev
```

## State Management

Redux store настраивается в `src/app/config/store/createReduxStore.ts`:

```typescript
import {configureStore} from "@reduxjs/toolkit";

export const createReduxStore = () => {
    return configureStore({
        reducer: {
            // Добавляйте ваши slices здесь
        },
    });
};
```

Store обёрнут в Provider в `src/app/providers/store/StoreProvider.tsx` для предоставления контекста всему приложению.

## Стилизация

### Tailwind CSS

- Конфигурация в `tailwind.config.ts`
- Глобальные стили в `src/shared/styles/global.css`
- Утилиты для объединения классов в `src/shared/libs/utils/cn.ts`

### Компоненты UI

- Базовые компоненты из shadcn/ui в `src/app/components/ui/`
- Кастомные компоненты в соответствующих слоях

## Маршрутизация

Конфигурация маршрутов в `src/app/config/route/routeConfig.ts`. AppRouter в `src/app/config/route/AppRouter.tsx` использует React Router для навигации.

## API

API клиенты расположены в `src/shared/api/`. Подробная документация API в [API.md](API.md) (если существует).

## Разработка

### Скрипты

- `npm run dev` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm run lint` - Проверка кода ESLint
- `npm run preview` - Предпросмотр сборки

### Git хуки

Проект использует Husky для автоматизации:

- Pre-commit: запуск линтера на staged файлах
- Commit-msg: проверка формата сообщений коммитов

## Структура зависимостей

### Основные зависимости

- `react`, `react-dom` - UI
- `@reduxjs/toolkit`, `react-redux` - State management
- `react-router` - Routing
- `tailwindcss`, `class-variance-authority`, `tailwind-merge` - Styling
- `lucide-react` - Иконки
- `radix-ui` - Примитивы UI

### Dev зависимости

- `@vitejs/plugin-react` - Плагин Vite для React
- `eslint` и плагины - Линтинг
- `husky`, `lint-staged` - Git хуки
- `@commitlint/cli`, `@commitlint/config-conventional` - Проверка коммитов
- Типы для TypeScript

## Типизация

Проект полностью типизирован с TypeScript. Типы для API, компонентов и состояния Redux строго определены для обеспечения надёжности кода.
