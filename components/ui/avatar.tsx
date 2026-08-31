import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Avatar({
  photo,
  initials,
  name,
  size = 96,
  className,
}: {
  photo?: string;
  initials: string;
  name: string;
  size?: number;
  className?: string;
}) {
  if (photo) {
    return (
      <Image
        src={photo}
        alt={name}
        width={size}
        height={size}
        className={cn("rounded-2xl object-cover", className)}
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-2xl bg-gradient-to-br from-brand via-brand-600 to-violet font-display text-xl font-semibold text-white",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
