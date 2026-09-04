"use client";

import { useCallback, useState } from "react";
import Cropper, { Area } from "react-easy-crop";

interface ImageCropperProps {
  image: string;
  onCancel: () => void;
  onCropComplete: (file: File) => void;
}

export default function ImageCropper({
  image,
  onCancel,
  onCropComplete,
}: ImageCropperProps) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] =
    useState<Area | null>(null);
  const [processing, setProcessing] = useState(false);

  const onCropCompleteInternal = useCallback(
    (_croppedArea: Area, croppedPixels: Area) => {
      setCroppedAreaPixels(croppedPixels);
    },
    []
  );

  const createCroppedImage = async () => {
    if (!croppedAreaPixels) return;

    setProcessing(true);

    try {
      const croppedFile = await getCroppedImg(
        image,
        croppedAreaPixels
      );

      onCropComplete(croppedFile);
    } catch (error) {
      console.error("Crop failed:", error);
      setProcessing(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="w-full max-w-2xl rounded-3xl bg-white p-5 shadow-2xl">
        <div className="mb-4">
          <h2 className="font-newsreader text-3xl text-[#3e3e4b]">
            crop your recipe photo
          </h2>

          <p className="mt-1 font-caveat text-xl text-zinc-400">
            make it fit your little recipe card ♡
          </p>
        </div>

        <div className="relative h-[320px] overflow-hidden rounded-2xl bg-zinc-900 sm:h-[400px]">
          <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={328 / 224}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={onCropCompleteInternal}
          />
        </div>

        <div className="mt-5">
          <label className="font-inter text-sm text-zinc-500">
            zoom
          </label>

          <input
            type="range"
            min={1}
            max={3}
            step={0.01}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="mt-2 w-full accent-[#9b8cd6]"
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onCancel}
            disabled={processing}
            className="flex-1 rounded-xl border border-zinc-200 py-3 font-inter text-zinc-500 transition hover:bg-zinc-50"
          >
            cancel
          </button>

          <button
            type="button"
            onClick={createCroppedImage}
            disabled={processing}
            className="flex-1 rounded-xl bg-[#9b8cd6] py-3 font-inter text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {processing ? "cropping..." : "crop & use ♡"}
          </button>
        </div>
      </div>
    </div>
  );
}

async function getCroppedImg(
  imageSrc: string,
  pixelCrop: Area
): Promise<File> {
  const image = await createImage(imageSrc);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Could not create canvas context");
  }

  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;

  ctx.drawImage(
    image,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Could not create cropped image"));
          return;
        }

        const file = new File(
          [blob],
          `recipe-${Date.now()}.jpg`,
          {
            type: "image/jpeg",
          }
        );

        resolve(file);
      },
      "image/jpeg",
      0.92
    );
  });
}

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();

    image.addEventListener("load", () => resolve(image));
    image.addEventListener("error", (error) => reject(error));

    image.src = url;
  });
}