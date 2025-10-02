# Copilot Instructions - Pereira & Zanatta Advogados Landing Page

## 📋 Visão Geral do Projeto

Este é um projeto de landing page para um escritório de advocacia usando **React 19**, **TypeScript**, **Vite** e **Tailwind CSS v4**. O projeto segue práticas modernas de desenvolvimento front-end com foco em performance, acessibilidade e experiência do usuário.

## 🛠️ Stack Tecnológica

- **React 19** com TypeScript
- **Vite** como bundler e servidor de desenvolvimento
- **Tailwind CSS v4** para estilização
- **ESLint** configurado para TypeScript e React
- **Lucide React** para ícones

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes base (Button, etc.)
│   └── Navigation.tsx  # Componente de navegação
├── assets/             # Imagens, fontes e outros assets
├── App.tsx             # Componente principal
├── main.tsx            # Ponto de entrada da aplicação
├── App.css             # Estilos específicos do App
└── index.css           # Estilos globais e Tailwind
```

## 🎯 Diretrizes de Desenvolvimento

### TypeScript

- **SEMPRE** use TypeScript em todos os novos arquivos
- Defina interfaces para props de componentes
- Use tipos específicos ao invés de `any`
- Aproveite a inferência de tipos quando possível
- Para componentes React, use `React.FC<Props>` ou função com tipo de retorno explícito

```typescript
// ✅ Bom
interface ButtonProps {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({
  variant = "primary",
  children,
  onClick,
}: ButtonProps) {
  // implementação
}

// ❌ Evitar
export function Button(props: any) {
  // implementação
}
```

### React e Componentes

- **Use componentes funcionais** com hooks
- Prefira **named exports** ao invés de default exports para componentes
- Organize componentes em arquivos separados
- Use **React.memo()** para componentes que recebem props complexas
- Implemente **error boundaries** quando necessário

```typescript
// ✅ Bom
export const Navigation = React.memo(() => {
  // implementação
});

// ✅ Bom - para componentes simples
export function Button({ children }: ButtonProps) {
  return <button>{children}</button>;
}
```

### Hooks e Estado

- Use **useState** para estado local simples
- Use **useReducer** para estado complexo
- Extraia lógica customizada em **custom hooks**
- Use **useCallback** e **useMemo** quando apropriado
- Prefira **useId()** para IDs únicos

```typescript
// ✅ Bom
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle] as const;
}
```

### Tailwind CSS

- **Use classes utilitárias** ao invés de CSS customizado
- Aproveite o **design system** do Tailwind
- Use **responsive design** com prefixos (`sm:`, `md:`, `lg:`, `xl:`)
- Prefira **design tokens** do Tailwind para consistência
- Use **@apply** apenas quando necessário (componentes complexos)

```typescript
// ✅ Bom
<button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
  Clique aqui
</button>

// ✅ Responsive
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

### Acessibilidade

- **SEMPRE** inclua atributos ARIA apropriados
- Use **semantic HTML** (button, nav, main, section, etc.)
- Implemente **navegação por teclado**
- Garanta **contraste adequado** nas cores
- Use **alt text** descritivo em imagens

```typescript
// ✅ Bom
<button aria-label="Fechar menu" aria-expanded={isOpen} onClick={handleClose}>
  <X className="h-6 w-6" />
</button>
```

### Performance

- Use **lazy loading** para componentes pesados
- Implemente **code splitting** quando necessário
- Otimize **imagens** (use WebP quando possível)
- Minimize **re-renders** desnecessários
- Use **Suspense** para carregamento assíncrono

```typescript
// ✅ Bom
const LazyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### Vite

- Use **path aliases** (`@/` para src)
- Configure **environment variables** apropriadamente
- Aproveite **HMR** para desenvolvimento rápido
- Use **dynamic imports** para code splitting

```typescript
// ✅ Bom - usando alias
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
```

### Organização de Arquivos

- **Um componente por arquivo**
- Use **index.ts** para re-exports quando apropriado
- Mantenha **assets organizados** por tipo
- Coloque **utilitários** em pasta separada (`utils/`)

```
src/
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   └── index.ts         # Re-exports
│   └── Navigation.tsx
├── utils/
│   ├── cn.ts               # className utility
│   └── formatters.ts
└── types/
    └── index.ts            # Type definitions
```

### Convenções de Nomenclatura

- **PascalCase** para componentes: `Navigation`, `Button`
- **camelCase** para funções e variáveis: `handleClick`, `isOpen`
- **UPPER_CASE** para constantes: `API_BASE_URL`
- **kebab-case** para arquivos CSS: `main.css`

### Git e Commits

- Use **conventional commits**: `feat:`, `fix:`, `docs:`, etc.
- Faça **commits pequenos e focados**
- Teste **antes de cada commit**
- Use **branches descritivas**: `feature/navigation`, `fix/button-style`

## 🚫 O Que Evitar

- ❌ Não use `any` em TypeScript
- ❌ Não misture CSS inline com Tailwind
- ❌ Não deixe console.log em produção
- ❌ Não ignore warnings do ESLint
- ❌ Não use `useEffect` desnecessariamente
- ❌ Não hardcode valores que deveriam ser configuráveis

## 🧪 Testes

- Escreva **testes unitários** para utilitários
- Teste **interações do usuário** em componentes
- Use **React Testing Library** para testes de componentes
- Mantenha **coverage** adequado

## 📱 Responsividade

- **Mobile-first** approach
- Teste em **diferentes dispositivos**
- Use **breakpoints** do Tailwind
- Implemente **touch-friendly** interfaces

## 🔧 Ferramentas de Desenvolvimento

- Use **TypeScript strict mode**
- Configure **Prettier** para formatação
- Use **ESLint** para qualidade de código
- Aproveite **Vite DevTools**

Lembre-se: O objetivo é criar uma landing page **profissional**, **performática** e **acessível** que represente bem o escritório de advocacia Pereira & Zanatta.
