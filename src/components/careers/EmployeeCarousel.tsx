import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const employeeImages = [
  {
    id: 1,
    title: "Team Celebration",
    placeholder: "Team members celebrating a milestone together",
  },
  {
    id: 2,
    title: "Office Fun",
    placeholder: "Employees enjoying casual Friday activities",
  },
  {
    id: 3,
    title: "Learning Session",
    placeholder: "Knowledge sharing workshop in progress",
  },
  {
    id: 4,
    title: "Team Outing",
    placeholder: "Annual team outing adventure",
  },
  {
    id: 5,
    title: "Wellness Day",
    placeholder: "Wellness and fitness activities at office",
  },
];

export function EmployeeCarousel() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium mb-6">
            Life at Cluix
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Moments that <span className="text-gradient">Matter</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the vibrant culture and memorable experiences our team shares.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-4">
              {employeeImages.map((image) => (
                <CarouselItem key={image.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gradient-to-br from-primary/20 via-muted to-primary/10 border border-border">
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                          <svg
                            className="w-8 h-8 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {image.placeholder}
                        </p>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h4 className="text-white font-semibold">{image.title}</h4>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 border-border bg-background hover:bg-muted" />
            <CarouselNext className="hidden md:flex -right-12 border-border bg-background hover:bg-muted" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}

export default EmployeeCarousel;
