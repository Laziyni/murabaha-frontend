# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

## Backend & data fetching

The project now ships with a minimal but structured API layer that allows the React UI to talk to the backend (`http://94.241.139.204:3000` by default).

- Configure the base URL inside your `.env` (see `.env.example`).
- `src/lib/http-client.ts` contains a shared Axios instance plus helpers for surfacing API errors.
- Each domain gets its own service: `src/services/auth.ts`, `clients.ts`, `deals.ts` etc. They encapsulate endpoint URLs and types.
- Hooks under `src/hooks/api/*` wrap TanStack Query’s `useQuery` / `useMutation` so components can stay declarative.
- `src/lib/react-query.ts` exports a configured `QueryClient` which is provided in `src/main.tsx`.

Example login mutation:

```tsx
import { useLoginMutation } from '@/hooks/api/useLoginMutation';

const login = useLoginMutation();
login.mutate({ username: 'demo', password: 'secret' });
```

Example clients query (see `src/components/pages/ClientsPage.tsx`):

```tsx
const { data, isLoading, isError, error } = useClientsQuery();
```

Add new endpoints by creating a function in `src/services`, exporting the matching hook from `src/hooks/api`, and using that hook in the page or component that needs the data.
