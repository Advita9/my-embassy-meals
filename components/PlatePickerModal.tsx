"use client";
import { useState } from "react";
import { Recipe } from "@/data/recipes";
import PressedFlowerMini
from "./PressedFlowerMini";

import { useEffect } from "react";

interface Props {
  recipe: Recipe | null;
  onClose: () => void;
  onPickAgain: () => void;
  allRecipes: Recipe[];
}


export default function PlatePickerModal({
  recipe,
  onClose,
  onPickAgain,
  allRecipes,
}: Props) {

  // const flowers = [
  //   320,
  //   330,
  //   345,
  //   365,
  //   385,
  //   400,
  //   420,
  //   440,
  //   460,
  //   475,
  // ];
//   const flowers = [
//   0,
//   30,
//   60,
//   90,
//   120,
//   150,
//   180,
//   210,
//   240,
//   270,
//   300,
//   330,
// ];
const flowers = [
  0,
  28,
  58,
  91,
  121,
  151,
  183,
  214,
  244,
  273,
  303,
  333,
];

  const [rotation, setRotation] = useState(0);

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 640);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => {
    window.removeEventListener("resize", checkMobile);
  };
}, []);

  const [entranceRotation, setEntranceRotation] =
    useState(1080);

  const [displayRecipe, setDisplayRecipe] =
    useState(recipe);

  // Initial spin when the modal opens
  useEffect(() => {
    requestAnimationFrame(() => {
      setEntranceRotation(0);
    });
  }, []);

  // Update displayed recipe when a new recipe is picked
  useEffect(() => {
    setDisplayRecipe(recipe);
  }, [recipe]);

  if (!recipe) return null;

  const handlePickAgain = () => {
    setRotation((prev) => prev + 2160);

    const interval = setInterval(() => {
      const random =
        allRecipes[
          Math.floor(
            Math.random() * allRecipes.length
          )
        ];

      setDisplayRecipe(random);
    }, 80);

    setTimeout(() => {
      clearInterval(interval);

      onPickAgain();
    }, 1800);
  };

  const goToRecipe = () => {
    const el = document.getElementById(
      `recipe-${recipe.id}`
    );

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      onClose();
    }
  };
  return (
    <div
      className="
        fixed
        inset-0

        z-[100]

        flex
        items-center
        justify-center

        bg-black/35
        backdrop-blur-sm
      "
    >
      <div
        className="
          relative
          w-[calc(100%-24px)]
          max-w-[900px]
          max-h-[92vh]
          overflow-y-auto

          rounded-[30px]
          bg-[#fffdf6]

          p-6
          sm:p-8
          lg:p-12

          shadow-2xl
        "
      >
        {/* close */}

        <button
          onClick={onClose}
          className="
            absolute
            right-8
            top-8

            text-3xl
          "
        >
          ×
        </button>

        {/* title */}

        <p
          className="
            text-center

            font-caveat
            text-5xl

            text-[#9b8cd6]
          "
        >
          plate pick ...
        </p>

        {/* plate */}

        <div className="mt-6 flex justify-center">
          <div
  className="
    relative

    h-[min(78vw,500px)]
    w-[min(78vw,500px)]
    max-h-[500px]
    max-w-[500px]

    rounded-full

    bg-[#fffdfa]

    transition-transform
    duration-[1800ms]
    ease-out
  "
  style={{
  transform: `
    rotate(${rotation + entranceRotation}deg)
  `,
}}
>
            {/* lavender ring */}

            {/* <div
              className="
                absolute
                inset-6

                rounded-full

                border-4
                border-dashed
                border-[#b8a6e3]
                opacity-60
              "
            /> */}

            
            <div
            className="
                absolute
                inset-0
                rounded-full

                bg-[#fffcf8]

                shadow-[0_15px_40px_rgba(0,0,0,0.12)]
            "
            />

            <div
            className="
                absolute
                inset-5
                rounded-full

                border-[12px]

                border-[#faf6ef]
            "
            />

            <div
            className="
                absolute
                inset-10
                rounded-full

                border-[2px]

                border-[#d6c8ef]
            "
            />

            <div className="absolute inset-0">
  {flowers.map((angle, i) => {
    const radius = isMobile ? 130 : 225;

    const x =
      Math.cos((angle * Math.PI) / 180) * radius;

    const y =
      Math.sin((angle * Math.PI) / 180) * radius;

    return (
      <div
        key={i}
        className="absolute scale-[0.48]"
        style={{
          left: `calc(50% + ${x}px)`,
          top: `calc(50% + ${y}px)`,
          transform: `
            translate(-50%, -50%)
            rotate(${angle + 90}deg)
          `,
        }}
      >
        <PressedFlowerMini />
      </div>
    );
  })}
</div>

            

            {/* center content */}

            <div
              className="
                absolute
                inset-0

                flex
                flex-col
                items-center
                justify-center
              "
            >
             <p
  className="
    font-sacramento
    text-3xl
    sm:text-4xl
    text-zinc-500
  "
>
  today's pick !
</p>

              <br></br>

              <h2
  className="
    font-newsreader

    text-[1.35rem]
    sm:text-[1.7rem]

    leading-tight

    max-w-[240px]

    text-center

    text-[#353545]
  "
>
  {displayRecipe?.name}
</h2>

              <div className="mt-4 text-2xl">
                ♡
              </div>

              <p
                className="
                  mt-4

                  font-caveat
                  text-xl
                  sm:text-2xl

                  text-[#9b8cd6]
                "
              >
                {displayRecipe?.note}
              </p>
            </div>
          </div>
        </div>

        {/* buttons */}

        <div
          className="
            mt-10

            flex
            justify-center
            gap-8
          "
        >
          <button
          onClick={goToRecipe}
            className="
              rounded-xl

              bg-[#b8a6e3]

              px-8
              py-4

              text-white

              shadow-lg
            "
          >
            view recipe →
          </button>

          <button
  onClick={handlePickAgain}
            className="
              rounded-xl

              border

              bg-[#f4ead5]

              px-8
              py-4

              shadow-md
            "
          >
            pick again ↻
          </button>
        </div>
      </div>
    </div>
  );
}