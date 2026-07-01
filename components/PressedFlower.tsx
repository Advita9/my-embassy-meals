// components/PressedFlower.tsx

export default function PressedFlower() {
  return (
    <div
      className="
        relative
        h-28
        w-12
      "
    >
      {/* stem */}

      <div
        className="
          absolute
          left-6
          top-6

          h-20
          w-[2px]

          bg-[#c8b49e]
        "
      />

      {/* flower cluster */}

      <div className="absolute left-3 top-0 h-3 w-3 rounded-full bg-pink-200" />
      <div className="absolute left-6 top-2 h-3 w-3 rounded-full bg-pink-300" />
      <div className="absolute left-9 top-0 h-3 w-3 rounded-full bg-pink-200" />

      <div className="absolute left-2 top-8 h-2.5 w-2.5 rounded-full bg-pink-300" />
      <div className="absolute left-8 top-10 h-2.5 w-2.5 rounded-full bg-pink-200" />

      {/* tape */}

      <div
        className="
          absolute
          top-10
          left-0

          h-4
          w-12

          rotate-[-10deg]

          bg-[#efe4d2]
          opacity-70
        "
      />
    </div>
  );
}