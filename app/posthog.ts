"use client";

import posthog from "posthog-js";

if (typeof window !== "undefined") {
    console.log("PostHog Key:", process.env.NEXT_PUBLIC_POSTHOG_KEY);
    console.log("PostHog Host:", process.env.NEXT_PUBLIC_POSTHOG_HOST);

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        capture_pageview: false,
        capture_pageleave: true,
        debug: true, // ← shows verbose PostHog logs in console
    });

    console.log("PostHog initialized:", posthog.__loaded);
}

export default posthog;