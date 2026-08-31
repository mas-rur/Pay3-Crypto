import Avatar from "@/components/ui/avatar";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="section py-16 md:py-20">
      <div className="mb-10 max-w-lg">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Team
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-ink-400">
          The people building Pay3.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.name}
            className="flex items-start gap-4 rounded-2xl border border-paper-line bg-white p-6"
          >
            <Avatar
              photo={member.photo}
              initials={member.initials}
              name={member.name}
              size={64}
              className="shrink-0"
            />
            <div>
              <p className="font-display text-base font-semibold text-ink">
                {member.name}
              </p>
              <p className="text-xs font-medium text-brand">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-400">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
