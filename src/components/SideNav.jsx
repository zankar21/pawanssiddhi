import { useState, useEffect } from 'react';
import clsx from 'clsx';

const sections = [
  { id: 'hero',      label: 'Home'      },
  { id: 'services',  label: 'Services'  },
  { id: 'stats',     label: 'Stats'     },
  { id: 'about',     label: 'About'     },
  { id: 'partners',  label: 'Partners'  },
  { id: 'case',      label: 'Case Study'},
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'showcase',  label: '3D'        },
  { id: 'process',   label: 'Process'   },
  { id: 'contact',   label: 'Contact'   },
];

export default function SideNav() {
  const [active, setActive] = useState(sections[0].id);

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' } // trigger when section is centered
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-1/2 right-4 z-50 transform -translate-y-1/2 space-y-3">
      {sections.map(s => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className={clsx(
            'block w-3 h-3 rounded-full transition-transform',
            active === s.id
              ? 'scale-150 bg-blue-600'
              : 'bg-gray-300 hover:scale-125'
          )}
          aria-label={s.label}
        />
      ))}
    </nav>
  );
}
