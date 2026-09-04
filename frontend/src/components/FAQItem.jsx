import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Highlight unconfirmed answers so placeholders read as intentional,
// not as broken content.
function renderAnswer(text) {
  const parts = text.split(/(\[TO BE CONFIRMED[^\]]*\])/g);
  return parts.map((part, i) =>
    part.startsWith("[TO BE CONFIRMED") ? (
      <span key={i} className="tbc">
        {part}
      </span>
    ) : (
      part
    )
  );
}

export function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "faq-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <ChevronDown size={20} aria-hidden="true" className="faq-icon" />
      </button>
      {open && (
        <div className="faq-answer">
          <p>{renderAnswer(answer)}</p>
        </div>
      )}
    </div>
  );
}
