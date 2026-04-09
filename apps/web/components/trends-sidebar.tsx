"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, TrendingUp, Play } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { TrendAnalysis } from "@/lib/trends-client";

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("pt-BR", { month: "short", day: "numeric" });
}

export function TrendsSidebar({ analysis }: { analysis: TrendAnalysis }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const trendData = analysis.data.trendData || [];
  const topVideos = analysis.data.topVideos || [];

  const chartData = trendData.map((point) => ({
    ...point,
    shortDate: new Date(point.date).toLocaleDateString("pt-BR", {
      month: "short",
      day: "numeric",
    }),
  }));

  return (
    <div
      className={`flex flex-col bg-gray-900/50 border-l border-gray-800/30 transition-all duration-300 ${isCollapsed ? "w-16" : "w-80"} relative`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800/30 px-4 py-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#7C3AED]" />
            <h3 className="font-headline text-sm font-semibold text-white">
              Insights
            </h3>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg bg-gray-800/30 p-1.5 transition-colors hover:bg-gray-800/50 cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronLeft className="h-4 w-4 text-gray-300" />
          ) : (
            <ChevronRight className="h-4 w-4 text-gray-300" />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="flex-1 overflow-y-auto">
          {/* Trend Chart Section */}
          <div className="border-b border-gray-800/30 px-4 py-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Tendência (30 dias)
            </h4>
            {chartData.length > 0 ? (
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="rgba(107, 114, 128, 0.2)"
                    />
                    <XAxis
                      dataKey="shortDate"
                      stroke="rgba(156, 163, 175, 0.5)"
                      tick={{ fontSize: 10 }}
                      style={{ fontSize: "10px" }}
                    />
                    <YAxis
                      stroke="rgba(156, 163, 175, 0.5)"
                      tick={{ fontSize: 10 }}
                      style={{ fontSize: "10px" }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(14, 14, 14, 0.95)",
                        border: "1px solid rgba(124, 58, 237, 0.2)",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#7C3AED" }}
                    />
                    <Line
                      type="monotone"
                      dataKey="interest"
                      stroke="#7C3AED"
                      dot={false}
                      strokeWidth={2}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center text-center">
                <p className="text-xs text-gray-500">
                  Nenhum dado de tendência disponível
                </p>
              </div>
            )}
          </div>

          {/* Top Videos Section */}
          <div className="px-4 py-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
              Top Vídeos Concorrentes
            </h4>

            {topVideos.length > 0 ? (
              <div className="space-y-3">
                {topVideos.slice(0, 3).map((video, idx) => (
                  <a
                    key={video.videoId}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-lg border border-gray-800/30 bg-gray-900/50 p-3 transition-all hover:border-[#7C3AED]/50 hover:bg-gray-900"
                  >
                    {/* Rank Badge */}
                    <div className="mb-2 flex items-start justify-between">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#7C3AED]/20 text-xs font-bold text-[#7C3AED]">
                        {idx + 1}
                      </span>
                      <Play className="h-3 w-3 text-gray-500 group-hover:text-[#7C3AED]" />
                    </div>

                    {/* Video Title */}
                    <h5 className="mb-2 line-clamp-2 text-xs font-medium text-white group-hover:text-[#7C3AED]">
                      {video.title}
                    </h5>

                    {/* Channel & Views */}
                    <div className="space-y-1 text-xs text-gray-400">
                      <p className="truncate">{video.channel}</p>
                      <div className="flex justify-between">
                        <span>{formatNumber(video.views)} views</span>
                        <span>{formatDate(video.publishedAt)}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-center">
                <p className="text-xs text-gray-500">
                  Nenhum vídeo concorrente encontrado
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
