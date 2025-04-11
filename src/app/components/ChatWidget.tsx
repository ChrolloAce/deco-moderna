'use client';

import { useEffect } from 'react';
import Script from 'next/script';

const ChatWidget = () => {
  return (
    <>
      <Script
        id="lead-connector-chat-widget"
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        data-widget-id="67e6db460d93973719f6b3dc"
        strategy="afterInteractive"
      />
    </>
  );
};

export default ChatWidget; 