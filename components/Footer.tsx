import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { Logo } from "@/components/Logo";
import { Bounded } from "./Bounded";
import { FooterPhysics } from "./FooterPhysics";
import { asImageSrc } from "@prismicio/client";

type Props = {};

export async function Footer({}: Props) {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const boardTextureURLs = settings.data.footer_skateboards
    .map((item) => asImageSrc(item.skateboard, { h: 600 }))
    .filter((url): url is string => Boolean(url)); // Filter out undefined values

  return (
    <>
      <footer className="bg-texture bg-zinc-900 overflow-hidden">
        <div className="relative h-[75vh] p-[clamp(2.5rem,1rem+3.75vw,4rem)]">
          {/* Image */}
          <PrismicNextImage
            field={settings.data.footer_image}
            alt=""
            fill
            className="object-cover"
            width={1200}
          />

          {/* Physics Boards */}

          {/* logo */}
          <FooterPhysics
            boardTextureURLs={boardTextureURLs}
            className=" absolute inset-0 overflow-hidden"
          />
          <Logo className="pointer-events-none relative h-20 text-brand-lime mix-blend-exclusion md:h-28" />
        </div>

        <Bounded as={"nav"}>
          <ul className="flex flex-wrap justify-center gap-8 text-brand-gray text-[clamp(1.125rem,1rem+0.3125vw,1.25rem)]">
            {settings.data.navigation.map((item) => (
              <li
                key={item.link.text}
                className="hover:text-brand-lime hover:underline"
              >
                <PrismicNextLink field={item.link} />
              </li>
            ))}
          </ul>
        </Bounded>

        {/* List of links */}
      </footer>
    </>
  );
}
