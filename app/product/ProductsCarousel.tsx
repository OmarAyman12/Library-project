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
                <Card>
                  <CardContent>
                    <Image src={image} alt={title} fill />
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
