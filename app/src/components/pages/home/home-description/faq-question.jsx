export default function FaqQuestion({title, children}) {
  return (
    <div className="p-2 bg-gray-300 rounded my-2">
      <div className="italic font-bold">{title}</div>
      <div className="pt-2">
        {children}
      </div>
    </div>
  );
}