export default function Loading() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-32 pb-24 animate-pulse">
      <div className="h-4 w-24 bg-slate-200 dark:bg-slate-800 rounded-full mb-12" />
      <div className="h-3 w-16 bg-slate-200 dark:bg-slate-800 rounded-full mb-4" />
      <div className="h-12 w-3/4 bg-slate-200 dark:bg-slate-800 rounded-xl mb-4" />
      <div className="h-6 w-full bg-slate-200 dark:bg-slate-800 rounded-lg mb-2" />
      <div className="h-6 w-5/6 bg-slate-200 dark:bg-slate-800 rounded-lg mb-12" />
      <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl mb-12" />
      <div className="flex gap-3 mb-10">
        <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800 rounded-xl" />
        <div className="h-10 w-28 bg-slate-200 dark:bg-slate-800 rounded-xl" />
      </div>
      <div className="flex gap-2 mb-14">
        {[80, 64, 72, 56].map((w, i) => (
          <div
            key={i}
            className="h-8 bg-slate-200 dark:bg-slate-800 rounded-full"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>
      <div className="space-y-3">
        {[100, 90, 95, 85, 70].map((w, i) => (
          <div
            key={i}
            className="h-5 bg-slate-200 dark:bg-slate-800 rounded"
            style={{ width: `${w}%` }}
          />
        ))}
      </div>
    </div>
  )
}
