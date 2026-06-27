import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import {
  PrismicRichText,
  PrismicText,
  SliceComponentProps,
} from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { PrismicNextLink } from "@prismicio/next";
import { Heading } from "@/components/Heading";
import SkateboardProduct from "./SkateboardProduct";

/**
 * Props for `ProductGrid`.
 */
export type ProductGridProps = SliceComponentProps<Content.ProductGridSlice>;

/**
 * Component for "ProductGrid" Slices.
 */
const ProductGrid: FC<ProductGridProps> = ({ slice }) => {
  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="bg-texture bg-gray-200"
      >
        <Heading
          className="text-center mb-[clamp(1rem,0.7727rem+1.1364vw,1.5rem)]"
          as="h2"
        >
          <PrismicText field={slice.primary.heading} />
        </Heading>

        <div className="text-center mb-[clamp(1.5rem,1.0455rem+2.2727vw,2.5rem)]">
          <PrismicRichText field={slice.primary.body} />
        </div>

        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {slice.primary.product.map(
            ({ skateboard }) =>
              isFilled.contentRelationship(skateboard) && (
                <SkateboardProduct key={skateboard.id} id={skateboard.id} />
              ),
          )}
        </div>
      </Bounded>
    </>
  );
};

export default ProductGrid;
