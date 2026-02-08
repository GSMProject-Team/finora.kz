"use client";

import { useState } from "react";
import Link from "next/link";

export default function RequestPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Finance",
    message: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("REQUEST:", form);
    alert("Request sent (demo). Check console.");
  }

  return (
    <main className="min-h-screen px-6 py-12">
      <div className="mx-auto w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-semibold text-white">Start consultation</h1>
          <Link href="/" className="text-sm text-white/70 hover:text-white">
            ← Back
          </Link>
        </div>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4">
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Your name"
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white outline-none focus:border-white/20"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="you@email.com"
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white outline-none focus:border-white/20"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={onChange}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white outline-none focus:border-white/20"
            >
              <option className="bg-slate-900">Finance</option>
              <option className="bg-slate-900">Legal</option>
              <option className="bg-slate-900">Accounting</option>
            </select>
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Describe your request..."
              rows={5}
              className="rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-white outline-none focus:border-white/20"
            />
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-2 text-sm font-medium text-white hover:bg-blue-600 transition"
          >
            Send request
          </button>

          <p className="text-xs text-white/50">
            Бұл әзірге demo: submit болса console-ға шығарады.
          </p>
        </form>
      </div>
    </main>
  );
}
