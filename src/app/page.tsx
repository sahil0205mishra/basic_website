import Link from 'next/link';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTE4IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>

      <div className="relative z-10 text-center space-y-8 px-4 max-w-4xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30 animate-slide-down">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
          </svg>
          Analytics Platform
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight tracking-tight animate-scale-in">
          Sales Analytics
          <span className="block text-blue-100 mt-2">Dashboard</span>
        </h1>

        {/* Description */}
        <p className="text-xl md:text-2xl text-blue-50 max-w-2xl mx-auto leading-relaxed font-medium animate-slide-up" style={{animationDelay: '0.2s'}}>
          Visualize and analyze your sales performance from 2022-2024 with interactive charts, real-time filtering, and beautiful data visualizations
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.3s'}}>
            <div className="text-3xl mb-2">📊</div>
            <div className="font-semibold text-lg">3 Chart Types</div>
            <div className="text-sm text-blue-100">Bar, Line & Pie</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="text-3xl mb-2">🔍</div>
            <div className="font-semibold text-lg">Smart Filtering</div>
            <div className="text-sm text-blue-100">Custom Thresholds</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 text-white hover:bg-white/20 transition-all duration-300 animate-slide-up" style={{animationDelay: '0.5s'}}>
            <div className="text-3xl mb-2">📱</div>
            <div className="font-semibold text-lg">Fully Responsive</div>
            <div className="text-sm text-blue-100">Any Device</div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex gap-4 justify-center pt-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Link href="/dashboard">
            <Button variant="primary" className="text-lg px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110 font-bold border-2 border-yellow-300">
              View Dashboard →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
