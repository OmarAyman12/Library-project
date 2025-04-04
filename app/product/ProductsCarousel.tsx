import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Book } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
function ProductsCarousel({ products }: { products: Book[] }) {
  return (
    <Carousel className="w-full max-w-xl flex mx-auto mt-12">
      <CarouselContent>
        {products.map((product) => {
          CarouselItem;
          const { title, image, id } = product;
          console.log(image);
          return (
            <CarouselItem key={id}>
              <div>
                <Card className="">
                  <CardContent className="w-full">
                    <Link href={`/product/${String(id)}`}>
                      <h1 className="text-center font-bold">{title}</h1>
                      <Image
                        src={image}
                        alt={title}
                        priority
                        width={600}
                        height={2}
                        className="object-fill"
                      />
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
export default ProductsCarousel;
