export interface GetSubscriptionResponse {
  plan: SubscriptionPlanInfo;
  usage: UsageInfo;
  limits: LimitsInfo;
  percentUsed: PercentUsedInfo;
}

export interface SubscriptionPlanInfo {
  slug: string;
  name: string;
  priceMonthlyBrl: string;
}

export interface UsageInfo {
  scripts: number;
  narrations: number;
  exports: number;
}

export interface LimitsInfo {
  scripts: number | null;
  narrations: number | null;
  exports: number | null;
}

export interface PercentUsedInfo {
  scripts: number;
  narrations: number;
  exports: number;
}
