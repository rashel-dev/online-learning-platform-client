import React from "react";

const Spinner = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-emerald-950 via-teal-900 to-cyan-950 flex items-center justify-center p-8 relative overflow-hidden">
            <style>{`
        @keyframes liquid {
          0%, 100% { 
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
            transform: rotate(0deg) scale(1);
          }
          33% { 
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: rotate(120deg) scale(1.1);
          }
          66% { 
            border-radius: 50% 50% 30% 70% / 60% 40% 60% 40%;
            transform: rotate(240deg) scale(0.9);
          }
        }
        @keyframes pulse-ring {
          0% { 
            transform: scale(0.8);
            opacity: 1;
          }
          100% { 
            transform: scale(1.8);
            opacity: 0;
          }
        }
        @keyframes float-bubble {
          0% { 
            transform: translateY(0) scale(1);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% { 
            transform: translateY(-200px) scale(1.5);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes text-glow {
          0%, 100% { 
            text-shadow: 0 0 10px rgba(20, 184, 166, 0.5),
                         0 0 20px rgba(20, 184, 166, 0.3),
                         0 0 30px rgba(20, 184, 166, 0.2);
          }
          50% { 
            text-shadow: 0 0 20px rgba(20, 184, 166, 0.8),
                         0 0 30px rgba(20, 184, 166, 0.5),
                         0 0 40px rgba(20, 184, 166, 0.3);
          }
        }
      `}</style>

            {/* Rising bubbles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bottom-0 w-4 h-4 bg-teal-400/30 rounded-full blur-sm"
                    style={{
                        left: `${Math.random() * 100}%`,
                        animation: `float-bubble ${3 + Math.random() * 4}s ease-in infinite`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                ></div>
            ))}

            <div className="relative z-10">
                {/* Main loader */}
                <div className="relative w-80 h-80 flex items-center justify-center">
                    {/* Pulsing rings */}
                    {[0, 1, 2].map((i) => (
                        <div
                            key={`ring-${i}`}
                            className="absolute inset-0 rounded-full border-2 border-teal-400/40"
                            style={{
                                animation: "pulse-ring 3s ease-out infinite",
                                animationDelay: `${i * 1}s`,
                            }}
                        ></div>
                    ))}

                    {/* Outer rotating ring with segments */}
                    <div className="absolute w-64 h-64 rounded-full" style={{ animation: "spin-slow 8s linear infinite" }}>
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={`segment-${i}`}
                                className="absolute top-1/2 left-1/2 w-3 h-3 -ml-1.5 -mt-1.5"
                                style={{
                                    transform: `rotate(${i * 45}deg) translateY(-128px)`,
                                }}
                            >
                                <div className="w-3 h-3 bg-linear-to-br from-teal-400 to-cyan-500 rounded-full shadow-lg shadow-teal-500/50"></div>
                            </div>
                        ))}
                    </div>

                    {/* Middle rotating ring */}
                    <div className="absolute w-48 h-48 rounded-full border-4 border-transparent border-t-cyan-400 border-r-teal-400" style={{ animation: "spin-reverse 4s linear infinite" }}></div>

                    {/* Liquid morphing core */}
                    <div className="absolute w-32 h-32 flex items-center justify-center">
                        <div className="absolute w-full h-full bg-linear-to-br from-emerald-400 via-teal-400 to-cyan-500 shadow-2xl" style={{ animation: "liquid 6s ease-in-out infinite" }}></div>

                        {/* Inner glow */}
                        <div className="absolute w-20 h-20 bg-linear-to-br from-white/40 to-transparent rounded-full blur-xl" style={{ animation: "liquid 4s ease-in-out infinite reverse" }}></div>
                    </div>

                    {/* Orbiting triangles */}
                    {[0, 120, 240].map((angle, i) => (
                        <div
                            key={`triangle-${i}`}
                            className="absolute top-1/2 left-1/2 -ml-3 -mt-3"
                            style={{
                                animation: `spin-slow ${5 + i}s linear infinite`,
                            }}
                        >
                            <div
                                style={{
                                    transform: `translateX(100px)`,
                                    width: 0,
                                    height: 0,
                                    borderLeft: "12px solid transparent",
                                    borderRight: "12px solid transparent",
                                    borderBottom: "20px solid rgba(20, 184, 166, 0.6)",
                                    filter: "drop-shadow(0 0 8px rgba(20, 184, 166, 0.8))",
                                    animation: "spin-reverse 3s linear infinite",
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Loading text */}
                <div className="mt-12 text-center">
                    <h2 className="text-4xl font-bold text-teal-300 mb-6 tracking-widest" style={{ animation: "text-glow 2s ease-in-out infinite" }}>
                        LOADING
                    </h2>

                    {/* Wave loading bars */}
                    <div className="flex justify-center gap-2 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-2 bg-linear-to-t from-teal-500 to-cyan-400 rounded-full shadow-lg shadow-teal-500/50"
                                style={{
                                    height: "40px",
                                    animation: "pulse 1.2s ease-in-out infinite",
                                    animationDelay: `${i * 0.15}s`,
                                }}
                            ></div>
                        ))}
                    </div>

                    {/* Progress percentage */}
                    <div className="relative w-64 mx-auto">
                        <div className="text-sm text-teal-300 font-medium mb-2 flex justify-between">
                            <span>Processing...</span>
                            <span className="animate-pulse">73%</span>
                        </div>
                        <div className="h-2 bg-teal-950/50 rounded-full overflow-hidden backdrop-blur">
                            <div
                                className="h-full bg-linear-to-r from-emerald-400 via-teal-400 to-cyan-500 rounded-full shadow-lg shadow-teal-500/50 transition-all duration-1000"
                                style={{ width: "73%" }}
                            ></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient background effects */}
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        </div>
    );
};

export default Spinner;
