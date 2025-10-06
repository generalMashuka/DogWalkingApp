declare module '*.svg' {
  import * as React from 'react';
  export const component: React.FC<React.SVGProps<SVGSVGElement> & { title?: string }>;
  const src: string;
  export default src;
}

