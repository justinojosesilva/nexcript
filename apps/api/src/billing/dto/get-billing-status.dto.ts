export interface GetBillingStatusResponse {
  plan: {
    slug: string;
    name: string;
    priceMonthlyBrl: string;
  };
  status: string;
  nextBillingDate: string; // ISO 8601 date
  cancelAtPeriodEnd: boolean;
}
