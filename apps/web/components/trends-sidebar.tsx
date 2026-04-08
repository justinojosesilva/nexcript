'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Play } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { TrendAnalysis } from '@/lib/trends-client';

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' });
}

export function TrendsSidebar({ analysis }: { analysis: TrendAnalysis }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const trendData = analysis.data.trendData || [];
  const topVideos = analysis.data.topVideos || [];

  const chartData = trendData.map((point) => ({
    ...point,
    shortDate: new Date(point.date).toLocaleDateString('pt-BR', {
      month: 'short',
      day: 'numeric',
    }),
  }));

  return (
    <div
      className={`flex flex-col bg-gradient-to-b from-neutral-800 to-neutral-900 border-l border-neutral-700 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-80'} relative`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-neutral-700 px-4 py-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[var(--primary)]" />
            <h3 className="font-headline text-sm font-semibold text-white">
              Insights
            </h3>
          </div>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg bg-neutral-700/50 p-1.5 transition-colors hover:bg-neutral-700"
        >
          {isCollapsed ? (
            <ChevronLeft className="h-4 w-4 text-neutral-300" />
          ) : (
            <ChevronRight className="h-4 w-4 text-neutral-300" />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="flex-1 overflow-y-auto">
          {/* Trend Chart Section */}
          <div className="border-b border-neutral-700 px-4 py-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Tendência (30 dias)
            </h4>
            {chartData.length > 0 ? (
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(74, 68, 85, 0.2)" />
                    <XAxis
                      dataKey="shortDate"
                      stroke="rgba(149, 141, 161, 0.5)"
                      tick={{ fontSize: 10 }}
                      style={{ fontSize: '10px' }}
                    />
                    <YAxis
                      stroke="rgba(149, 141, 161, 0.5)"
                      tick={{ fontSize: 10 }}
                      style={{ fontSize: '10px' }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'rgba(19, 19, 19, 0.9)',
                        border: '1px solid rgba(210, 187, 255, 0.2)',
                        borderRadius: '8px',
                      }}
                      labelStyle={{ color: 'rgba(210, 187, 255, 1)' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="interest"
                      stroke="var(--primary)"
                      dot={false}
                      strokeWidth={2}
                      isAnimationActive={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="flex h-48 items-center justify-center text-center">
                <p className="text-xs text-neutral-500">
                  Nenhum dado de tendência disponível
                </p>
              </div>
            )}
          </div>

          {/* Top Videos Section */}
          <div className="px-4 py-6">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-400">
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
                    className="group rounded-lg border border-neutral-700 bg-neutral-800/50 p-3 transition-all hover:border-[var(--primary)]/50 hover:bg-neutral-800"
                  >
                    {/* Rank Badge */}
                    <div className="mb-2 flex items-start justify-between">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/20 text-xs font-bold text-[var(--primary)]">
                        {idx + 1}
                      </span>
                      <Play className="h-3 w-3 text-neutral-500 group-hover:text-[var(--primary)]" />
                    </div>

                    {/* Video Title */}
                    <h5 className="mb-2 line-clamp-2 text-xs font-medium text-white group-hover:text-[var(--primary)]">
                      {video.title}
                    </h5>

                    {/* Channel & Views */}
                    <div className="space-y-1 text-xs text-neutral-400">
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
                <p className="text-xs text-neutral-500">
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
