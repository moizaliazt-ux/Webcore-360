import React from 'react';

export default function Logo({ className = "h-8 w-auto", ...props }) {
 return (
 <svg 
 viewBox="0 0 240 60" 
 fill="none" 
 xmlns="http://www.w3.org/2000/svg" 
 className={className} 
 {...props}
 >
 {/* "Web" in corporate blue */}
 <text 
 x="0" 
 y="44" 
 fontFamily="'Space Grotesk', 'Satoshi', 'Inter', sans-serif" 
 fontWeight="700" 
 fontSize="44" 
 fill="#4669B0" 
 letterSpacing="-1"
 >
 Web
 </text>
 
 {/* "CORE" container blue box */}
 <rect 
 x="98" 
 y="8" 
 width="132" 
 height="44" 
 rx="2" 
 fill="#4669B0" 
 />
 
 {/* "CORE" text, italic, bold, white */}
 <text 
 x="106" 
 y="41" 
 fontFamily="'Space Grotesk', 'Satoshi', 'Inter', sans-serif" 
 fontWeight="800" 
 fontStyle="italic" 
 fontSize="34" 
 fill="#FFFFFF" 
 letterSpacing="1.5"
 >
 CORE
 </text>
 
 {/* Small trademark symbol (registered mark) on the top right */}
 <circle 
 cx="220" 
 cy="18" 
 r="2.5" 
 stroke="#FFFFFF" 
 strokeWidth="1.2" 
 fill="none" 
 />
 </svg>
 );
}
