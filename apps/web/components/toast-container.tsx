"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, X } from "lucide-react";
import { useToast } from "@/lib/toast-context";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  return (
    <div className="pointer-events-none fixed right-0 top-0 z-50 flex flex-col gap-3 p-6">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 400, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="pointer-events-auto"
          >
            <div
              className={`rounded-lg border px-4 py-3 shadow-lg backdrop-blur-sm ${
                toast.type === "success"
                  ? "border-green-500/30 bg-green-500/10 text-green-200"
                  : "border-red-500/30 bg-red-500/10 text-red-200"
              }`}
            >
              <div className="flex items-start gap-3">
                {/* Icon */}
                <div className="flex-shrink-0 pt-0.5">
                  {toast.type === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-green-400" />
                  ) : (
                    <AlertCircle className="h-5 w-5 text-red-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p className="text-sm font-medium">{toast.title}</p>
                  {toast.message && (
                    <p
                      className={`mt-1 text-xs ${
                        toast.type === "success"
                          ? "text-green-200/70"
                          : "text-red-200/70"
                      }`}
                    >
                      {toast.message}
                    </p>
                  )}

                  {/* Action button */}
                  {toast.action && (
                    <button
                      onClick={() => {
                        toast.action?.onClick();
                        removeToast(toast.id);
                      }}
                      className={`mt-2 inline-flex text-xs font-medium transition-colors ${
                        toast.type === "success"
                          ? "text-green-300 hover:text-green-100"
                          : "text-red-300 hover:text-red-100"
                      }`}
                    >
                      {toast.action.label} →
                    </button>
                  )}
                </div>

                {/* Close button */}
                <button
                  onClick={() => removeToast(toast.id)}
                  className={`flex-shrink-0 transition-colors hover:opacity-70 ${
                    toast.type === "success" ? "text-green-300" : "text-red-300"
                  }`}
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
