import type { CSSProperties, SVGProps } from "react";
import type { IconType } from "react-icons";
import { SiEthereum, SiFlutter, SiMake, SiNotion, SiReact, SiShopify, SiStripe } from "react-icons/si";

type MarkProps = {
  className?: string;
  style?: CSSProperties;
} & SVGProps<SVGSVGElement>;

function OpenAiMark({ className, style, ...props }: MarkProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} style={style} fill="currentColor" {...props}>
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.774-4.23 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.75-7.049zm-9.022 12.608a4.475 4.475 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.585a4.504 4.504 0 0 1-4.494 4.492zm-9.66-4.125a4.471 4.471 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.504 4.504 0 0 1-6.14-1.646zM2.34 7.372A4.485 4.485 0 0 1 4.81 5.385V11c0 .268.144.515.378.645l5.843 3.367-2.02 1.168a.076.076 0 0 1-.071 0L4.163 13.37A4.504 4.504 0 0 1 2.34 7.372zm16.085 3.796-5.844-3.369 2.02-1.164a.076.076 0 0 1 .071 0l4.782 2.759a4.494 4.494 0 0 1-.676 8.105v-5.586a.079.079 0 0 0-.039-.054zm2.01-3.023-.141-.085-4.778-2.763a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.778-2.758a4.5 4.5 0 0 1 6.22 4.067zM8.67 13.039l-2.02-1.164a.08.08 0 0 1-.038-.055V6.24a4.5 4.5 0 0 1 7.375-3.453l-.142.08L9.072 5.623a.771.771 0 0 0-.392.681zm1.098-2.22 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

export type StackLogo = {
  name: string;
  Icon: IconType | typeof OpenAiMark;
  color: string;
};

/** One recognisable framework mark for each capability in the stack row. */
export const stackLogos: StackLogo[] = [
  { name: "AI agents", Icon: OpenAiMark, color: "#10A37F" },
  { name: "Automation", Icon: SiMake, color: "#B14AFF" },
  { name: "Web", Icon: SiReact, color: "#61DAFB" },
  { name: "Mobile", Icon: SiFlutter, color: "#54C5F8" },
  { name: "Commerce", Icon: SiShopify, color: "#96BF48" },
  { name: "Payments", Icon: SiStripe, color: "#635BFF" },
  { name: "Blockchain", Icon: SiEthereum, color: "#627EEA" },
  { name: "Knowledge", Icon: SiNotion, color: "#FFFFFF" },
];
