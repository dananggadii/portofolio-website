import Image from "next/image";

export default function TestBackground() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Background Review</h1>
      
      <div className="space-y-16">
        {/* Background 1 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Background</h2>
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/background.jpg"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-8 rounded-xl shadow-xl max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Sample Content</h3>
                <p className="text-lg text-slate-600 mb-4">
                  This is how your content will look with this background.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                  Sample Button
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background 2 */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Background1</h2>
          <div className="relative w-full h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/background1.jpg"
              alt="Background1"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 p-8 rounded-xl shadow-xl max-w-2xl">
                <h3 className="text-3xl font-bold mb-4">Sample Content</h3>
                <p className="text-lg text-slate-600 mb-4">
                  This is how your content will look with this background.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold">
                  Sample Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center">
        <a href="/" className="text-blue-600 hover:underline text-lg">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
