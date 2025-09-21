// app/page.tsx (Next.js 13+ with App Router)
export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 left-1/3 w-[500px] h-[300px] bg-teal-400/30 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 right-40 w-[500px] h-[300px] bg-purple-400/30 blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />

            {/* Border */}
            <div className="w-[90%] max-w-4xl py-10 rounded-md">
                {/* Grid Overlay */}
                <div className="absolute top-0 left-0 w-2/5 h-2/3 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_3px,transparent_3px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_2px,transparent_2px)] bg-[size:40px_40px] pointer-events-none" />
                <div className="absolute top-0 left-10 w-[500px] h-[300px] bg-[#171717] blur-3xl rounded-full translate-x-1/3 translate-y-1/3" />
                {/* Content */}
                <div className="relative z-10">
                    {/* Assignment Label */}
                    <div className="inline-block relative mb-8">
                        {/* Shadow */}
                        <div className="absolute inset-0 translate-x-1 translate-y-1 bg-gray-700 rounded-lg" />

                        {/* Button */}
                        <div className="relative bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold text-lg tracking-widest">
                            ASSIGNMENT
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-white font-extrabold text-5xl leading-tight">
                        UI DEVELOPER
                        <br />
                        ASSIGNMENT
                    </h1>

                    {/* Company */}
                    <div className="mt-12">
                        <p className="text-gray-400 tracking-widest text-sm">COMPANY</p>
                        <p className="text-white text-lg mt-1">
                            Juspay Technologies Private Limited
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
