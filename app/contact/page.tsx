// app/contact/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "문의 | LureMonster",
  description: "LureMonster 문의하기",
};

export default function ContactPage() {
  return (
    <main className="container py-14">
      <section className="mx-auto max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold">문의</h1>
        <p className="mt-4 text-neutral-600">
          제휴/광고/기술지원 등 문의는 아래 양식을 통해 전달해 주세요. 빠르게 답변드릴게요!
        </p>

        <form className="mt-8 grid gap-4 rounded-2xl bg-white p-6 shadow-[0_6px_24px_rgba(0,0,0,0.06)]">
          <label className="grid gap-2">
            <span className="text-sm font-medium">이름</span>
            <input className="rounded-xl border px-4 py-3 outline-none focus:border-brand" placeholder="홍길동" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">이메일</span>
            <input type="email" className="rounded-xl border px-4 py-3 outline-none focus:border-brand" placeholder="you@example.com" />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium">내용</span>
            <textarea rows={6} className="rounded-xl border px-4 py-3 outline-none focus:border-brand" placeholder="문의 내용을 적어주세요." />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-2xl bg-brand/90 px-6 py-3 text-white font-semibold hover:bg-brand transition-all"
          >
            보내기
          </button>
        </form>
      </section>
    </main>
  );
}
