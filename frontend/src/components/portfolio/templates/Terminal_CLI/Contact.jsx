import React from "react";
import { Mail, Github, Linkedin, Send, Terminal } from "lucide-react";

export default function Contact() {
  return (
    <section className="w-full px-4 py-10 md:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-green-500/30 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)]">
        
        {/* Terminal Header */}
        <div className="flex items-center gap-2 border-b border-green-500/20 bg-zinc-900 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>

          <div className="ml-4 flex items-center gap-2 text-sm text-green-400">
            <Terminal size={16} />
            <span>contact.sh</span>
          </div>
        </div>

        <div className="p-6 font-mono">
          {/* Heading */}
          <div className="mb-6 text-green-400">
            <p>$ ./contact.sh</p>
            <p className="mt-2 text-zinc-400">
              Establish a connection with the developer...
            </p>
          </div>

          {/* Contact Info */}
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-green-500/20 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-green-400">
                <Mail size={16} />
                <span>Email</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                hello@example.com
              </p>
            </div>

            <div className="rounded-lg border border-green-500/20 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-green-400">
                <Github size={16} />
                <span>GitHub</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                github.com/username
              </p>
            </div>

            <div className="rounded-lg border border-green-500/20 bg-zinc-950 p-4">
              <div className="flex items-center gap-2 text-green-400">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </div>
              <p className="mt-2 text-sm text-zinc-300">
                linkedin.com/in/username
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-green-400">
                $ enter_name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-lg border border-green-500/20 bg-zinc-950 px-4 py-3 text-green-300 outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-green-400">
                $ enter_email
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-lg border border-green-500/20 bg-zinc-950 px-4 py-3 text-green-300 outline-none transition focus:border-green-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-green-400">
                $ enter_message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full rounded-lg border border-green-500/20 bg-zinc-950 px-4 py-3 text-green-300 outline-none transition focus:border-green-500"
              />
            </div>

            <button
              className="flex items-center gap-2 rounded-lg border border-green-500 bg-green-500/10 px-5 py-3 text-green-400 transition hover:bg-green-500/20"
            >
              <Send size={16} />
              <span>$ execute send-message</span>
            </button>

            <div className="pt-3 text-green-400">
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}