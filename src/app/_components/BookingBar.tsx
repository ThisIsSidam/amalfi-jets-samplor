import { ArrowLeftRight, ArrowRight, Minus, Plus, User } from "lucide-react";
import BookingField from "./BookingField";

const BookingBar = () => {
  return (
    <div className="absolute bottom-4 left-1/2 z-30 w-full max-w-330 -translate-x-1/2 px-5 lg:px-10">
      {/* Top controls */}
      <div className="mb-2 flex items-center gap-2">
        {/* Trip type selector */}
        <div className="flex rounded-full bg-black p-1">
          <button className="rounded-full bg-gray-100 px-4 py-2 text-sm text-black">
            Round Trip
          </button>

          <button className="px-4 py-2 text-sm text-white">One Way</button>
        </div>
        {/* Passenger selector */}
        <div className="flex bg-black rounded-4xl p-1 items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-700">
            <Minus size={18} color="white" />
          </button>

          <User size={16} color="white" />

          <span className="text-white">1</span>

          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100">
            <Plus size={20} />
          </button>
        </div>
      </div>

      {/* Main Bar */}
      <div className="flex h-28 items-start rounded-2xl bg-black">
        <BookingField label="From" value="Origin" />

        {/* Swap Button */}
        <div className="relative h-25 w-px bg-white/10">
          <button
            className="
          absolute
          left-1/2
          top-1/2
          flex
          h-8
          w-8
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          bg-zinc-700
          hover:bg-zinc-600
        "
          >
            <ArrowLeftRight size={15} color="grey" />
          </button>
        </div>

        <BookingField label="To" value="Destination" />

        <div className="h-20 w-px bg-white/10" />

        <BookingField label="Depart" value="Select" hasChevron />

        <div className="h-20 w-px bg-white/10" />

        <BookingField label="Return" value="Select" hasChevron />

        {/* Search Button */}
        <button
          className="
        mx-2
        mt-2
        flex
        h-24
        w-10
        items-center
        justify-center
        rounded-xl
        bg-zinc-800
        transition-all
        duration-200
        hover:scale-105
        hover:bg-zinc-700
      "
        >
          <ArrowRight color="gray" />
        </button>
      </div>
    </div>
  );
};

export default BookingBar;
