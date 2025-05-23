import { HTMLAttributes, useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import WaveReveal from "./wave-reveal";

interface ImageProps extends HTMLAttributes<HTMLDivElement> {
  item: { image: string; title: string };
  index: number;
  activeItem: number;
}

interface ExpandableProps {
  list?: { image: string; title: string }[];
  autoPlay?: boolean;
  className?: string;
}

const List = ({ item, className, index, activeItem, ...props }: ImageProps) => {
  return (
    <div
      className={cn(
        "relative flex h-full  w-20 min-w-10 cursor-pointer overflow-hidden rounded-md transition-all delay-0 duration-300 ease-in-out",
        {
          "flex-grow": index === activeItem,
        },
        className
      )}
      {...props}
    >
      <img
        src={item.image}
        alt={item.title}
        className={cn("h-full w-full object-cover", {
          "blur-[2px]": index !== activeItem,
        })}
      />
      {index === activeItem && (
        <div className="absolute bottom-4 left-4 min-w-fit  text-white md:bottom-8 md:left-8">
          <WaveReveal
            duration="1000ms"
            className="items-start justify-start text-xl sm:text-2xl md:text-6xl"
            text={item.title}
            direction="up"
          />
        </div>
      )}
    </div>
  );
};

const items = [
  {
    image: "/mixology.jpg",
    title: "Mixology",
  },
  {
    image: "/fashion.jpg",
    title: "Fashion",
  },
  {
    image: "/music.jpg",
    title: "Music",
  },
  {
    image: "/design.jpg",
    title: "Design",
  },
  {
    image: "/food.jpg",
    title: "Food",
  },
];

export default function Expandable({
  list = items,
  autoPlay = true,
  className,
}: ExpandableProps) {
  const [activeItem, setActiveItem] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }

    const interval = setInterval(() => {
      if (!isHovering) {
        setActiveItem((prev) => (prev + 1) % list.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, list.length, isHovering]);

  return (
    <>
      <div
        className={cn(
          "hidden sm:flex h-96 w-full mb-20 px-44 gap-1",
          className
        )}
      >
        {list.map((item, index) => (
          <List
            key={item.title}
            item={item}
            index={index}
            activeItem={activeItem}
            onMouseEnter={() => {
              setActiveItem(index);
              setIsHovering(true);
            }}
            onMouseLeave={() => {
              setIsHovering(false);
            }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:hidden w-full px-5 pb-10">
        {list.map((item) => (
          <div
            key={item.title}
            className="relative w-full h-20 rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="absolute bottom-4 left-4 text-white text-2xl font-bold">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
