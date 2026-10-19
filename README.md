# DevBurguer

## Pagamentos (Stripe) em modo de teste

Este projeto usa o Stripe em **modo de teste** (`pk_test_...` / `sk_test_...`). Por isso, no checkout aparece um painel flutuante **"Stripe Developers"** no canto da tela — isso é um comportamento intencional do próprio Stripe, exibido para **qualquer visitante** sempre que o checkout está usando uma chave de teste, como aviso de que nenhum pagamento real está sendo processado. Não é um bug e não tem como removê-lo via código.

Cartões de teste pra usar no checkout: [stripe.com/docs/testing](https://stripe.com/docs/testing) (ex: `4242 4242 4242 4242`, qualquer data futura e CVC).

Para usar pagamentos reais, trocar:
- `VITE_STRIPE_PUBLISHABLE_KEY` (front, nesta Vercel) por uma chave `pk_live_...`
- `STRIPE_SECRET_KEY` (backend, no Render) por uma chave `sk_live_...`

Nenhum código precisa mudar — só as variáveis de ambiente.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
