// ===== Troque aqui o link de venda =====
// Ou defina a variável NEXT_PUBLIC_CHECKOUT_URL na Vercel (Settings → Environment Variables).
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.cakto.com.br/SEU-LINK-AQUI";

// Preço exibido no card (ex.: "R$ 97"). Deixe "" para esconder o valor.
export const PRICE = process.env.NEXT_PUBLIC_PRICE || "";

export const SUPPORT = "@EosamKkkj";
