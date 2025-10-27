// app/lib/config.ts
// 한 곳에서만 바꾸면 전체 반영됨
export const STORE_URL = "https://smartstore.naver.com/luremonster"; // ✅ 원하는 스토어 URL
export const CONTACT_FALLBACK_EMAIL = "owner@example.com";  // ✅ mailto 백업용
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || CONTACT_FALLBACK_EMAIL;
