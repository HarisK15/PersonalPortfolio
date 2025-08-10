// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState(null); // 'ok' | 'err' | null

  // Vite only exposes vars that start with VITE_
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  useEffect(() => {
    // init is optional in the new SDK, but guard it
    if (publicKey) {
      try { emailjs.init(publicKey); } catch (e) { console.warn("emailjs init skipped:", e); }
    }
  }, [publicKey]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!serviceId || !templateId || !publicKey) {
      console.warn("Missing EmailJS env vars");
      setStatus("err");
      return;
    }
    if (!formRef.current) return;

    setSending(true);
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("ok");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("err");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="relative z-10 p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>

      <form ref={formRef} onSubmit={onSubmit} className="grid gap-3 max-w-md">
        <input name="user_name" placeholder="Your name" className="p-2 text-black" required />
        <input name="user_email" type="email" placeholder="Your email" className="p-2 text-black" required />
        <textarea name="message" rows="5" placeholder="Message" className="p-2 text-black" required />
        <button disabled={sending} className="bg-purple-600 px-4 py-2 rounded">
          {sending ? "Sending..." : "Send"}
        </button>
        {status === "ok" && <p className="text-green-400">Sent!</p>}
        {status === "err" && <p className="text-red-400">Couldn’t send. Check EmailJS keys.</p>}
      </form>
    </section>
  );
}