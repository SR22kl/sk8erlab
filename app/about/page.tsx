import type { Metadata } from "next";

import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { HorizontalLine, VerticalLine } from "@/components/Line";

export const metadata: Metadata = {
  title: "About SK8erLab",
  description:
    "Meet the studio behind bold, custom skateboards built for riders who want personality in every push.",
};

const values = [
  {
    title: "Built by riders",
    copy: "Every board is shaped with the same energy we look for in the streets: unapologetic, fast, and a little bit wild.",
  },
  {
    title: "Made to stand out",
    copy: "From graphic direction to finish quality, every detail is tuned to feel loud, tactile, and unmistakably SK8erLab.",
  },
  {
    title: "Crafted for the city",
    copy: "We design with the rhythm of the pavement in mind, blending expression with the practical grit of everyday riding.",
  },
];

const stats = [
  { label: "Custom builds", value: "100+" },
  { label: "Studio vibe", value: "Pure chaos" },
  { label: "Rider-first", value: "Always" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-lime bg-texture text-brand-black">
      <section className="overflow-hidden bg-transparent">
        <Bounded className="relative">
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="space-y-6">
              <Heading
                size="xl"
                className="mt-20 max-w-3xl text-brand-orange md:mt-8"
              >
                We make skateboards that look like they were born in motion.
              </Heading>
              <p className="max-w-2xl text-lg leading-8 text-brand-charcoal/80">
                SK8erLab is a small studio built around one big idea: a
                skateboard should feel like an extension of your attitude. We
                pair street-ready construction with bold visuals, punchy color,
                and a handmade sense of personality.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLink
                  href="/build"
                  color="orange"
                  size="sm"
                  icon="skateboard"
                >
                  Build your board
                </ButtonLink>
                <ButtonLink href="/" color="purple" size="sm" icon="plus">
                  Back to home
                </ButtonLink>
              </div>
            </div>

            <div className="group bg-brand-orange p-6 button-cutout transition-all duration-300 sm:p-8">
              <div className="mb-6 flex items-center justify-between gap-3">
                <p className="font-heading text-sm uppercase tracking-[0.2em] text-brand-purple">
                  Studio note
                </p>
                <div className="rounded-full border-2 border-brand-black px-3 py-1 text-sm font-bold uppercase">
                  Since 2024
                </div>
              </div>
              <p className="text-lg leading-8 text-brand-black">
                We are obsessed with the tension between clean geometry and raw
                energy. Every build starts with a mood, a shape, and a reason to
                stand out when the whole street is moving.
              </p>
              <div className="mt-8 flex items-center justify-between border-t-2 border-brand-black pt-4 text-sm font-semibold uppercase tracking-[0.2em]">
                <span>Built for skaters</span>
                <span>Built to last</span>
              </div>
            </div>
          </div>
        </Bounded>
      </section>

      <Bounded className="pt-0">
        <div className="grid gap-12 md:grid-cols-3 ">
          {values.map((value) => (
            <article
              key={value.title}
              className="border-brand-black bg-brand-white p-6 button-cutout transition-all duration-300 hover:-translate-y-1 hover:translate-x-1"
            >
              <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-blue">
                {value.title}
              </p>
              <p className="mt-4 text-base leading-7 text-brand-charcoal/80">
                {value.copy}
              </p>
            </article>
          ))}
        </div>
      </Bounded>

      <Bounded className="pt-0">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-brand-white p-8 button-cutout transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 ">
            <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-orange">
              The mindset
            </p>
            <Heading size="md" className="mt-4 text-brand-purple">
              Built for riders who want their setup to say something.
            </Heading>
            <p className="mt-5 text-lg leading-8 text-brand-charcoal/80">
              Our boards are not just transport tools. They are part of your
              identity, your rhythm, your daily commute, and your favorite line
              in the city.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-brand-orange" />
                <p className="text-base leading-7 text-brand-charcoal/80">
                  Bold graphics that feel hand-drawn, not mass-produced.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-brand-blue" />
                <p className="text-base leading-7 text-brand-charcoal/80">
                  Premium finishes that stay crisp from the first push to the
                  last session.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-brand-lime" />
                <p className="text-base leading-7 text-brand-charcoal/80">
                  A custom feel that makes every board feel personal, not
                  generic.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-brand-pink p-8 button-cutout transition-all duration-300 hover:-translate-y-1 hover:translate-x-1 ">
            <div className="absolute left-0 top-0 h-full w-20 bg-brand-yellow/50" />
            <div className="relative z-10 flex h-full flex-col justify-between gap-6">
              <div>
                <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-purple">
                  What we believe
                </p>
                <p className="mt-4 text-2xl leading-10 font-semibold text-brand-black sm:text-3xl">
                  “A good board should hit like a soundtrack and look like a
                  poster at the same time.”
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="min-w-32 border-2 border-brand-black bg-brand-white p-4 transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02]"
                  >
                    <p className="font-heading text-xl text-brand-purple">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-brand-charcoal/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Bounded>

      <Bounded className="pt-0">
        <div className="bg-brand-yellow p-8 button-cutout transition-all duration-300 hover:-translate-y-1 hover:translate-x-1  sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="font-heading text-sm uppercase tracking-[0.25em] text-brand-purple">
                The final push
              </p>
              <Heading size="md" className="mt-3 text-brand-black">
                If you want a board with a pulse, you are in the right place.
              </Heading>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/build" color="purple" size="sm" icon="plus">
                Start a custom build
              </ButtonLink>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <HorizontalLine className="h-4 w-full max-w-xl text-brand-black" />
            <VerticalLine className="hidden h-20 w-4 text-brand-black md:block" />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
