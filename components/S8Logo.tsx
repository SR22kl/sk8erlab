import { SVGProps } from "react";

export function S8Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 420 220"
      fill="none"
      {...props}
    >
      <title>SK8ER LAB</title>

      {/* ========================= */}
      {/* Skateboard */}
      {/* ========================= */}

      <g transform="translate(55 8) rotate(12 110 28)">
        {/* Deck */}

        <rect
          x="18"
          y="18"
          width="185"
          height="40"
          rx="22"
          fill="currentColor"
        />

        {/* Nose */}

        <ellipse cx="22" cy="38" rx="18" ry="20" fill="currentColor" />

        {/* Tail */}

        <ellipse cx="199" cy="38" rx="18" ry="20" fill="currentColor" />

        {/* Deck Cutout */}

        <rect x="24" y="23" width="174" height="30" rx="16" fill="white" />

        {/* Trucks */}

        <g fill="currentColor">
          <rect x="55" y="55" width="10" height="12" rx="2" />

          <rect x="155" y="55" width="10" height="12" rx="2" />

          <rect x="47" y="63" width="26" height="5" rx="2" />

          <rect x="147" y="63" width="26" height="5" rx="2" />
        </g>

        {/* Wheels */}

        <g fill="currentColor">
          <circle cx="46" cy="70" r="8" />
          <circle cx="74" cy="70" r="8" />

          <circle cx="146" cy="70" r="8" />
          <circle cx="174" cy="70" r="8" />
        </g>

        {/* Grip holes */}

        <g fill="currentColor">
          <circle cx="70" cy="31" r="2.2" />
          <circle cx="70" cy="45" r="2.2" />
          <circle cx="83" cy="38" r="2.2" />

          <circle cx="145" cy="31" r="2.2" />
          <circle cx="145" cy="45" r="2.2" />
          <circle cx="158" cy="38" r="2.2" />
        </g>
      </g>

      {/* ========================= */}
      {/* SK8ER */}
      <g fill="currentColor" transform="translate(20 78)" stroke="none">
        {/* S */}
        <g transform="translate(0 0)">
          <path
            d="
            M58 8
            Q20 0 8 24
            Q2 38 12 50
            Q20 60 42 66
            Q62 72 64 82
            Q66 96 46 102
            Q28 106 10 94
            L10 118
            Q34 130 62 126
            Q92 122 96 90
            Q98 64 68 54
            L42 46
            Q24 42 26 30
            Q28 18 50 18
            Q70 18 88 28
            L88 8
            Q74 4 58 8
            Z
            "
          />
        </g>

        {/* K */}
        <g transform="translate(110 0) rotate(-2)">
          <rect x="0" y="6" width="22" height="120" rx="4" />

          <polygon
            points="
            18,62
            86,6
            112,6
            56,56
            118,126
            90,126
            38,70
            "
          />
        </g>

        {/* 8 */}
        <g transform="translate(235 0) rotate(1)">
          <path
            d="
            M42 6
            Q10 6 10 36
            Q10 56 28 64
            Q8 74 8 96
            Q8 126 44 126
            Q80 126 80 96
            Q80 74 60 64
            Q78 54 78 34
            Q78 6 42 6
            Z

            M42 22
            Q58 22 58 36
            Q58 50 42 50
            Q26 50 26 36
            Q26 22 42 22
            Z

            M44 76
            Q62 76 62 94
            Q62 110 44 110
            Q26 110 26 94
            Q26 76 44 76
            Z
            "
            fillRule="evenodd"
          />
        </g>

        {/* E */}
        <g fill="currentColor" transform="translate(325 40) scale(.55)">
          {/* e */}
          <path
            d="
            M20 26
            Q6 26 6 44
            Q6 62 24 62
            H46
            Q44 80 24 80
            Q10 80 8 70
            L0 72
            Q4 92 26 92
            Q54 92 54 58
            Q54 26 20 26
            Z

            M20 36
            Q36 36 40 50
            H16
            Q18 36 20 36
            "
          />

          {/* r */}
          <g transform="translate(62 8)">
            <rect width="12" height="58" rx="3" />

            <path
              d="
                M10 12
                Q18 0 34 2
                L34 14
                Q22 12 16 22
                Z
                "
            />
          </g>
        </g>
      </g>

      {/* ========================= */}
      {/* LAB */}

      <g fill="currentColor" transform="translate(315 165) rotate(-6)">
        {/* L */}

        <g>
          <rect width="18" height="74" rx="3" />

          <rect y="56" width="52" height="18" rx="3" />
        </g>

        {/* A */}

        <g transform="translate(58 0)">
          <polygon
            points="
            26,0
            52,74
            34,74
            28,56
            8,56
            2,74
            -16,74
            10,0
            "
          />

          <rect x="11" y="34" width="18" height="10" />
        </g>

        {/* B */}

        <g transform="translate(122 0)">
          <rect width="18" height="74" rx="3" />

          <path
            d="
            M16 0
            H44
            Q64 0 64 18
            Q64 30 52 36
            Q68 42 68 58
            Q68 74 42 74
            H16

            Z

            M34 16
            V28
            H42
            Q50 28 50 22
            Q50 16 42 16
            Z

            M34 44
            V58
            H44
            Q54 58 54 50
            Q54 44 44 44
            Z
      "
            fillRule="evenodd"
          />
        </g>
      </g>

      {/* ========================= */}
      {/* Grunge Cutouts */}
      {/* ========================= */}

      <g fill="white" opacity=".95">
        <circle cx="132" cy="116" r="3" />
        <circle cx="160" cy="92" r="2" />
        <circle cx="190" cy="137" r="2.5" />
        <circle cx="255" cy="126" r="3" />
        <circle cx="286" cy="104" r="2" />
        <circle cx="356" cy="128" r="2.4" />
        <circle cx="392" cy="94" r="2.8" />
        <circle cx="448" cy="120" r="2.2" />

        <rect
          x="175"
          y="82"
          width="3"
          height="10"
          rx="1"
          transform="rotate(-18 175 82)"
        />

        <rect
          x="228"
          y="132"
          width="3"
          height="14"
          rx="1"
          transform="rotate(24 228 132)"
        />

        <rect
          x="320"
          y="88"
          width="3"
          height="11"
          rx="1"
          transform="rotate(-25 320 88)"
        />

        <rect
          x="470"
          y="105"
          width="3"
          height="12"
          rx="1"
          transform="rotate(22 470 105)"
        />
      </g>
    </svg>
  );
}
