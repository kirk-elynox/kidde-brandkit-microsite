"use client";

import { useState, useId } from "react";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  // Allow multiple open at once vs. single-open ("exclusive"). FAQ pages
  // usually want multi-open; doc-style nav accordions often want exclusive.
  mode?: "multi" | "exclusive";
}

export function Accordion({ items, mode = "multi" }: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());
  const baseId = useId();

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(mode === "exclusive" ? [] : prev);
      if (prev.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-brand-panel-alt rounded-2xl border border-brand-panel-alt bg-white">
      {items.map((item, index) => {
        const isOpen = openIndexes.has(index);
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-brand-ink"
            >
              {item.question}
              <span
                aria-hidden
                className={`shrink-0 text-brand-slate transition-transform duration-150 ${isOpen ? "rotate-45" : ""}`}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4 text-sm text-brand-slate">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
