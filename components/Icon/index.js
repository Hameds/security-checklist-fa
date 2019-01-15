// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  glyph: string,
  size?: number,
};

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`;

type GlyphProps = {
  glyph: string,
};

export const Glyph = ({ glyph }: GlyphProps): any => {
  switch (glyph) {
    case 'facebook':
      return (
        <g>
          <path d="M19.491,27.944c7.731,-0.319 8.509,-2.242 8.509,-11.944c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,10.985 0.997,11.997 11.956,12l0,-7.667l-2.956,0l0,-3.377l2.956,0l0,-2.491c0,-2.891 1.789,-4.465 4.403,-4.465c1.251,0 2.327,0.092 2.641,0.133l0,3.021l-1.813,0.001c-1.421,0 -1.696,0.666 -1.696,1.644l0,2.157l3.39,0l-0.442,3.377l-2.948,0l0,7.611Z" />
        </g>
      );
    case 'link':
      return (
        <g>
          <path d="M16.693,16.664c0.376,-0.375 1.001,-0.413 1.377,-0.038l0.083,0.084c0.358,0.357 0.386,0.93 0.032,1.291c-0.026,0.026 -0.051,0.052 -0.077,0.078c-0.867,0.866 -1.671,1.438 -2.514,1.655c0,0 -0.001,0 -0.001,0c-0.078,0.02 -0.157,0.037 -0.236,0.051c0,0 0,0 0,0c-0.802,0.142 -1.646,-0.036 -2.616,-0.582l0,0c-0.907,-0.511 -1.923,-1.343 -3.119,-2.539c-3.959,-3.959 -3.939,-5.959 -1.414,-8.485c2.526,-2.525 4.526,-2.545 8.485,1.414c0.439,0.439 0.828,0.853 1.171,1.247c0.102,0.117 -0.009,0.3 -0.162,0.28c0,0 0,0 -0.001,0c-0.559,-0.074 -1.083,-0.035 -1.58,0.094c-0.299,0.078 -0.624,0.012 -0.842,-0.206c-1.958,-1.958 -3.035,-2.492 -3.63,-2.571c-0.366,-0.049 -0.902,0.032 -2.027,1.156c-1.124,1.125 -1.205,1.661 -1.156,2.027c0.079,0.595 0.613,1.672 2.571,3.63c0.432,0.433 0.822,0.796 1.173,1.1c0,0 0,0 0,0c0.046,0.04 0.091,0.079 0.136,0.117c0,0 0,0 0,0c0.841,0.712 1.45,1.073 1.891,1.24c0,0 0,0 0,0c0.166,0.062 0.308,0.098 0.429,0.114c0,0 0,0 0,0c0.367,0.049 0.903,-0.032 2.027,-1.157Zm3.07,-1.099c-0.912,-0.79 -1.563,-1.181 -2.027,-1.357c0,0 0,0 0,0c-0.166,-0.063 -0.308,-0.098 -0.43,-0.114c0,0 0,0 0,0c-0.367,-0.049 -0.902,0.032 -2.027,1.156c-0.375,0.376 -1.001,0.414 -1.376,0.038l-0.083,-0.083c-0.358,-0.358 -0.387,-0.931 -0.032,-1.291c0.025,-0.026 0.051,-0.052 0.077,-0.078c0.866,-0.866 1.671,-1.438 2.514,-1.655l0,0c0.873,-0.225 1.786,-0.07 2.853,0.531c0,0 0,0 0,0c0.906,0.51 1.923,1.343 3.118,2.538c3.96,3.96 3.94,5.96 1.414,8.486c-2.525,2.525 -4.525,2.545 -8.485,-1.415c-0.438,-0.438 -0.828,-0.852 -1.171,-1.246c-0.102,-0.117 0.009,-0.301 0.163,-0.28c0.559,0.074 1.083,0.035 1.581,-0.094c0.299,-0.078 0.623,-0.012 0.841,0.206c1.958,1.958 3.035,2.492 3.63,2.571c0.367,0.049 0.903,-0.032 2.027,-1.157c1.125,-1.124 1.206,-1.66 1.157,-2.027c-0.079,-0.595 -0.613,-1.672 -2.571,-3.63c-0.433,-0.432 -0.822,-0.795 -1.173,-1.099Z" />
        </g>
      );
    case 'share':
      return (
        <g fillRule="nonzero">
          <path d="M16.707,5.294c-0.39,-0.39 -1.024,-0.39 -1.414,0l-3,3c-0.391,0.391 -0.391,1.024 0,1.415c0.39,0.39 1.024,0.39 1.414,0l1.293,-1.293l0,9.585c0,0.553 0.448,1 1,1c0.552,0 1,-0.447 1,-1l0,-9.585l1.293,1.293c0.39,0.39 1.024,0.39 1.414,0c0.391,-0.391 0.391,-1.024 0,-1.415l-3,-3Zm-5.817,7.023c0.588,-0.114 1.11,0.36 1.11,0.959l0,0.426c0,0.265 -0.198,0.487 -0.459,0.531l-0.002,0c-1.042,0.17 -1.486,0.416 -1.706,0.612c-0.191,0.171 -0.42,0.489 -0.588,1.31l-0.007,0.03c-0.191,0.926 -0.238,2.106 -0.238,3.815l0,0.003c0,1.709 0.047,2.889 0.238,3.814l0.007,0.031c0.168,0.821 0.397,1.139 0.588,1.309c0.219,0.197 0.662,0.442 1.699,0.612l0.017,0.002c1.094,0.182 2.493,0.231 4.45,0.23l0.002,0c1.957,0.001 3.356,-0.048 4.45,-0.23l0.017,-0.002c1.037,-0.17 1.48,-0.415 1.699,-0.611c0.191,-0.171 0.42,-0.489 0.588,-1.31l0.007,-0.031c0.191,-0.925 0.238,-2.105 0.238,-3.814l0,-0.003c0,-1.709 -0.047,-2.889 -0.238,-3.815l-0.007,-0.03c-0.168,-0.821 -0.397,-1.139 -0.588,-1.31c-0.22,-0.196 -0.664,-0.442 -1.706,-0.612l-0.002,0c-0.262,-0.044 -0.459,-0.266 -0.459,-0.531l0,-0.426c0,-0.599 0.522,-1.073 1.11,-0.959c3.362,0.655 3.89,2.553 3.89,7.684c0,7.059 -1,8 -9,8c-8,0 -9,-0.941 -9,-8c0,-5.131 0.528,-7.029 3.89,-7.684Z" />
        </g>
      );
    case 'twitter':
      return (
        <g>
          <path d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z" />
        </g>
      );
    case 'view-forward':
      return (
        <g>
          <path d="M12.982,23.89c-0.354,-0.424 -0.296,-1.055 0.128,-1.408c1.645,-1.377 5.465,-4.762 6.774,-6.482c-1.331,-1.749 -5.1,-5.085 -6.774,-6.482c-0.424,-0.353 -0.482,-0.984 -0.128,-1.408c0.353,-0.425 0.984,-0.482 1.409,-0.128c1.839,1.532 5.799,4.993 7.2,6.964c0.219,0.312 0.409,0.664 0.409,1.054c0,0.39 -0.19,0.742 -0.409,1.053c-1.373,1.932 -5.399,5.462 -7.2,6.964l-0.001,0.001c-0.424,0.354 -1.055,0.296 -1.408,-0.128Z" />
        </g>
      );
    case 'github':
      return (
        <g>
          <path d="M18.837,27.966c8.342,-0.241 9.163,-1.997 9.163,-11.966c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,9.995 0.826,11.734 9.228,11.968c0.073,-0.091 0.1,-0.205 0.1,-0.321c0,-0.25 -0.01,-2.816 -0.015,-3.699c-3.037,0.639 -3.678,-1.419 -3.678,-1.419c-0.497,-1.222 -1.213,-1.548 -1.213,-1.548c-0.991,-0.656 0.075,-0.643 0.075,-0.643c1.096,0.075 1.673,1.091 1.673,1.091c0.974,1.617 2.556,1.15 3.178,0.879c0.099,-0.683 0.381,-1.15 0.693,-1.414c-2.425,-0.267 -4.974,-1.175 -4.974,-5.23c0,-1.155 0.426,-2.099 1.124,-2.839c-0.113,-0.268 -0.487,-1.344 0.107,-2.8c0,0 0.917,-0.285 3.003,1.084c0.871,-0.235 1.805,-0.352 2.734,-0.356c0.927,0.004 1.861,0.121 2.734,0.356c2.085,-1.369 3,-1.084 3,-1.084c0.596,1.456 0.221,2.532 0.108,2.8c0.7,0.74 1.123,1.684 1.123,2.839c0,4.065 -2.553,4.96 -4.986,5.221c0.392,0.327 0.741,0.973 0.741,1.96c0,0.946 -0.006,2.619 -0.01,3.728c-0.002,0.549 -0.003,0.959 -0.003,1.074c0,0.109 0.029,0.224 0.095,0.319Z" />
        </g>
      );
    case 'ios':
      return (
        <g>
          <path d="M16.6437 15.5861C16.3385 16.2848 15.9772 16.928 15.5586 17.5193C14.9881 18.3255 14.5209 18.8835 14.1609 19.1934C13.6027 19.702 13.0048 19.9625 12.3644 19.9773C11.9047 19.9773 11.3504 19.8477 10.705 19.5847C10.0576 19.323 9.46262 19.1934 8.91858 19.1934C8.34801 19.1934 7.73608 19.323 7.08155 19.5847C6.42601 19.8477 5.89793 19.9847 5.49417 19.9983C4.88012 20.0242 4.26806 19.7563 3.65713 19.1934C3.2672 18.8563 2.77947 18.2786 2.1952 17.4601C1.56832 16.586 1.05294 15.5725 0.649179 14.417C0.216767 13.1689 5.70276e-08 11.9603 5.70276e-08 10.7902C5.70276e-08 9.44984 0.292262 8.29382 0.877656 7.32509C1.33773 6.54696 1.94978 5.93315 2.71581 5.48255C3.48185 5.03195 4.30955 4.80232 5.20091 4.78763C5.68863 4.78763 6.32822 4.93713 7.12303 5.23095C7.9156 5.52576 8.42451 5.67526 8.64762 5.67526C8.81444 5.67526 9.37977 5.50045 10.3382 5.15194C11.2445 4.82874 12.0094 4.69492 12.636 4.74763C14.334 4.88343 15.6097 5.54675 16.4581 6.74177C14.9395 7.6536 14.1883 8.93072 14.2032 10.5691C14.2169 11.8452 14.6841 12.9071 15.6022 13.7503C16.0183 14.1417 16.483 14.4441 17 14.6589C16.8879 14.9812 16.7695 15.2898 16.6437 15.5861ZM12.7494 0.400111C12.7494 1.40034 12.3806 2.33425 11.6456 3.19867C10.7586 4.22629 9.68574 4.8201 8.5223 4.7264C8.50747 4.6064 8.49888 4.48011 8.49888 4.3474C8.49888 3.38718 8.9207 2.35956 9.66979 1.51934C10.0438 1.09392 10.5194 0.740188 11.0962 0.458011C11.6718 0.180044 12.2162 0.0263202 12.7282 8.94779e-09C12.7431 0.133712 12.7494 0.267436 12.7494 0.400099V0.400111Z" />
        </g>
      );
    case 'macos':
      return (
        <g>
          <path d="M12.2058 17.2207C11.9485 17.2394 11.707 17.2523 11.5 17.2523C10.1315 17.2523 7.64606 16.8628 4.77537 15.7674C4.4045 15.6265 4.21906 15.2111 4.35994 14.8402C4.50081 14.4679 4.91625 14.2796 5.28856 14.4248C7.97956 15.4512 10.3169 15.8148 11.5 15.8148C11.7171 15.8148 11.9844 15.7976 12.2734 15.7717C12.3524 14.7094 12.489 13.7118 12.673 12.9398H9.34375C8.947 12.9398 8.625 12.6178 8.625 12.2211C8.625 9.21529 9.92019 5.49072 11.3217 2.87735H0.71875C0.322 2.87735 0 3.19935 0 3.5961V19.4086C0 19.8053 0.322 20.1273 0.71875 20.1273H12.3194C12.2187 19.239 12.1842 18.2327 12.2058 17.2207ZM5.75 6.4711C5.75 6.07435 6.072 5.75235 6.46875 5.75235C6.8655 5.75235 7.1875 6.07435 7.1875 6.4711V7.9086C7.1875 8.30535 6.8655 8.62735 6.46875 8.62735C6.072 8.62735 5.75 8.30535 5.75 7.9086V6.4711Z" />
          <path d="M22.2813 2.87735H12.9792C11.7113 5.03216 10.2968 8.54685 10.0884 11.5023H13.6563C13.9021 11.5023 14.1306 11.6274 14.2629 11.8344C14.3951 12.0428 14.4124 12.303 14.3074 12.5244C14.0156 13.1497 13.8259 14.2897 13.7267 15.5633C14.8609 15.3505 16.2294 14.9912 17.7129 14.4262C18.0809 14.2825 18.4992 14.4679 18.6401 14.8417C18.7824 15.2125 18.5969 15.628 18.2246 15.7688C16.5083 16.4229 14.9371 16.8225 13.6519 17.0396C13.6246 18.1537 13.6606 19.2562 13.754 20.1273H22.2813C22.678 20.1273 23 19.8053 23 19.4086V3.5961C23 3.19935 22.678 2.87735 22.2813 2.87735ZM15.8125 7.9086C15.8125 8.30535 15.4905 8.62735 15.0938 8.62735C14.697 8.62735 14.375 8.30535 14.375 7.9086V6.4711C14.375 6.07435 14.697 5.75235 15.0938 5.75235C15.4905 5.75235 15.8125 6.07435 15.8125 6.4711V7.9086Z" />
          <path d="M14.1651 0.213652C13.8848 -0.0666602 13.4291 -0.0666602 13.1488 0.213652C12.5882 0.77284 11.9442 1.71585 11.3217 2.87735H12.9792C13.409 2.1471 13.8216 1.57209 14.1651 1.22997C14.4454 0.949653 14.4454 0.493965 14.1651 0.213652Z" />
          <path d="M14.168 21.7776C13.9797 21.5706 13.8417 20.951 13.754 20.1273H12.3194C12.4588 21.365 12.7247 22.3684 13.1488 22.7925C13.2868 22.9305 13.4622 22.9966 13.639 22.9966C13.8172 22.9966 13.9984 22.9276 14.1407 22.7925C14.4224 22.5237 14.4282 22.0665 14.168 21.7776Z" />
        </g>
      );
    case 'windows':
      return (
        <g>
          <path d="M0 2.83167L7.7647 1.72197L7.76809 9.58155L0.00709303 9.62793L0 2.83167ZM7.761 10.4871L7.76703 18.3536L0.0060269 17.2338L0.00559175 10.4344L7.761 10.4871ZM8.70226 1.5768L18.9976 0V9.48159L8.70226 9.56736V1.5768ZM19 10.5611L18.9976 20L8.70224 18.4752L8.68781 10.5434L19 10.5611Z" />
        </g>
      );
    case 'android':
      return (
        <g>
          <path d="M1.98508 7.17365H1.92873C1.20629 7.17365 0.617249 7.76456 0.617249 8.48513V14.1951C0.617249 14.9185 1.20629 15.5075 1.92873 15.5075H1.98604C2.70848 15.5075 3.29752 14.9166 3.29752 14.1951V8.48508C3.29656 7.76456 2.70661 7.17365 1.98508 7.17365Z" />
          <path d="M3.92507 16.399C3.92507 17.0623 4.46711 17.6024 5.13036 17.6024H6.41837V20.6866C6.41837 21.411 7.00928 22 7.72985 22H7.7862C8.5096 22 9.09956 21.41 9.09956 20.6866V17.6024H10.8996V20.6866C10.8996 21.411 11.4923 22 12.2129 22H12.2684C12.9917 22 13.5807 21.41 13.5807 20.6866V17.6024H14.8697C15.532 17.6024 16.074 17.0623 16.074 16.399V7.38312H3.92507V16.399Z" />
          <path d="M13.0255 1.91553L14.0486 0.33634C14.1143 0.236737 14.0852 0.10055 13.9847 0.0357013C13.8851 -0.0300621 13.7489 -0.00279859 13.684 0.0995919L12.6234 1.73331C11.8277 1.40732 10.939 1.22414 10.0005 1.22414C9.06101 1.22414 8.17416 1.40732 7.37659 1.73331L6.31785 0.0995919C6.25304 -0.00279859 6.11585 -0.0300621 6.01534 0.0357013C5.91482 0.100506 5.88568 0.236737 5.95145 0.33634L6.97544 1.91553C5.1294 2.82023 3.88465 4.52533 3.88465 6.48125C3.88465 6.6015 3.89218 6.71987 3.9025 6.83729H16.0993C16.1097 6.71987 16.1162 6.6015 16.1162 6.48125C16.1163 4.52533 14.8706 2.82023 13.0255 1.91553ZM7.17273 4.74327C6.84861 4.74327 6.58556 4.48209 6.58556 4.15706C6.58556 3.83203 6.84861 3.57177 7.17273 3.57177C7.49871 3.57177 7.75989 3.83199 7.75989 4.15706C7.75989 4.48213 7.49684 4.74327 7.17273 4.74327ZM12.8273 4.74327C12.5032 4.74327 12.2401 4.48209 12.2401 4.15706C12.2401 3.83203 12.5032 3.57177 12.8273 3.57177C13.1523 3.57177 13.4135 3.83199 13.4135 4.15706C13.4135 4.48209 13.1523 4.74327 12.8273 4.74327Z" />
          <path d="M18.0703 7.17365H18.0158C17.2934 7.17365 16.7025 7.76456 16.7025 8.48513V14.1951C16.7025 14.9185 17.2943 15.5075 18.0158 15.5075H18.0713C18.7946 15.5075 19.3827 14.9166 19.3827 14.1951V8.48508C19.3827 7.76456 18.7928 7.17365 18.0703 7.17365Z" />
        </g>
      );
    case 'linux':
      return (
        <React.Fragment>
          <path d="M21.1088 19.2579C21.015 19.1509 20.8822 19.0462 20.7112 18.9434C20.6853 18.9267 20.6148 18.8859 20.4998 18.8221C20.3845 18.7578 20.2925 18.7022 20.2237 18.655C20.1553 18.6079 20.0655 18.5267 19.9541 18.4112C19.8431 18.2958 19.7554 18.1737 19.6911 18.0453C19.6269 17.9172 19.5649 17.744 19.5049 17.5257C19.4449 17.3074 19.4111 17.0657 19.4023 16.8005C19.2825 16.9028 19.2163 17.106 19.2034 17.41C19.1905 17.7137 19.2548 18.0236 19.396 18.3402C19.5371 18.657 19.7489 18.862 20.0312 18.9563C20.3049 19.0506 20.5251 19.1509 20.6922 19.2578C20.8588 19.3649 20.966 19.4866 21.0131 19.6235C21.0602 19.7608 20.9808 19.9082 20.7756 20.0664C20.5701 20.2248 20.2408 20.3808 19.7874 20.5353C19.1628 20.749 18.7199 20.931 18.4589 21.0805C18.198 21.2303 17.8153 21.5149 17.3103 21.934C16.9679 22.2164 16.6044 22.3684 16.2192 22.3898C15.8345 22.4113 15.5219 22.2701 15.2825 21.9664C15.0428 21.6628 14.9656 21.233 15.0513 20.6765C15.2139 19.6071 15.2099 18.7728 15.0388 18.174C14.9019 17.7034 14.8718 17.2883 14.949 16.929C15.0259 16.57 15.1456 16.3605 15.3084 16.3005C15.4705 16.2403 15.6462 16.3688 15.8345 16.6852C15.8512 16.728 15.89 16.8114 15.9497 16.9355C16.0095 17.0595 16.0586 17.1475 16.0975 17.1986C16.1359 17.25 16.1937 17.3163 16.2707 17.3977C16.3476 17.4792 16.4444 17.5367 16.5596 17.5711C16.675 17.6053 16.8096 17.6267 16.9639 17.6352C17.2548 17.6436 17.5155 17.5838 17.7468 17.4555C17.9777 17.3272 18.1512 17.1838 18.2665 17.0256C18.3819 16.8671 18.4976 16.7154 18.613 16.5699C18.7283 16.4242 18.829 16.343 18.9147 16.3257C19.0087 16.309 19.0943 16.2148 19.1714 16.0434C19.2483 15.8724 19.2997 15.635 19.3254 15.3314C19.3512 15.0275 19.3297 14.666 19.2614 14.247C19.133 13.5023 18.8782 12.6853 18.4976 11.7955C18.1167 10.9056 17.6913 10.2083 17.2206 9.70344C16.3737 8.80516 15.8049 7.87259 15.5137 6.90567C15.2145 5.88759 15.0864 4.97205 15.129 4.15918C15.1719 3.57732 15.0456 2.94628 14.7505 2.26602C14.4555 1.58585 14.0638 1.06607 13.5761 0.706725C13.2682 0.475806 12.8873 0.29829 12.4341 0.174132C11.9806 0.0499742 11.527 -0.00760946 11.0735 0.000841534C10.5175 0.000841534 10.0724 0.0906109 9.7389 0.270374C9.05441 0.638352 8.60107 1.08536 8.37846 1.61157C8.15586 2.13769 8.05337 2.7858 8.07036 3.55588C8.10475 5.24999 8.17303 6.57617 8.27579 7.53437C8.15591 7.97935 7.62556 8.81343 6.68431 10.0369C6.51308 10.2082 6.34622 10.4391 6.18363 10.73C6.02113 11.021 5.89274 11.282 5.79866 11.5129C5.70444 11.7438 5.5783 12.0775 5.42003 12.5139C5.26166 12.9502 5.14843 13.2583 5.07992 13.4378C5.02004 13.5921 4.92587 13.7715 4.79762 13.9772C4.66924 14.1823 4.56634 14.3836 4.48952 14.58C4.41269 14.7768 4.36981 14.9992 4.36127 15.2474C4.35273 15.4356 4.36127 15.5983 4.38698 15.735C4.4211 15.9407 4.48543 16.0047 4.57942 15.9278C4.96462 15.6369 5.44803 15.8079 6.02976 16.4413C6.44044 16.8862 7.1635 17.9215 8.19875 19.5472C8.28429 19.6926 8.36979 19.8487 8.45533 20.016C8.5411 20.1825 8.62215 20.4048 8.69924 20.683C8.77625 20.9614 8.80839 21.2114 8.79549 21.434C8.78254 21.6566 8.68427 21.862 8.50028 22.0499C8.3163 22.2381 8.04033 22.3578 7.67249 22.4091C7.4756 22.4348 7.23839 22.4179 6.96018 22.3577C6.6821 22.2979 6.32914 22.1995 5.90142 22.0627C5.47361 21.9259 5.1571 21.8316 4.95172 21.7802C4.65242 21.7116 4.22677 21.6244 3.6748 21.5172C3.12288 21.4101 2.76129 21.331 2.5902 21.2796C2.29931 21.2027 2.14108 21.0917 2.11546 20.946C2.08975 20.8262 2.14962 20.621 2.29513 20.3302C2.44073 20.0393 2.51333 19.8294 2.51333 19.7013C2.52178 19.607 2.51756 19.5132 2.50038 19.4189C2.48339 19.3248 2.46415 19.252 2.44271 19.2007C2.42131 19.1494 2.38495 19.0724 2.33357 18.9696C2.28219 18.867 2.24802 18.7897 2.2309 18.7387C2.07698 18.3792 2.05554 18.135 2.16675 18.0069C2.24366 17.8956 2.42765 17.8529 2.71854 17.8787C3.15489 17.9215 3.50992 17.8572 3.78377 17.686C4.23711 17.4037 4.37417 16.9502 4.19441 16.3255C4.19441 16.6164 4.14303 16.8343 4.04036 16.98C3.93768 17.1254 3.75792 17.2752 3.50133 17.4294C3.35596 17.5149 3.09915 17.5662 2.73135 17.5835C2.36351 17.6006 2.11955 17.6606 1.9998 17.7632C1.9143 17.8403 1.86944 17.9558 1.86512 18.1098C1.86089 18.2641 1.88027 18.4199 1.92297 18.5784C1.96568 18.7367 2.00852 18.9183 2.05122 19.1237C2.09406 19.3292 2.11105 19.5005 2.1026 19.6372C2.09406 19.7312 2.01683 19.9646 1.87146 20.3364C1.72608 20.7087 1.69615 20.9933 1.78169 21.1899C1.82453 21.2842 1.89713 21.3677 1.99984 21.4403C2.10247 21.513 2.24578 21.5751 2.42972 21.6266C2.61353 21.678 2.78259 21.7186 2.93669 21.7485C3.09061 21.7781 3.30449 21.8169 3.57825 21.8637C3.85205 21.9105 4.0702 21.9515 4.2328 21.9855C4.7804 22.0969 5.40492 22.2808 6.10658 22.5374C6.80815 22.7942 7.28294 22.9266 7.53107 22.9351C7.77067 22.9435 7.99947 22.8945 8.21772 22.7874C8.43587 22.6807 8.62193 22.5587 8.77598 22.4217C8.92989 22.2848 9.15879 22.1564 9.46244 22.0367C9.76632 21.9169 10.1064 21.8527 10.4829 21.8442C10.654 21.8357 10.9021 21.8249 11.2272 21.8121C11.5524 21.7992 11.7961 21.7929 11.9587 21.7929C12.6945 21.7929 13.2506 21.797 13.627 21.8056C13.8838 21.8144 14.0848 21.8549 14.2303 21.9277C14.3757 22.0003 14.47 22.0838 14.5126 22.1777C14.5554 22.2721 14.6263 22.381 14.7248 22.5051C14.8229 22.6291 14.9491 22.7297 15.1029 22.8066C15.4279 22.9608 15.8088 23.0228 16.2453 22.9928C16.6815 22.9629 16.9726 22.8794 17.1179 22.7425C17.3575 22.5116 17.6804 22.2377 18.0868 21.9212C18.4932 21.6048 18.8594 21.3651 19.1842 21.2025C19.2526 21.168 19.3681 21.1125 19.5307 21.0354C19.6931 20.9584 19.8299 20.8922 19.9411 20.8364C20.0524 20.7807 20.1873 20.7101 20.3452 20.6246C20.5036 20.5389 20.632 20.4598 20.7304 20.387C20.8288 20.3143 20.9292 20.231 21.0319 20.1367C21.1345 20.0427 21.2008 19.9486 21.231 19.8545C21.2605 19.7604 21.2716 19.6641 21.263 19.5657C21.2542 19.4675 21.2031 19.3651 21.1088 19.2579ZM14.23 6.85375C14.2556 6.83675 14.2728 6.83028 14.2813 6.83451C14.2899 6.83882 14.307 6.85599 14.3325 6.88589C14.3584 6.91583 14.3816 6.94374 14.4033 6.96941C14.4245 6.99485 14.4544 7.02924 14.4928 7.07194C14.5312 7.11478 14.5719 7.14895 14.6145 7.17462C14.6661 7.20878 14.728 7.23247 14.8008 7.24523C14.8736 7.258 14.9292 7.2794 14.9679 7.30929C15.0065 7.33918 15.0344 7.38836 15.0511 7.45691C15.068 7.55113 15.0537 7.6365 15.0067 7.7135C14.9593 7.79059 14.8974 7.82489 14.8202 7.81626C14.6662 7.78201 14.4993 7.64733 14.3198 7.41201C14.1403 7.17673 14.1102 6.99067 14.23 6.85375ZM12.6385 1.86797C12.6811 1.81237 12.7068 1.76746 12.7153 1.7333C12.7324 1.68178 12.7345 1.62838 12.7217 1.57277C12.709 1.51717 12.7132 1.46156 12.7345 1.40595C12.756 1.35035 12.8053 1.31825 12.8823 1.30971C12.9593 1.30971 13.062 1.37395 13.1903 1.50224C13.2159 1.51941 13.2565 1.54508 13.3118 1.57925C13.3675 1.6135 13.406 1.64339 13.4274 1.66901C13.4488 1.69455 13.4594 1.71617 13.4594 1.73316C13.4423 1.77587 13.4038 1.80607 13.3442 1.82307C13.2845 1.84006 13.22 1.84878 13.1517 1.84878C13.0834 1.84878 13.0446 1.853 13.0362 1.86154C12.9678 1.88726 12.9036 1.92569 12.8436 1.97698C12.7838 2.02836 12.7367 2.06684 12.7025 2.09251C12.6681 2.11813 12.634 2.11813 12.5998 2.09251C12.5656 2.04113 12.5527 2.00476 12.5614 1.98345C12.57 1.96215 12.5957 1.92358 12.6385 1.86797ZM6.42691 11.4743C6.48661 11.4059 6.52954 11.3503 6.55516 11.3075C6.58083 11.2646 6.60429 11.2069 6.62573 11.1342C6.64713 11.0614 6.66637 11.0079 6.6835 10.9737C6.70071 10.9393 6.72643 10.9265 6.76059 10.9351C6.77758 10.9309 6.79035 10.9393 6.7992 10.9608C6.80766 10.9821 6.81197 10.9929 6.81197 10.9929V11.0314C6.81197 11.0444 6.80977 11.0614 6.8055 11.0828C6.80118 11.1044 6.79471 11.1236 6.78626 11.1406C6.77758 11.1578 6.76909 11.1835 6.76059 11.2176C6.75205 11.2518 6.7436 11.2818 6.73488 11.3074C6.70071 11.3931 6.64713 11.47 6.57453 11.5385C6.50176 11.6069 6.44822 11.6369 6.41401 11.6283C6.36267 11.6113 6.36708 11.5597 6.42691 11.4743ZM14.82 19.3928C14.8029 19.6664 14.7451 20.0516 14.6466 20.5479C14.5482 21.044 14.4861 21.3735 14.4603 21.536C14.2806 21.5272 14.1781 21.4609 14.1523 21.3369C14.1268 21.2127 14.1523 21.0525 14.2294 20.8556C14.4176 20.2821 14.5157 19.8886 14.5245 19.6749C14.5419 19.2812 14.4989 19.0587 14.3964 19.0075C14.3019 18.9391 14.1566 19.0675 13.9599 19.3924C13.5831 20.0085 12.8261 20.3804 11.6882 20.5091C10.6617 20.646 9.95152 20.492 9.55783 20.0468C9.47229 19.987 9.38674 19.9763 9.30124 20.015C9.2157 20.0531 9.16009 20.094 9.13443 20.1365C9.12597 20.1537 9.13442 20.1793 9.16014 20.2136C9.18581 20.2479 9.22644 20.2991 9.28205 20.3676C9.33765 20.4363 9.38256 20.5045 9.41672 20.5732C9.75054 21.1549 9.72065 21.5484 9.32695 21.7538C9.32695 21.3604 9.29702 21.0588 9.23719 20.8492C9.17726 20.6396 9.0576 20.4087 8.87784 20.1561C8.69825 19.9038 8.57419 19.7133 8.50581 19.585C8.7624 19.5595 8.95709 19.461 9.08974 19.2898C9.22235 19.1188 9.28218 18.9348 9.26942 18.7381C9.25656 18.5412 9.18176 18.3785 9.04484 18.2502C8.96783 18.1733 8.56987 17.846 7.85122 17.2684C7.13262 16.6909 6.68763 16.3038 6.51659 16.107C6.4822 16.0727 6.37967 15.9872 6.20849 15.8502C6.03727 15.7134 5.93028 15.5937 5.88757 15.4909C5.49393 14.6271 5.45122 13.9166 5.75919 13.3607L5.81048 13.2966C5.85319 13.2881 5.8575 13.365 5.82325 13.5277C5.77196 13.7673 5.75492 14.0067 5.77196 14.2464C5.80612 14.7855 5.96017 15.1876 6.23393 15.4526C6.4137 15.6326 6.53767 15.6197 6.60618 15.4142C6.65756 15.3457 6.68103 15.0933 6.67671 14.6568C6.67262 14.2206 6.67896 13.9254 6.69608 13.7713C6.76459 13.2837 6.96782 12.6803 7.30573 11.9619C7.64363 11.2431 7.91114 10.8581 8.1079 10.8068C7.95385 10.5587 7.90467 10.2891 7.96032 9.99819C8.01584 9.70726 8.10583 9.45899 8.22981 9.25378C8.35374 9.04849 8.4801 8.81114 8.6083 8.54156C8.73669 8.27203 8.80084 8.03028 8.80084 7.8164C8.80084 7.75661 8.80524 7.71377 8.81378 7.6881C8.8394 7.6111 8.94639 7.70518 9.13461 7.97036C9.49395 8.50093 9.76349 8.8133 9.9432 8.90738C10.1314 9.00992 10.3409 9.00569 10.572 8.89444C10.803 8.78323 11.0874 8.59924 11.4255 8.34265C11.7633 8.08606 12.052 7.89776 12.2917 7.7781C12.3175 7.76942 12.358 7.75018 12.4139 7.72024C12.4692 7.69049 12.512 7.66895 12.5418 7.65601C12.5716 7.64324 12.6102 7.62405 12.6574 7.59833C12.7041 7.57267 12.7404 7.55127 12.7662 7.5341C12.7918 7.51688 12.8175 7.49764 12.8431 7.47624C12.8686 7.45476 12.8856 7.43354 12.8944 7.4121C12.903 7.3907 12.9074 7.37151 12.9074 7.35433C12.8901 7.27729 12.8539 7.23018 12.7981 7.21318C12.7425 7.1961 12.6677 7.20671 12.5735 7.24532C12.4794 7.28385 12.3745 7.33523 12.2591 7.39933C12.1437 7.46348 12.0155 7.53621 11.8742 7.61753C11.7331 7.69885 11.5898 7.7736 11.4444 7.84215C11.299 7.91066 11.1449 7.97054 10.9823 8.02192C10.8198 8.07316 10.6658 8.10324 10.5203 8.11178C10.161 8.12036 9.87447 8.02641 9.66059 7.82948C9.52371 7.701 9.45107 7.61978 9.44239 7.58557C9.43376 7.55145 9.47233 7.54291 9.55783 7.5599C10.02 7.61982 10.3579 7.62827 10.5718 7.58557C10.7942 7.55145 11.0937 7.45296 11.4702 7.29037C11.5473 7.2562 11.7417 7.17268 12.0543 7.04007C12.3664 6.90764 12.6082 6.81563 12.7793 6.76425C12.8822 6.73853 12.9528 6.69794 12.9913 6.64234C13.0296 6.58673 13.0426 6.53535 13.0296 6.48824C13.0169 6.44127 12.989 6.40494 12.9464 6.37928C12.8521 6.3279 12.7666 6.3622 12.6898 6.48195C12.6469 6.55895 12.5569 6.63393 12.4201 6.70657C12.2834 6.7794 12.157 6.83491 12.0415 6.87339C11.926 6.91182 11.7785 6.95678 11.5987 7.00807C11.4189 7.05945 11.3207 7.08939 11.3035 7.09793C10.833 7.2433 10.3966 7.30754 9.99445 7.29037C9.80619 7.28192 9.65439 7.254 9.53895 7.20694C9.42342 7.16001 9.34417 7.1044 9.30151 7.04012C9.25867 6.97606 9.1903 6.89474 9.09617 6.7963C9.00195 6.69785 8.89496 6.61447 8.77526 6.54591C8.68971 6.50321 8.65757 6.42621 8.67902 6.315C8.70041 6.20378 8.76672 6.08817 8.87793 5.96841C8.88647 5.95978 8.97422 5.90643 9.14099 5.80798C9.30781 5.70954 9.42549 5.60898 9.49404 5.50631C9.57087 5.38655 9.70356 5.2624 9.89178 5.13401C9.90032 5.09985 9.90679 5.00577 9.91102 4.85176C9.91524 4.69784 9.87465 4.53098 9.78911 4.35131C9.70356 4.17154 9.58795 4.08182 9.44253 4.08182C9.23714 4.07328 9.09172 4.13311 9.00618 4.26149C8.92063 4.3897 8.88224 4.54806 8.89074 4.73628C8.89942 4.89878 8.94005 5.042 9.01265 5.16615C9.08543 5.29031 9.15178 5.35239 9.21165 5.35239C9.30569 5.34372 9.33563 5.37783 9.30142 5.45493C9.25013 5.54915 9.18158 5.60916 9.09608 5.63469C9.03603 5.65168 8.96968 5.59401 8.89708 5.4614C8.8243 5.32879 8.76874 5.16845 8.73026 4.98014C8.69183 4.79193 8.67672 4.63365 8.6854 4.50518C8.70239 4.23996 8.77292 3.9854 8.89708 3.74153C9.02124 3.49771 9.19875 3.38003 9.42967 3.38848C9.66927 3.39715 9.86193 3.54271 10.0073 3.82496C10.1529 4.10726 10.2213 4.49246 10.2127 4.9801C10.2385 5.04002 10.3047 5.06142 10.4117 5.04424C10.5185 5.02707 10.6598 5.02487 10.8351 5.03777C11.0104 5.05054 11.1366 5.0954 11.2136 5.17245C11.2223 5.17245 11.2266 5.10817 11.2266 4.97992C11.0725 3.90201 11.4532 3.32874 12.3688 3.26023C12.5054 3.28594 12.621 3.31808 12.715 3.35647C12.8094 3.39491 12.9096 3.45923 13.0166 3.549C13.1238 3.63877 13.2133 3.76922 13.2861 3.94044C13.3589 4.11176 13.4167 4.32564 13.4595 4.58223V5.05701C13.4595 5.33077 13.4036 5.48482 13.2924 5.51907C13.1129 5.5789 12.9847 5.57684 12.9078 5.5126C12.8307 5.44832 12.8391 5.33508 12.9333 5.17249C13.0188 4.95861 13.0017 4.71029 12.8819 4.428C12.7622 4.14574 12.5439 4.01736 12.2275 4.04307C12.0135 4.05166 11.8595 4.16718 11.7654 4.38956C11.6713 4.61203 11.6371 4.83023 11.6628 5.04415C11.6885 5.25804 11.7354 5.36925 11.804 5.37774C11.8553 5.38642 12.0074 5.45479 12.2597 5.58318C12.5124 5.71151 12.7027 5.78847 12.8309 5.81414C13.1646 5.88247 13.3547 5.98945 13.4019 6.13496C13.449 6.28056 13.4297 6.49224 13.3442 6.77027C13.2586 7.04848 13.233 7.27715 13.2675 7.45691C13.3016 7.64535 13.3659 7.81626 13.4601 7.97027C13.5542 8.12441 13.6545 8.26547 13.7616 8.3939C13.8685 8.52196 13.9945 8.76174 14.1403 9.11246C14.2855 9.46335 14.4181 9.90393 14.5378 10.4344C14.5463 10.4429 14.5783 10.4729 14.634 10.5243C14.6897 10.5756 14.7451 10.6397 14.8009 10.7167C14.8567 10.7938 14.9229 10.8985 15 11.0311C15.0769 11.1638 15.1606 11.3585 15.2504 11.6153C15.3399 11.8718 15.4236 12.1672 15.5005 12.5007C15.5947 12.8945 15.6439 13.3519 15.6482 13.8741C15.6525 14.3959 15.6867 14.7532 15.7509 14.9458C15.8153 15.1385 15.9799 15.2176 16.245 15.1833C16.5787 15.1662 16.7929 14.9865 16.8866 14.6443C17.169 13.6517 16.9383 12.4623 16.1937 11.0764C15.9113 10.5373 15.6676 10.1822 15.4621 10.0112C15.7615 10.1823 16.0696 10.503 16.3863 10.9737C16.7029 11.4444 16.9038 11.8851 16.9894 12.2956C16.9977 12.3385 17.0214 12.4519 17.0598 12.6357C17.0982 12.8197 17.1198 12.9267 17.1238 12.9566C17.128 12.9866 17.1454 13.0743 17.1751 13.2197C17.2052 13.3652 17.22 13.4593 17.22 13.5021C17.22 13.545 17.2241 13.6284 17.2329 13.7524C17.2416 13.8763 17.2393 13.9726 17.2264 14.0411C17.2135 14.1097 17.2009 14.2017 17.188 14.317C17.1751 14.4324 17.1538 14.5437 17.1238 14.6508C17.0943 14.7577 17.0621 14.8755 17.0278 15.0037C17.4982 15.209 17.7336 15.3886 17.7336 15.5427C17.5541 15.3972 17.2972 15.3011 16.9633 15.2544C16.6295 15.2072 16.3197 15.2521 16.033 15.389C15.7462 15.526 15.5985 15.7526 15.5899 16.069C15.2819 16.069 15.0637 16.1459 14.9355 16.3002C14.7473 16.5225 14.6491 16.824 14.6405 17.2049C14.6319 17.5855 14.6637 18.0007 14.7365 18.4496C14.8095 18.8987 14.8372 19.213 14.82 19.3928ZM9.44275 4.51794C9.41704 4.50949 9.39569 4.48365 9.37869 4.44094C9.37869 4.36412 9.41708 4.33396 9.49413 4.35117C9.54551 4.36816 9.59483 4.4324 9.64176 4.54361C9.68882 4.65482 9.69952 4.78321 9.6739 4.92867C9.6739 4.95434 9.66113 4.96729 9.63528 4.96706C9.54106 4.96706 9.5069 4.88156 9.53261 4.71047C9.55819 4.58214 9.52825 4.51794 9.44275 4.51794ZM12.7668 4.72342L12.7413 4.76185C12.6729 4.80456 12.639 4.81315 12.639 4.78757C12.6045 4.55642 12.5275 4.42382 12.4079 4.38956L12.3565 4.36394C12.2965 4.31256 12.3263 4.28262 12.446 4.27408C12.4717 4.26549 12.5102 4.27826 12.5615 4.31251C12.6129 4.34681 12.66 4.40031 12.7028 4.47304C12.7454 4.54586 12.7668 4.62916 12.7668 4.72342Z" />
          <path d="M9.77638 5.46757C9.77638 5.51895 9.79791 5.54035 9.84071 5.53186C9.87487 5.53186 9.91106 5.49117 9.94967 5.4099C9.9882 5.3288 10.0546 5.2839 10.1486 5.27522V5.27509H10.0202C9.8577 5.30075 9.77638 5.3649 9.77638 5.46757Z" />
          <path d="M10.8931 5.31368C10.9786 5.28796 11.0536 5.30738 11.1178 5.37153C11.1818 5.43559 11.2311 5.4635 11.2654 5.45483C11.3165 5.42929 11.3294 5.39068 11.3038 5.33939C11.2354 5.22813 11.0985 5.21959 10.8931 5.31368Z" />
        </React.Fragment>
      );
    default:
      return null;
  }
};

export default function Icon(props: Props) {
  const { size = 32, glyph } = props;

  return (
    <SvgWrapper size={size} className="icon">
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={glyph}
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        fit
      >
        <title>{glyph}</title>
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  );
}
