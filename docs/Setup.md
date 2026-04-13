# Установка и запуск

## Требования

- Node.js 18+
- npm или yarn

## Установка зависимостей

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Приложение будет доступно на `http://localhost:5173`

## Сборка для продакшена

```bash
npm run build
```

## Предпросмотр сборки

```bash
npm run preview
```

## Линтинг

```bash
npm run lint
```

## Структура зависимостей

### Основные зависимости

- `react` - UI библиотека
- `react-dom` - DOM рендеринг для React
- `@reduxjs/toolkit` - State management
- `react-redux` - React bindings для Redux
- `react-router` - Маршрутизация
- `tailwindcss` - CSS фреймворк
- `class-variance-authority` - Вариативные компоненты
- `clsx` - Условные CSS классы
- `tailwind-merge` - Слияние Tailwind классов

### Dev зависимости

- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin для Vite
- `typescript` - TypeScript
- `sass` - SCSS preprocessor
- `eslint` - Линтер
