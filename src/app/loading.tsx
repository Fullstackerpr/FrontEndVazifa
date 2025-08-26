export default function Loading() {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="space-y-2 p-4 rounded-2xl shadow animate-pulse bg-gray-100">
          <div className="w-full h-40 rounded-2xl bg-gray-300"></div>
          <div className="w-3/4 h-5 rounded bg-gray-300"></div>
          <div className="w-1/2 h-5 rounded bg-gray-300"></div>
        </div>
      ))}
    </div>
  );
}
