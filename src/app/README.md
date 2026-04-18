# App Module

Основной модуль приложения, содержащий конфигурацию и провайдеры.

## Структура

```
app/
├── config/
│   ├── route/          # Конфигурация маршрутизации
│   │   ├── AppRouter.tsx      # Основной роутер
│   │   └── routeConfig.ts     # Конфиг маршрутов
│   └── store/          # Конфигурация Redux store
│       └── createReduxStore.ts
├── providers/
│   └── store/          # Redux Provider
│       └── StoreProvider.tsx
├── styles/             # Глобальные стили
│   └── global.css
└── components/         # UI компоненты (пока пусто)
```

## Основные компоненты

### App.tsx

Корневой компонент приложения. Импортирует стили и рендерит дочерние компоненты.

### StoreProvider

Обёртка для Redux Provider. Подключает store к React компонентам.

### AppRouter

Компонент маршрутизации. Использует React Router для навигации между страницами.

## Стили

- `global.css` - импортирует Tailwind CSS
- `index.scss` - глобальные CSS переменные и базовые стили

## Зависимости

- React, Redux Toolkit, React Router
- Tailwind CSS для стилизации
