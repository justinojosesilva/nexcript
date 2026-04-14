import { getApiClient } from "./api-client";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface GetMembersResponse {
  members: Member[];
  count: number;
}

export interface InviteMemberResponse {
  id: string;
  email: string;
  expiresAt: string;
}

// ─── Member limits per plan (mirrors backend) ─────────────────────────────────

export const MEMBER_LIMITS: Record<string, number | null> = {
  free: 1,
  starter: 3,
  professional: null,
  enterprise: null,
  creator: null,
};

// ─── API Calls ────────────────────────────────────────────────────────────────

export async function fetchMembers(): Promise<GetMembersResponse> {
  const client = getApiClient();
  const response = await client.get<GetMembersResponse>("/organizations/members");
  return response.data;
}

export async function inviteMember(email: string): Promise<InviteMemberResponse> {
  const client = getApiClient();
  const response = await client.post<InviteMemberResponse>("/organizations/invite", {
    email,
  });
  return response.data;
}
