import { ButtonLink } from "@/components/ButtonLink";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import { createClient } from "@/prismicio";
import { Content, isFilled } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { FaStar } from "react-icons/fa6";
import { Scribble } from "./Scribble";

type Props = {
  id: string;
};

async function getDominantColor(url: string) {
  const paletteUrl = new URL(url);
  paletteUrl.searchParams.set("palette", "json");

  const res = await fetch(paletteUrl);
  const json = await res.json();
  console.log(json);

  return (
    json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex
  );
}

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-400 transition-colors duration-400 group-hover:text-stone-600";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 storke-2 text-stone-400 transition-colors duration-400 group-hover:text-stone-600";

export default async function SkateboardProduct({ id }: Props) {
  const client = createClient();
  const product = await client.getByID<Content.SkateboardDocument>(id);

  const price = isFilled.number(product.data.price)
    ? `$${(product.data.price / 100).toFixed(2)}`
    : "Price Not Available";

  const dominantColor = isFilled.image(product.data.image)
    ? await getDominantColor(product.data.image.url)
    : undefined;

  return (
    <>
      <div className="group relative mx-auto w-full max-w-72 px-8 pt-4">
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
        <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />

        <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />
        <div className="flex items-center justify-between text-[clamp(0.875rem,calc(0.5909rem+1.4205vw),1.5rem)]">
          <span>{price}</span>
          <span className="inline-flex items-center gap-1">
            <FaStar className="text-orange-400" /> 45
          </span>
        </div>

        <div className="-mb-1 overflow-hidden py-4">
          <Scribble
            className=" absolute inset-0 h-full w-full"
            color={dominantColor}
          />
          <PrismicNextImage
            field={product.data.image}
            alt=""
            width={150}
            className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
          />
        </div>
        <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

        <h3 className="my-2 text-center font-heading text-[clamp(1.125rem,calc(1.0682rem+0.2841vw),1.25rem)]">
          {product.data.name}
        </h3>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300  group-hover:opacity-100">
          <ButtonLink field={product.data.customizer_link} size="sm">
            Customize
          </ButtonLink>
        </div>
      </div>
    </>
  );
}
