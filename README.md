# hello-android

Пробное Android-приложение на **React Native CLI + TypeScript**.

## Цель
Показать на экране Android надпись **«Привет, мир!»** и собрать устанавливаемый debug APK.

## Текущий статус
Созданы исходники `App.tsx`, `src/screens/HomeScreen.tsx`, требования и заготовка GitHub Actions. **Полный проект React Native CLI пока не инициализирован:** отсутствуют `package.json`, каталог `android/` и Gradle wrapper. APK пока не собран. Workflow намеренно проверяет наличие этих файлов и завершится с диагностикой до их добавления.

## Структура
```text
hello-android/
├── .github/workflows/android.yml
├── src/screens/HomeScreen.tsx
├── docs/REQUIREMENTS.md
├── docs/TASKS.md
├── App.tsx
├── AGENTS.md
├── README.md
└── .gitignore
```

## Следующий этап: инициализация
В Codex Cloud выберите этот репозиторий и поручите создать полноценный проект **React Native CLI без Expo** с TypeScript. Используйте совместимые версии Node.js, Java, Android SDK и React Native, сохранив существующие `App.tsx`, `HomeScreen.tsx`, документацию и workflow. После инициализации зафиксируйте версии в этом README.

## Запуск после инициализации
```bash
npm ci
npm start
```
В отдельном терминале:
```bash
npm run android
```

## Сборка APK после инициализации
```bash
cd android
bash ./gradlew assembleDebug
```
Ожидаемый файл: `android/app/build/outputs/apk/debug/app-debug.apk`.

GitHub Actions: вкладка **Actions** → **Android debug APK** → **Run workflow**. После успешной сборки скачайте artifact `hello-android-debug-apk`.

Подробности: [требования](docs/REQUIREMENTS.md), [план](docs/TASKS.md), [инструкции Codex](AGENTS.md).
