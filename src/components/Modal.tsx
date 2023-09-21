import React, { FC } from "react";
import { Beer } from "@/types";
import Image from "next/image";
import { X } from "lucide-react";
import localFont from "next/font/local";

const ClashDisplay = localFont({
  src: "../../public/fonts/ClashDisplay-Semibold.woff2",
});
const DancingScript = localFont({
  src: "../../public/fonts/DancingScript-Regular.woff",
});

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  beer: Beer | null;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, beer }) => {
  if (!isOpen || !beer) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-x-hidden flex justify-center items-center overflow-y-auto outline-none mx-auto max-w-[90%] md:max-w-[60%]">
      <div className="bg-gray-300 rounded-lg p-5 h-[80vh] xl:h-[55%] overflow-hidden">
        <div className="flex justify-between mb-6">
          <h1
            className="text-4xl font-bold items-center"
            style={DancingScript.style}
          >
            {beer.name}
          </h1>
          <div
            className="bg-rose-600 hover:bg-rose-400 duration-300 h-[50px] w-[50px] rounded-lg text-white flex justify-center items-center cursor-pointer"
            onClick={onClose}
          >
            <X size={30} />
          </div>
        </div>
        <div className="flex-col md:flex gap-24 sm:gap-12 h-full">
          <div className="flex justify-center mx-6 mb-24 sm:mb-0">
            <Image
              height={200}
              width={200}
              src={beer.image_url}
              alt={beer.name}
              className="object-contain h-48"
            />
          </div>
          <div className="flex items-center">
            <div>
              <p
                style={ClashDisplay.style}
                className="text-xl md:mb-6 flex gap-4"
              >
                <h1>What is{"  "}</h1>
                <span
                  style={DancingScript.style}
                  className="pr-6 font-bold text-2xl"
                >
                  {beer.name}
                </span>
              </p>
              <p className="p-4 border border-black">{beer.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
