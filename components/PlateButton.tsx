"use client";

interface PlateButtonProps {
  onClick: () => void;
}

export default function PlateButton({
  onClick,
}: PlateButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        bottom-10
        right-10

        z-50

        h-28
        w-28

        rounded-full

        bg-[#fffdf8]

        shadow-[0_15px_40px_rgba(0,0,0,0.12)]

        transition-all
        duration-300

        hover:scale-105
        hover:-translate-y-1
      "
    >
      {/* outer floral ring */}

      <div
        className="
          absolute
          inset-2

          rounded-full

          border-2
          border-[#b8a6e3]
          border-dashed

          opacity-70
        "
      />

      <div
        className="
          flex
          h-full
          w-full
          flex-col
          items-center
          justify-center

          text-[#45404f]
        "
      >
        <p className="font-caveat text-2xl">
          help
        </p>

        <p className="font-caveat text-2xl -mt-2">
          pick !!
        </p>

        <p className="text-lg text-2xl mt-1">
          ♡
        </p>
      </div>
    </button>
  );
}