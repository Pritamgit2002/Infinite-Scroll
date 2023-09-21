"use client";

import React, { useState } from "react";
import { Beer } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Modal from "./Modal";

export interface BeerProps {
  beers: Beer[] | null;
}

export function Beers({ beers }: BeerProps) {
  const [selectedBeer, setSelectedBeer] = useState<Beer | null>(null);

  const openModal = (beer: Beer) => {
    setSelectedBeer(beer);
  };

  const closeModal = () => {
    setSelectedBeer(null);
  };

  return (
    <>
      {beers ? (
        beers.map((beer) => (
          <Card
            key={beer.id}
            onClick={() => openModal(beer)}
            className="cursor-pointer shadow-md hover:shadow-rose-300 duration-300"
          >
            <CardContent className="flex flex-col items-center justify-center p-4">
              <Image
                height={200}
                width={200}
                src={beer.image_url}
                alt={beer.name}
                className="object-contain h-48 rounded hover:scale-110 transition-all duration-300"
              />
            </CardContent>
            <CardFooter className="text-center flex flex-col p-4">
              <CardTitle className="my-2">{beer.name}</CardTitle>
              <CardDescription>{beer.tagline}</CardDescription>
            </CardFooter>
          </Card>
        ))
      ) : (
        <div className="text-xl font-bold">No beers available !! </div>
      )}
      <Modal isOpen={!!selectedBeer} onClose={closeModal} beer={selectedBeer} />
    </>
  );
}
