import { ChevronUp } from "lucide-react";

interface BookingFieldProps {
  label: string;
  value: string;
  hasChevron?: boolean;
}

const BookingField = ({
  label,
  value,
  hasChevron = false,
}: BookingFieldProps) => {
  return (
    <button className="group relative flex h-full flex-1 items-center px-6 hover:bg-white/5 transition-colors">
      <div className="flex w-full flex-col items-start text-left">
        <span className="text-sm text-gray-400">{label}</span>

        <span className="text-3xl mt-2 font-medium leading-none text-gray-400">
          {value}
        </span>
      </div>

      {hasChevron && (
        <ChevronUp
          size={20}
          className="absolute right-6 top-1/2 -translate-y-1/2 text-white transition-transform group-hover:rotate-180"
        />
      )}
    </button>
  );
};

export default BookingField;
