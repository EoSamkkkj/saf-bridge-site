// ===== Troque aqui o link de venda =====
// Ou defina a variável NEXT_PUBLIC_CHECKOUT_URL na Vercel (Settings → Environment Variables).
export const CHECKOUT_URL =
  process.env.NEXT_PUBLIC_CHECKOUT_URL || "https://pay.cakto.com.br/ziub7i8_1366166";

// Preço exibido no card (ex.: "R$ 97"). Deixe "" para esconder o valor.
export const PRICE = process.env.NEXT_PUBLIC_PRICE || "";

export const SUPPORT = "@EosamKkkj";
