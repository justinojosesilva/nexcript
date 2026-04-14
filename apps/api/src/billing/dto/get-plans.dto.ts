export interface GetPlansResponse {
  plans: PlanInfo[];
}

export interface PlanInfo {
  slug: string;
  name: string;
  priceMonthlyBrl: string;
  limits: {
    scripts: number | null;
    narrations: number | null;
    exports: number | null;
  };
}
