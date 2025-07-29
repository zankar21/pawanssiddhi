// src/components/SpecsAccordion.jsx
import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function SpecsAccordion({ items }) {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {items.map(item => (
        <div key={item.id} className="border rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex justify-between items-center px-4 py-3 bg-off-white"
          >
            <span className="font-heading text-charcoal">{item.name || item.title}</span>
            {openId === item.id ? (
              <ChevronUpIcon className="h-5 w-5 text-primary" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-primary" />
            )}
          </button>
          {openId === item.id && (
            <div className="p-4 bg-white text-slate">
              {item.specs
                ? item.specs.map((line, idx) => <p key={idx}>{line}</p>)
                : <p>{item.description}</p>
              }
            </div>
          )}
        </div>
      ))}
    </div>
  );
}