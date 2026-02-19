'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  idPrefix?: string;
}

export default function FAQAccordion({ items, idPrefix = 'faq' }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div role="list">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`faq-item${isOpen ? ' open' : ''}`}
            role="listitem"
            id={`${idPrefix}-${i}`}
          >
            <button
              className="faq-question"
              aria-expanded={isOpen}
              aria-controls={`${idPrefix}-${i}-answer`}
              onClick={() => toggle(i)}
            >
              <h4>{faq.q}</h4>
              <div className="faq-question__icon" aria-hidden="true">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </button>
            <div
              className="faq-answer"
              id={`${idPrefix}-${i}-answer`}
              role="region"
              aria-labelledby={`${idPrefix}-${i}`}
            >
              <p>{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
