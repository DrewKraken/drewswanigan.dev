import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Drew Swanigan — Backend Engineer';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #18181b 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'system-ui, -apple-system, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#fafafa',
            marginBottom: 24,
            letterSpacing: '-0.02em',
          }}
        >
          Drew Swanigan
        </div>
        <div
          style={{
            fontSize: 36,
            color: '#a1a1aa',
            fontWeight: 300,
            maxWidth: 900,
          }}
        >
          Backend engineer building production SaaS platforms and infrastructure automation systems
        </div>
        <div
          style={{
            fontSize: 24,
            color: '#52525b',
            marginTop: 40,
            fontFamily: 'monospace',
          }}
        >
          APIs · workers · orchestration · integrations · automation
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
