// components/ScrapbookDecorations.tsx
import PressedFlower from "./PressedFlower";

export default function ScrapbookDecorations() {
  return (
    <>
      {/* TOP LEFT FLOWER */}

      <div
        className="
          absolute
          left-10
          top-8
          rotate-[-10deg]
          opacity-70
          pointer-events-none
        "
      >


        <div className="w-20 h-[2px] bg-[#d8c3aa]" />

        <div
          className="
            mt-2
            w-12
            h-12
            rounded-full
            bg-pink-100
            blur-md
          "
        />
      </div>

      {/* PAPER NOTE */}

      <div
  className="
    absolute
    right-12
    top-10

    w-56

    rotate-[8deg]

    bg-[#fffcf5]

    shadow-md

    border
    border-[#efe7d8]

    overflow-hidden

    pointer-events-none
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
        "repeating-linear-gradient(to bottom, transparent 0px, transparent 29px, #d6d0c6 30px)"
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

  <div className="relative p-5">

    <p
  className="
    font-caveat
    text-[1.25rem]
    leading-[1.25]
    font-normal
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

    <div
      className="
        absolute
        bottom-3
        right-5

        font-caveat
        text-xl
        text-zinc-600
      "
    >
      ~ vee ♡
    </div>

 
  </div>
</div>

<div
  className="
    absolute
    right-12
    top-[600px]

    rotate-[-350deg]

    scale-125

    opacity-80
  "
>
  <PressedFlower />
</div>



      {/* CLICK TO FLIP */}

      <svg
  className="absolute right-[18rem] top-[20rem]"
  width="390"
  height="120"
  viewBox="0 0 100 80"
>
  <path
    d="M10 70 C20 20, 60 10, 90 30"
    stroke="#3f3f46"
    strokeWidth="1.5"
    fill="none"
  />

  <path
    d="M82 24 L90 30 L75 34"
    stroke="#3f3f46"
    strokeWidth="2.5"
    fill="none"
  />
</svg>

      <div
        className="
          absolute
          right-[330px]
          top-[330px]

          rotate-6

          pointer-events-none
        "
      >
        <p
          className="
            font-caveat
            text-2xl
            text-zinc-700
          "
        >
          click to flip
        </p>
      </div>

      {/* BOTTOM RIGHT STAMP */}

      <div
        className="
          fixed
          right-10
          bottom-10

          opacity-30
          pointer-events-none
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

