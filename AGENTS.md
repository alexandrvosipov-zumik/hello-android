# AGENTS.md

## Goal
Build a minimal Android app with React Native CLI and TypeScript. Display centered text «Привет, мир!» and produce a debug APK.

## Development rules
- Use React Native CLI, not Expo.
- Keep the code simple and dependencies minimal.
- Place screens in `src/screens/` and reusable components in `src/components/`.
- Never commit secrets, signing keys, `.env` files or build artifacts.
- Keep `README.md` current when setup or behavior changes.
- Avoid unrelated changes and explain major decisions.

## Verification
- Run TypeScript, lint, tests and Android debug build where available.
- Report which checks succeeded and which could not be run.
- Do not claim an APK was built unless the build completed successfully.

## Initial acceptance criteria
- The Android app launches without crashing.
- The main screen shows «Привет, мир!» centered.
- README documents local setup and APK build.
- GitHub Actions uploads the debug APK as an artifact.
