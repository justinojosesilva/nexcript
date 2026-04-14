import { getApiClient } from "./api-client";

export async function completeOnboarding(): Promise<{
  onboardingCompleted: boolean;
}> {
  const client = getApiClient();
  const response = await client.patch<{ onboardingCompleted: boolean }>(
    "/organizations/onboarding",
  );
  return response.data;
}
