"use client"

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="p-10">
      <h2 className="text-xl font-bold text-red-500">Something went wrong</h2>

      <p className="mt-2">{error.message}</p>

      <button onClick={() => reset()} className="mt-4 border px-4 py-2">
        Try again
      </button>
    </div>
  )
}
