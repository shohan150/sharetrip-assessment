import loadingGif from "/loading.gif";
export default function Loading() {
  return (
    <div className="mt-40 flex flex-col gap-10 justify-center items-center">
      <img src={loadingGif} className="w-32 h-32" />
      <h2 className="text-xl font-bold text-gray-800">Loading Products...</h2>
    </div>
  )
}
