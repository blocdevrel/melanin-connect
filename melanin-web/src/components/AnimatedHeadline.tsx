const STAGGER_SECONDS = 0.03;

type Line = {
  text: string;
  /** Delay in seconds before the first character of this line appears. */
  startDelay: number;
  className?: string;
};

/** Reveals a headline character by character, keeping each word on one line. */
export function AnimatedHeadline({ lines, className }: { lines: Line[]; className?: string }) {
  const label = lines.map((line) => line.text).join(" ");

  return (
    <h1 className={className} aria-label={label}>
      {lines.map((line) => {
        let charIndex = 0;
        const words = line.text.split(" ");
        return (
          <span key={line.text} className={`block ${line.className ?? ""}`} aria-hidden="true">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block whitespace-nowrap">
                {[...word].map((char, i) => {
                  const delay = line.startDelay + charIndex++ * STAGGER_SECONDS;
                  return (
                    <span
                      key={i}
                      className="inline-block animate-character-reveal"
                      style={{ animationDelay: `${delay.toFixed(2)}s` }}
                    >
                      {char}
                    </span>
                  );
                })}
                {wordIndex < words.length - 1 && <span className="inline-block w-[0.25em]"> </span>}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}
