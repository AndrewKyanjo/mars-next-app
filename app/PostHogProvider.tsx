"use client";

import posthog from "./posthog"; // ← your file, not posthog-js directly
import { PostHogProvider as PHProvider, usePostHog } from "posthog-js/react";
import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function PostHogPageView() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const posthogClient = usePostHog();

    useEffect(() => {
        if (pathname && posthogClient) {
            let url = window.origin + pathname;
            const search = searchParams.toString();
            if (search) url += "?" + search;
            posthogClient.capture("$pageview", { $current_url: url });
        }
    }, [pathname, searchParams, posthogClient]);

    return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
    // No useEffect init here — posthog.ts handles it at module load time

    return (
        <PHProvider client={posthog}>
            <Suspense fallback={null}>
                <PostHogPageView />
            </Suspense>
            {children}
        </PHProvider>
    );
}