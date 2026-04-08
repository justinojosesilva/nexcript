"use client";

import { motion } from "framer-motion";
import { Loader } from "lucide-react";

interface JobProgressProps {
  currentStep?: string;
  progress?: number;
  isVisible: boolean;
}

export function JobProgress({
  currentStep,
  progress,
  isVisible,
}: JobProgressProps) {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/10 to-primary-container/10 p-6"
    >
      {/* Header with spinner */}
      <div className="mb-4 flex items-center gap-3">
        <Loader className="h-5 w-5 animate-spin text-primary" />
        <h3 className="font-headline text-sm font-semibold text-on-surface">
          Processando...
        </h3>
      </div>

      {/* Current step label */}
      {currentStep && (
        <div className="mb-4">
          <p className="text-sm text-on-surface-variant">{currentStep}</p>
        </div>
      )}

      {/* Progress bar */}
      <div className="space-y-2">
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-low">
          {/* Indeterminate progress animation */}
          <motion.div
            className="h-full w-1/3 bg-gradient-to-r from-primary to-primary-container"
            animate={{
              x: ["0%", "300%", "0%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Progress percentage (if available) */}
        {progress !== undefined && progress >= 0 && (
          <div className="text-right text-xs text-on-surface-variant">
            {Math.round(progress)}%
          </div>
        )}
      </div>

      {/* Help text */}
      <p className="mt-4 text-xs text-on-surface-variant">
        Não feche esta página enquanto o processamento está em andamento.
      </p>
    </motion.div>
  );
}
