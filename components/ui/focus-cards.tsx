"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type CardType = {
  title: string;
  description: string;
  image?: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-slate-800 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      {card.image && (
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/80" />
      <div className="relative h-full w-full p-8 flex flex-col justify-end">
        <div className="text-xl md:text-2xl font-medium text-slate-50">
          {card.title}
        </div>
        <div className="text-slate-400 mt-2">{card.description}</div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

