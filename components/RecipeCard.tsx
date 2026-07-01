"use client";

import { useState, useEffect, useRef } from "react";

import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [shouldScroll, setShouldScroll] = useState(false);

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  if (contentRef.current) {
    setShouldScroll(
      contentRef.current.scrollHeight >
      contentRef.current.clientHeight
    );
  }
}, [recipe]);

  return (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      className="
        cursor-pointer
        [perspective:1000px]
      "
    >
      <div
        className={`
          relative
          w-[360px]
          h-[470px]

          transition-transform
          duration-700

          [transform-style:preserve-3d]

          ${recipe.rotation}
          ${isFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
      >
        {/* FRONT */}

        <div
          className="
            absolute
            inset-0

            rounded-3xl
            bg-white

            p-4

            shadow-xl

            [backface-visibility:hidden]
          "
        >
          {/* tape */}

          <div
            className={`
              absolute
              top-2
              left-1/2
              -translate-x-1/2

              w-28
              h-9

              rotate-[-3deg]

              rounded-sm
              opacity-70

              shadow-sm

              ${recipe.tapeColor}
            `}
          />

          {/* image */}

          <div className="h-56 rounded-2xl bg-zinc-100" />

          {/* title */}

          <h2
            className="
              mt-6

              font-patrick

              text-[2.2rem]
              font-bold

              leading-tight

              text-[#2d2d38]
            "
          >
            {recipe.emoji} {recipe.name}
          </h2>

          {/* note */}

          <p
            className="
              mt-1

              font-caveat

              text-[1.7rem]

              text-[#4d4d55]
            "
          >
            {recipe.note}
          </p>

          {/* macros */}

          <div className="mt-4 flex gap-2 flex-wrap">
            <span
              className="
                rounded-full
                bg-pink-100
                px-4
                py-1
                text-sm
              "
            >
              {recipe.calories} kcal
            </span>

            <span
              className="
                rounded-full
                bg-purple-100
                px-4
                py-1
                text-sm
              "
            >
              {recipe.protein}
            </span>
          </div>
        </div>

        {/* BACK */}

        <div
          className="
            absolute
            inset-0

            rounded-3xl

            bg-[#fffdf4]
            before:absolute
  before:inset-0
  before:rounded-[28px]

  before:bg-[radial-gradient(circle,rgba(0,0,0,0.03)_1px,transparent_1px)]
  before:bg-[size:14px_14px]

  before:opacity-70

            p-6

            shadow-xl

            [transform:rotateY(180deg)]

            [backface-visibility:hidden]
            rotate-[1deg]
          "
        >

            <div
  className="
    absolute
    left-0
    top-0
    bottom-0
    w-8

    rounded-l-[28px]

    bg-gradient-to-r
    from-[#ebe5d8]
    via-[#f7f2e8]
    to-transparent

    opacity-200
  "
/>



            <div
  className="
    absolute
    inset-0

    opacity-60

    pointer-events-none
  "
>
  {Array.from({ length: 14 }).map((_, i) => (
    <div
      key={i}
      className="
        absolute
        left-0
        right-0
        h-px
        bg-[#d8d2c7]
      "
      style={{
        top: `${90 + i * 28}px`,
      }}
    />
  ))}
</div>
          {/* notebook tape */}

          <div
  className="
    absolute
    top-2
    left-1/2
    -translate-x-1/2

    w-24
    h-8

    rotate-[-4deg]

    opacity-90

    bg-[#ead8b4]

    bg-[repeating-linear-gradient(45deg,transparent,transparent_6px,rgba(255,255,255,0.35)_6px,rgba(255,255,255,0.35)_8px)]
  "
/>

          <h3
  className="
    mt-6

    font-patrick

    text-[1.7rem]

    text-[#2d2d38]
  "
>
  {recipe.id}. {recipe.name}
</h3>

          <div
            className="
              mt-3
              h-2px
              bg-[#3a3a3a]
            "
          />

          <div className="mt-4 flex items-center gap-2">



  <p
  className="
    font-sacramento
    text-[1.6rem]
    text-[#9b8cd6]
    leading-none
  "
>
  ingredients
</p>

  <span
    className="
      text-pink-300
      text-2xl
    "
  >
    ♡
  </span>

</div>

<div
  className="
    absolute

    bottom-0
    left-0
    right-0

    h-16

    bg-gradient-to-t
    from-[#fffdf4]
    to-transparent

    pointer-events-none

    z-10

    pointer-events-none
    z-30
  "
/>

          <div
  ref={contentRef}
  className="
    mt-4

    h-[220px]

    overflow-y-auto

    pr-2

    relative

    z-20

    scrollbar-hide
  "
>
  <ul
    className="
      space-y-0

      font-patrick

      text-[1rem]

      leading-8

      text-[#363640]
    "
  >
    {recipe.ingredients.map((ingredient, index) => (
      <li key={index}>
        • {ingredient}
      </li>
    ))}
  </ul>
</div>

{shouldScroll && (
  <div
    className="
      absolute

      bottom-4
      left-1/2

      -translate-x-1/2

      font-caveat
      text-[1.4rem]

      text-[#b6a9ea]

      opacity-80

      pointer-events-none
    "
  >
    keep scrolling !
  </div>
)}

          {recipe.ingredients.length > 5 && (
  <div
    className="
      absolute
      bottom-4
      left-1/2
      -translate-x-1/2

      font-caveat
      text-lg

      font-caveat
        text-[1.5rem]

        text-[#9b8cd6]

        opacity-90
    "
  >
    
  </div>
)}
        </div>
      </div>
    </div>
  );
}