export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="rainbow-bar h-1 w-20 rounded-full animate-pulse" />
        <div className="w-8 h-8 border-4 border-[#7C3AED]/20 border-t-[#7C3AED] rounded-full animate-spin" />
        <p className="text-[#7C3AED] text-sm font-medium">Loading…</p>
      </div>
    </div>
  );
}
