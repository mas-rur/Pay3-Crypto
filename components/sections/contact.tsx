import { ArrowUpRight, Github, Instagram, Mail, Wallet } from "lucide-react";
import { socials } from "@/lib/data";

const channels = [
  {
    label: "GitHub",
    value: socials.github.label,
    href: socials.github.href,
    icon: Github,
  },
  {
    label: "Instagram",
    value: socials.instagram.label,
    href: socials.instagram.href,
    icon: Instagram,
  },
  {
    label: "EVM Wallet",
    value: socials.wallet.label,
    href: socials.wallet.href,
    icon: Wallet,
  },
  {
    label: "Email",
    value: socials.email.label,
    href: socials.email.href,
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section py-16 md:py-20">
      <div className="overflow-hidden rounded-2xl border border-paper-line bg-ink px-6 py-12 sm:px-10 sm:py-14">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-200">
            Questions about Pay3, partnerships, or the token? Reach the team
            directly.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer"
              className="group flex flex-col justify-between gap-6 rounded-xl border border-white/10 bg-white/[0.04] p-5 transition-colors hover:border-white/25 hover:bg-white/[0.07]"
            >
              <div className="flex items-center justify-between">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                  <channel.icon size={16} />
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-white/30 transition-colors group-hover:text-white/70"
                />
              </div>
              <div>
                <p className="text-xs text-ink-200">{channel.label}</p>
                <p className="mt-0.5 truncate text-sm font-medium text-white">
                  {channel.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
