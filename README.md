# Earth → Moon/Mars

An Angular single-page experience about using extreme environments on Earth as analogs for future human missions to the Moon and Mars.

The page presents:

- A mission overview explaining why Earth analogs are useful.
- Earth, Moon, and Mars visual references.
- Filterable analog locations for Moon and Mars research.
- An OpenStreetMap world map embed.
- A details modal for each analog location.
- Goals for safer missions and Earth-based innovation.

## Tech stack

- Angular 22
- TypeScript 6
- RxJS 7
- Vitest through Angular CLI
- Native HTML and CSS

## Requirements

- Node.js compatible with Angular 22
- npm 11 (the repository declares `npm@11.16.0`)

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open `http://localhost:4200/` in a browser. The development server reloads the page when source files change.

## Available scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Angular development server. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run watch` | Build in development mode and rebuild on changes. |
| `npm test` | Run the unit tests with Vitest. |

Angular CLI commands can also be run through `npm run ng -- <command>`.

## Project structure

```text
src/
├── app/
│   ├── app.component.*       # Main page layout, content, and state
│   ├── app.config.ts         # Application providers
│   ├── app.routes.ts         # Route configuration
│   └── components/           # Navbar, hero, mission, locations, and footer
├── index.html                # HTML entry point
├── main.ts                  # Angular bootstrap
└── styles.css               # Global styles
public/                       # Static assets copied to the build
```

The current page content and analog-location data are defined in `src/app/app.component.ts` and rendered by `src/app/app.component.html`. Images are loaded from Unsplash and the map is embedded from OpenStreetMap, so those external resources require network access when the page is viewed.

## Testing

Unit-test files are colocated with the application and component source files using the `*.spec.ts` naming convention. Run the test suite with:

```bash
npm test
```

## Building for production

```bash
npm run build
```

The production output is written to `dist/`. The Angular production configuration includes bundle and component-style size budgets.

## Further reading

- [Angular CLI documentation](https://angular.dev/tools/cli)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Vitest documentation](https://vitest.dev/)
