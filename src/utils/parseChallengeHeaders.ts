export const GENERIC_CHALLENGE_ID_HEADER = "rblx-challenge-id" as const;
export const GENERIC_CHALLENGE_TYPE_HEADER = "rblx-challenge-type" as const;
export const GENERIC_CHALLENGE_METADATA_HEADER = "rblx-challenge-metadata" as const;

type ChallengeType = "captcha" | "forceauthenticator" | "forcetwostepverification" | "securityquestions" | "reauthentication" | "proofofwork" | "rostile" | "privateaccesstoken";

export type ParsedChallenge = {
    challengeType: ChallengeType;
    challengeId: string;
    challengeBase64Metadata: string;
};

export function parseChallengeHeaders(headers: Headers): ParsedChallenge | null {
    if (!headers.has(GENERIC_CHALLENGE_TYPE_HEADER)) {
        return null;
    }

    return {
        challengeType: headers.get(GENERIC_CHALLENGE_TYPE_HEADER)! as ChallengeType,
        challengeId: headers.get(GENERIC_CHALLENGE_ID_HEADER)!,
        challengeBase64Metadata: headers.get(GENERIC_CHALLENGE_METADATA_HEADER)!
    };
}