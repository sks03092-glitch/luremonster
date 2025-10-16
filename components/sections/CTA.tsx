"use client";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section id="cta" className="py-24">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-10 sm:p-16"
        >
          <h3 className="text-2xl font-bold text-neutral-900">
            루어몬스터 Lure Talk Beta.ver
          </h3>
          <p className="text-neutral-600 mt-2">
            Beta Tester가 되어 이용후기를 남겨주세요!
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-2xl text-lg font-semibold
                         bg-brand/90 text-white hover:bg-brand transition-all
                         shadow-[0_4px_10px_rgba(234,85,20,0.25)] hover:shadow-[0_6px_16px_rgba(234,85,20,0.4)]"
            >
              Lure Talk GO!
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
