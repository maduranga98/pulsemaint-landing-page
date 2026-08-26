import type { Block } from "../../blog-data";

function Paragraph({ text, lead = false }: { text: string; lead?: boolean }) {
  if (!lead) return <p>{text}</p>;
  return (
    <p className="text-[19px] leading-[1.7] text-ink first-letter:float-left first-letter:mr-3 first-letter:font-sora first-letter:text-[56px] first-letter:font-bold first-letter:leading-[0.9] first-letter:text-pulse">
      {text}
    </p>
  );
}

function Callout({ label, text }: { label?: string; text: string }) {
  return (
    <div className="my-10 rounded-xl border border-pulse/35 bg-pulse/5 p-6">
      {label ? <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-pulse">{label}</div> : null}
      <p className="mb-0 text-ink">{text}</p>
    </div>
  );
}

function Stats({ items }: { items: [string, string][] }) {
  return (
    <div className="my-8 grid gap-3 sm:grid-cols-4">
      {items.map(([value, label]) => (
        <div key={label} className="rounded-lg border border-white/8 bg-navy-800/40 p-4">
          <div className="font-sora text-3xl font-bold text-pulse">{value}</div>
          <div className="mt-2 font-mono text-[11px] uppercase tracking-wider text-ink-mute">{label}</div>
        </div>
      ))}
    </div>
  );
}

function Table({ caption, headers, rows }: { caption?: string; headers: string[]; rows: string[][] }) {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-xl border border-white/8 bg-navy-800/30">
        <table className="w-full min-w-[38rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10">
              {headers.map((header) => (
                <th key={header} scope="col" className="px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-ink-mute">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.join("|")} className="border-b border-white/6 last:border-0">
                {row.map((cell, index) => (
                  <td key={index} className={index === 0 ? "px-4 py-3 font-medium text-ink" : "px-4 py-3 text-ink-dim"}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption ? <figcaption className="mt-3 font-mono text-[11px] leading-relaxed text-ink-mute">{caption}</figcaption> : null}
    </figure>
  );
}

function Steps({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="my-10 grid gap-3 sm:grid-cols-2">
      {items.map((item, index) => (
        <div key={item.title} className="rounded-xl border border-white/8 bg-navy-800/30 p-5">
          <div className="font-mono text-xs text-pulse">{String(index + 1).padStart(2, "0")}</div>
          <div className="mt-2 font-sora font-semibold text-ink">{item.title}</div>
          <p className="mb-0 mt-2 text-sm leading-relaxed text-ink-dim">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

function Bars({ caption, note, items }: { caption?: string; note?: string; items: { label: string; value: number; display: string }[] }) {
  const max = Math.max(...items.map((item) => item.value), 1);
  return (
    <figure className="my-10 rounded-xl border border-white/8 bg-navy-800/30 p-6">
      {caption ? <figcaption className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">{caption}</figcaption> : null}
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-4 text-sm">
              <span className="text-ink-dim">{item.label}</span>
              <span className="font-mono text-xs text-pulse">{item.display}</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-navy-950">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pulse to-power-400"
                style={{ width: `${Math.max((item.value / max) * 100, 4)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {note ? <p className="mb-0 mt-5 text-xs leading-relaxed text-ink-mute">{note}</p> : null}
    </figure>
  );
}

function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="my-8 flex flex-col gap-3">
      {items.map((item) => (
        <details key={item.q} className="group rounded-xl border border-white/8 bg-navy-800/30 p-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-sora font-semibold text-ink marker:hidden group-open:text-pulse">
            <span>{item.q}</span>
            <span aria-hidden className="mt-0.5 shrink-0 font-mono text-lg leading-none text-pulse transition group-open:rotate-45">+</span>
          </summary>
          <p className="mb-0 mt-3 text-sm leading-relaxed text-ink-dim">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function ArticleBlock({ block, lead = false }: { block: Block; lead?: boolean }) {
  switch (block.type) {
    case "p":
      return <Paragraph text={block.text} lead={lead} />;
    case "ul":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      );
    case "callout":
      return <Callout label={block.label} text={block.text} />;
    case "stats":
      return <Stats items={block.items} />;
    case "table":
      return <Table caption={block.caption} headers={block.headers} rows={block.rows} />;
    case "steps":
      return <Steps items={block.items} />;
    case "bars":
      return <Bars caption={block.caption} note={block.note} items={block.items} />;
    case "faq":
      return <Faq items={block.items} />;
  }
}
