interface FooterColumnProps {
  title: string;
  items: string[];
}

const FooterColumn = ({ title, items }: FooterColumnProps) => (
  <div className="flex flex-col gap-4">
    <h4 className="font-semibold text-sm text-white">{title}</h4>

    <div className="flex flex-col gap-1">
      {items.map((item) => (
        <button
          key={item}
          className="text-left text-neutral-400 text-sm transition-colors hover:text-white"
        >
          {item}
        </button>
      ))}
    </div>
  </div>
);

export default FooterColumn;
