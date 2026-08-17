"use client";

import Script from 'next/script';

declare global {
  interface Window {
    chatwootSettings?: {
      position?: 'left' | 'right';
      type?: 'standard' | 'expanded_bubble';
      launcherTitle?: string;
    };
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
    };
  }
}

const CHATWOOT_BASE_URL = process.env.NEXT_PUBLIC_CHATWOOT_BASE_URL;
const CHATWOOT_WEBSITE_TOKEN =
  process.env.NEXT_PUBLIC_CHATWOOT_WEBSITE_TOKEN || 'QFehHcASDbvHm18RaNd1uAkE';

// No se activa hasta que NEXT_PUBLIC_CHATWOOT_BASE_URL apunte a una URL pública
// real (self-hosted o Chatwoot Cloud) — localhost no es alcanzable para visitantes.
export default function ChatwootWidget() {
  if (!CHATWOOT_BASE_URL) return null;

  return (
    <Script
      id="chatwoot-sdk"
      src={`${CHATWOOT_BASE_URL}/packs/js/sdk.js`}
      strategy="lazyOnload"
      onLoad={() => {
        window.chatwootSettings = { position: 'right', type: 'standard', launcherTitle: '' };
        window.chatwootSDK?.run({
          websiteToken: CHATWOOT_WEBSITE_TOKEN,
          baseUrl: CHATWOOT_BASE_URL,
        });
      }}
    />
  );
}
