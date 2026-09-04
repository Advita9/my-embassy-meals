// components/ScrapbookDecorations.tsx

import PressedFlower from "./PressedFlower";

export default function ScrapbookDecorations() {
  return (
    <>
      {/* TOP LEFT PRESSED FLOWER */}

<div
  className="
    absolute
    left-6
    top-6

    rotate-[-10deg]

    opacity-70
    pointer-events-none

    origin-top-left

    sm:left-10
    sm:top-10
    sm:scale-[3]
  "
>
  <PressedFlower />
</div>


      {/* PAPER NOTE */}

      <div
  className="
    absolute

    left-1/2
    -translate-x-1/2
    top-[26rem]

    w-48
    h-52

    rotate-[5deg]

    bg-[#fffcf5]

    shadow-md

    border
    border-[#efe7d8]

    overflow-hidden

    pointer-events-none

    z-10

    sm:left-auto
    sm:translate-x-0
    sm:right-10
    sm:top-10
    sm:w-56
    sm:h-auto
    sm:rotate-[8deg]
    sm:scale-125
  "
>

        {/* pin */}

        <div
          className="
            absolute
            top-[-9px]
            left-[58%]

            h-7
            w-7

            rounded-full

            bg-[#d6b17b]

            shadow
          "
        />

        {/* notebook lines */}

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(to bottom, transparent 0px, transparent 29px, #d6d0c6 30px)",
          }}
        />

        {/* pink strip */}

        <div
          className="
            absolute
            bottom-0
            left-0

            h-8
            w-full

            bg-[#f8dde5]

            opacity-60
          "
        />

        <div
          className="
            relative
            h-full
            p-4
            sm:p-5
            pb-12
          "
        >

          <p
            className="
              font-caveat
              text-[1.15rem]
              sm:text-[1.25rem]

              leading-[1.25]

              text-[#6c6875]
            "
          >
            healthy quick
            <br />
            vegetarian meals
            <br />
            that made
            <br />
            living alone
            <br />
            more special
          </p>

          {/* signature */}

          <div
            className="
              absolute
              bottom-2
              right-4

              font-caveat
              text-lg
              sm:text-xl

              text-zinc-600
            "
          >
            ~ vee ♡
          </div>

        </div>
      </div>


      {/* PRESSED FLOWER — MOBILE NOTE COMPANION */}

<div
  className="
    absolute

    left-[calc(50%+105px)]
    top-[29rem]

    rotate-[-350deg]
    scale-75

    opacity-75

    pointer-events-none

    z-10

    sm:left-auto
    sm:right-10
    sm:top-[40rem]
    sm:scale-200
  "
>
  <PressedFlower />
</div>


      {/* BOTTOM RIGHT STAMP */}

      <div
        className="
          fixed
          right-5
          bottom-5

          opacity-30
          pointer-events-none

          sm:right-10
          sm:bottom-10
        "
      >
        <div
          className="
            h-20
            w-20

            rounded-full

            border-2
            border-[#b89fd8]
          "
        />
      </div>
    </>
  );
}