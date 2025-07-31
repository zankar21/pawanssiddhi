import React from "react";

export default function PageLayout({
  title,
  description,
  heroButton,
  children,
  bgGradient = true,
}) {
  return (
    <>
      <section
        className={
          "relative flex flex-col items-center justify-center min-h-[340px] md:min-h-[420px] text-center " +
          (bgGradient
            ? "bg-gradient-to-r from-primary to-secondary"
            : "bg-gray-100")
        }
        style={{ marginTop: "4.5rem" }}
      >
        <div className="absolute inset-0 bg-white/10 pointer-events-none" style={{ zIndex: 0 }} />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 pt-8 md:pt-12 drop-shadow-md">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-gray-800 max-w-2xl mx-auto mb-4 drop-shadow-sm">{description}</p>
          )}
          {heroButton}
        </div>
      </section>
      <main className="max-w-7xl mx-auto py-12 px-4">{children}</main>
    </>
  );
}
