export default function SkeletonList() {
  return (
    <div className="divide-y text-gray-200 animate-pulse">
      {Array.from({ length: 6 }).map((_, idx) => (
        <SkeletonItem key={idx} />
      ))}
    </div>
  );
}

function SkeletonItem() {
  return (
    <div className="flex items-center space-x-4 py-3 px-3">
      <div className="w-10 h-10 bg-gray-200 rounded animate-pulse" />

      <div className="flex-1">
        <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse" />
        <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
      </div>
    </div>
  );
}
