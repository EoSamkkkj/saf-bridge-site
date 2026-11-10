# Saf-Bridge · site de vendas

Landing page do plugin Saf-Bridge (Figma → After Effects). Next.js, publicado na Vercel (push na main republica).

## Trocar o link de venda
- Arquivo `config.js`, constante `CHECKOUT_URL`, **ou**
- Na Vercel: Settings → Environment Variables → `NEXT_PUBLIC_CHECKOUT_URL` (e redeploy).
- Preço opcional: `PRICE` no `config.js` ou `NEXT_PUBLIC_PRICE` (ex.: `R$ 97`).

## Rodar local
npm install && npm run dev  → http://localhost:3210
