export default function PressedFlowerMini() {
  return (
    <div
      className="
        relative
        h-10
        w-16
      "
    >

      {/* stem */}

      <div
        className="
          absolute
          left-6
          top-4

          h-[2px]
          w-10

          bg-[#c7a8b4]

          rotate-[12deg]
        "
      />

      {/* blossom 1 */}

      <div
        className="
          absolute
          left-0
          top-3

          h-2.5
          w-2.5

          rounded-full

          bg-pink-300
        "
      />

      {/* blossom 2 */}

      <div
        className="
          absolute
          left-2
          top-1

          h-2
          w-2

          rounded-full

          bg-pink-200
        "
      />

      {/* blossom 3 */}

      <div
        className="
          absolute
          left-2
          top-5

          h-2
          w-2

          rounded-full

          bg-pink-200
        "
      />
    </div>
  );
}