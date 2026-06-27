import Link from "next/link";
import { ButtonLink } from "./ButtonLink";
import { Logo } from "./Logo";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <>
      <header className="header absolute left-0 right-0 top-0 z-50  h-[clamp(8rem,12vw,12rem)] px-[clamp(1rem,2vw,1.5rem)] py-[clamp(1rem,2vw,1.5rem)] hd:h-32">
        <div className="mx-auto grid w-full max-w-6xl md:grid-cols-[1fr_auto_1fr] grid-cols-[1fr_auto] items-center gap-5">
          <Link href="/" className="justify-self-start">
            {/* <img
              src={"/S8logo.png"}
              alt="hero"
              className="h-[clamp(5rem,5vw,5rem)] w-auto"
            /> */}
            <Logo className="text-brand-lime h-[clamp(3rem,2.333rem+3.333vw,5rem)]" />
          </Link>
          <nav
            aria-label="Main"
            className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
          >
            <ul className="flex flex-wrap items-center justify-center gap-8">
              {settings.data.navigation.map((item) => (
                <li key={item.link.text}>
                  <PrismicNextLink
                    field={item.link}
                    className="text-[clamp(1.125rem,calc(1.0682rem+0.2841vw),1.25rem)]"
                  />
                </li>
              ))}
            </ul>
          </nav>
          <div className="justify-self-end row-start-1 col-start-2 md:row-auto md:col-auto">
            <ButtonLink
              href={""}
              size="sm"
              icon="cart"
              color="purple"
              aria-label="Cart (1)"
            >
              <span className="md:hidden">1</span>
              <span className="hidden md:inline">Cart (1)</span>
            </ButtonLink>
          </div>
        </div>
      </header>
    </>
  );
}
