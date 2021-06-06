import React, { useRef, useEffect } from 'react'

import styles from './journey.module.scss'

const JourneyAnim = () => {
  const ref = useRef()

  const animateLine = () => {
    const vpHeight = window?.innerHeight
    const scrollDist = window?.scrollY
    const element = window?.pageYOffset + ref.current.getBoundingClientRect().top
    const elHieght = ref.current.getBBox().height
    const offset = 100
    const start = scrollDist + vpHeight - offset

    if (start > element && scrollDist < (element + elHieght)) {
      const svg = ref.current.parentElement
      const dist = scrollDist - element + vpHeight - (offset * 2)
      const percent = ((dist / elHieght) * 100).toFixed(3)
      const dashOffset = ((2400 / 100) * percent).toFixed(0)

      if (dashOffset > 325) { 
        svg.setAttribute('data-buffalo', true) 
      } else { 
        svg.setAttribute('data-buffalo', false) 
      }

      if (dashOffset > 1880) { 
        svg.setAttribute('data-ltg', true) 
      } else { 
        svg.setAttribute('data-ltg', false) 
      }

      if (dashOffset > 2200) { 
        svg.setAttribute('data-under2', true) 
      } else { 
        svg.setAttribute('data-under2', false) 
      }

      ref.current.style.strokeDashoffset = 4800 - parseInt(dashOffset)
    }
  }

  useEffect(() => {
    animateLine()
    window.addEventListener('scroll', animateLine)

    return () => window.removeEventListener('scroll', animateLine)
  }, [])

  return (
    <div className={styles.journeyWrapper}>
      <div className={styles.journeyPath}>
        <svg width="100%" height="100%" viewBox="0 0 936 944" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path id={styles.path} fill="none" d="M455.973,35.746c19.14,21.961 60.14,64.344 153.04,83.313c123.971,25.314 208.528,40.443 271.279,91.381c1.884,1.53 86.101,67.747 41.236,174.328c-37.819,89.842 -103.956,115.626 -236.892,91.756c-58.679,-10.537 -64.232,-116.407 8.777,-112.713c69.126,3.497 51.316,101.864 -12.73,120.406c-144.533,41.844 -236.087,27.569 -319.13,32.409c-61.325,3.574 -108.381,18.702 -146.49,42.221c-25.362,15.651 -66.04,48.236 -90.929,113.907c-21.509,56.755 -20.011,115.878 5.522,172.379c39.471,87.342 138.169,96.948 155.394,96.948" />
          <path id={styles.pathOverlay} ref={ref} fill="none" d="M455.973,35.746c19.14,21.961 60.14,64.344 153.04,83.313c123.971,25.314 208.528,40.443 271.279,91.381c1.884,1.53 86.101,67.747 41.236,174.328c-37.819,89.842 -103.956,115.626 -236.892,91.756c-58.679,-10.537 -64.232,-116.407 8.777,-112.713c69.126,3.497 51.316,101.864 -12.73,120.406c-144.533,41.844 -236.087,27.569 -319.13,32.409c-61.325,3.574 -108.381,18.702 -146.49,42.221c-25.362,15.651 -66.04,48.236 -90.929,113.907c-21.509,56.755 -20.011,115.878 5.522,172.379c39.471,87.342 138.169,96.948 155.394,96.948" />
          <g id={styles.buffalo} className={styles.pathStop}>
            <path fill="none" d="M759.16,125.055c0,-0 0.109,2.643 0.247,6.005c0.323,7.841 6.661,14.095 14.506,14.315c24.54,0.686 75.457,2.109 102.797,2.874c10.106,0.282 18.53,-7.679 18.816,-17.786c0.384,-13.534 0.918,-32.34 1.376,-48.474c0.245,-8.625 -3.041,-16.977 -9.097,-23.123c-6.056,-6.147 -14.357,-9.556 -22.985,-9.439c-25.783,0.348 -60.945,0.823 -83.742,1.131c-6.096,0.082 -11.909,2.583 -16.161,6.951c-4.252,4.369 -6.594,10.248 -6.512,16.343c0.203,14.922 0.429,31.607 0.429,31.607" />
            <path fill="none" d="M758.789,105.459c-0,0 -11.618,5.863 -17.155,8.657c-0.533,0.269 -0.865,0.819 -0.856,1.416c0.01,0.597 0.36,1.136 0.901,1.388c5.635,2.622 17.481,8.135 17.481,8.135" />
            <image id="buffalo-logo" href="/images/buffalo-logo.png" x="0" y="0" width="240px" height="260px" transform="matrix(0.204951,0,0,0.204951,802.821,71.1896)"/>
          </g>
          <g id={styles.ltg} className={styles.pathStop}>
            <path fill="none" d="M139.678,603.172c0,0 -0.109,2.643 -0.247,6.005c-0.323,7.841 -6.66,14.095 -14.506,14.315c-24.54,0.686 -75.457,2.109 -102.797,2.874c-10.106,0.282 -18.529,-7.679 -18.816,-17.786c-0.384,-13.534 -0.918,-32.339 -1.375,-48.474c-0.245,-8.625 3.04,-16.977 9.096,-23.123c6.056,-6.147 14.358,-9.556 22.985,-9.439c25.783,0.348 60.945,0.823 83.743,1.131c6.095,0.082 11.909,2.583 16.161,6.951c4.251,4.369 6.594,10.248 6.511,16.344c-0.203,14.921 -0.429,31.606 -0.429,31.606" />
            <path fill="none" d="M140.05,583.576c-0,0 11.618,5.864 17.154,8.658c0.533,0.269 0.866,0.818 0.856,1.415c-0.009,0.597 -0.359,1.136 -0.9,1.388c-5.636,2.623 -17.482,8.135 -17.482,8.135" />
            <image id="ltg-logo" href="/images/ltg-logo.png" x="0" y="0" width="580px" height="497px" transform="matrix(0.116518,0,0,0.116518,36.9564,545.817)"/>
          </g>
          <g id={styles.under2} className={styles.pathStop}>
            <path fill="none" d="M218.238,900.558c0,0 0.109,2.643 0.247,6.005c0.323,7.841 6.661,14.095 14.506,14.315c24.54,0.686 75.458,2.109 102.797,2.874c10.107,0.282 18.53,-7.679 18.816,-17.786c0.384,-13.534 0.918,-32.339 1.376,-48.474c0.245,-8.625 -3.041,-16.977 -9.097,-23.123c-6.055,-6.147 -14.357,-9.556 -22.985,-9.439c-25.783,0.348 -60.945,0.823 -83.742,1.131c-6.096,0.082 -11.909,2.583 -16.161,6.951c-4.252,4.369 -6.594,10.248 -6.511,16.344c0.202,14.921 0.429,31.606 0.429,31.606" />
            <path fill="none" d="M217.867,880.962c-0,0 -11.618,5.864 -17.155,8.658c-0.533,0.269 -0.865,0.818 -0.856,1.415c0.01,0.597 0.36,1.136 0.901,1.388c5.635,2.622 17.481,8.135 17.481,8.135" />
            <image id="under2-logo" href="/images/under2-logo.png" x="0" y="0" width="1531px" height="242px" transform="matrix(0.067725,0,0,0.067725,235.258,867.5)"/>
          </g>
          {/* <g id="motionSvg">
            <g id="plane">
              <path d="M427.493,1l9.227,13.303l-10.001,24.362l15.054,-15.454l10.41,24.658l69.732,-3.477l-94.422,-43.392Z" fill="#ffffff" />
              <path d="M426.719,38.665l21.619,0.136" />
              <path d="M436.519,14.615l83.292,29.528l-77.569,-20.628" fill="#ffffff" />
            </g>
          </g> */}
        </svg>
      </div>
    </div>
  )
}

export default JourneyAnim