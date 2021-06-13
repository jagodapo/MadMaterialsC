import React from "react"
import SvgIcon from "@material-ui/core/SvgIcon"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  svg: {
    [theme.breakpoints.up("md")]: {
      width: 200,
      height: "auto",
    },
    [theme.breakpoints.down("md")]: {
      width: 150,
      height: "auto",
    },
  },
}))

const Logo = props => {
  const classes = useStyles()

  return (
    <>
      <SvgIcon viewBox="0 0 280 30" className={classes.svg}>
        <path
          xmlns="http://www.w3.org/2000/svg"
          d="M29.58 0.300195V29.1302H25.2V10.8202L17.2 29.1302H12.25L4.37 10.9402V29.1302H0V0.300195H4.57L14.73 23.8302L25 0.300195H29.58ZM56.58 0.300195V29.1302H52.16V22.4002H42.37L38.12 29.1302H32.94L51.17 0.300195H56.58ZM45.13 18.0002H52.13V6.93019L45.13 18.0002ZM114.64 0.300195V29.1302H110.27V10.8202L102.27 29.1302H97.32L89.44 10.9402V29.1302H85.07V0.300195H89.64L99.79 23.8302L110.07 0.300195H114.64ZM141.64 0.300195V29.1302H137.25V22.4002H127.46L123.21 29.1302H118L136.24 0.300195H141.64ZM130.2 18.0002H137.2V6.93019L130.2 18.0002ZM162.13 0.300195V4.6702H156V29.1302H151.6V4.6702H145.5V0.300195H162.13ZM180.77 0.300195V4.6702H170.43V12.4902H178.43V16.8602H170.43V24.7602H180.77V29.1302H166.06V0.300195H180.77ZM204.6 29.1302H199.67L193.36 17.0002H188.42V29.1302H184.05V0.300195H194.69C195.786 0.285399 196.874 0.496133 197.886 0.919315C198.897 1.3425 199.811 1.96909 200.57 2.7602C201.358 3.52429 201.981 4.44242 202.399 5.45744C202.817 6.47246 203.021 7.56266 203 8.6602C203.013 10.3143 202.514 11.9318 201.57 13.2902C200.67 14.6231 199.402 15.6654 197.92 16.2902L204.6 29.1302ZM194.69 12.6102C195.734 12.5972 196.731 12.1769 197.469 11.4389C198.207 10.701 198.627 9.70377 198.64 8.6602C198.647 8.13704 198.549 7.61777 198.352 7.1333C198.154 6.64883 197.861 6.20907 197.49 5.8402C197.128 5.46424 196.693 5.16646 196.211 4.96523C195.73 4.764 195.212 4.66359 194.69 4.6702H188.42V12.6102H194.69ZM211.49 29.1302H207.12V0.340195H211.49V29.1302ZM238.37 0.300195V29.1302H234V22.4002H224.2L219.95 29.1302H214.78L233 0.300195H238.37ZM226.94 18.0002H233.94V6.93019L226.94 18.0002ZM247.66 0.300195V24.7602H258V29.1302H243.28V0.300195H247.66ZM269.17 29.3902C267.311 29.3222 265.497 28.7967 263.89 27.8602C262.177 26.9308 260.856 25.4148 260.17 23.5902L264.28 22.0802C264.672 23.0337 265.412 23.8023 266.35 24.2302C267.283 24.7028 268.305 24.9721 269.35 25.0202C270.845 25.1459 272.333 24.7071 273.52 23.7902C273.94 23.4942 274.29 23.1099 274.546 22.6642C274.802 22.2185 274.957 21.7222 275 21.2102C275.093 19.3702 273.167 17.9002 269.22 16.8002C263.06 15.0669 260.06 12.1335 260.22 8.0002C260.221 6.67842 260.572 5.38044 261.235 4.23738C261.899 3.09432 262.853 2.14668 264 1.4902C265.959 0.347253 268.219 -0.172444 270.48 0.000195146C271.862 0.00779249 273.229 0.295236 274.497 0.8452C275.766 1.39516 276.91 2.19626 277.86 3.2002L274.65 6.20019C274.082 5.61813 273.402 5.15755 272.651 4.8464C271.9 4.53525 271.093 4.38004 270.28 4.39019C269.137 4.3093 267.99 4.47997 266.92 4.89019C266.247 5.14207 265.667 5.59458 265.259 6.18654C264.852 6.77851 264.635 7.4814 264.64 8.2002C264.56 10.0135 266.487 11.4702 270.42 12.5702C274 13.5602 276.48 15.0002 278 17.0002C278.991 18.2659 279.499 19.8439 279.43 21.4502C279.373 22.5883 279.065 23.6996 278.527 24.7042C277.989 25.7088 277.236 26.5818 276.32 27.2602C274.457 28.7349 272.135 29.5098 269.76 29.4502C269.562 29.4419 269.365 29.4219 269.17 29.3902ZM73.17 29.1302C71.276 29.1558 69.3967 28.7938 67.6478 28.0664C65.8988 27.3389 64.3172 26.2615 63 24.9002C61.6424 23.5813 60.5686 21.9989 59.8446 20.25C59.1207 18.5011 58.7618 16.6228 58.79 14.7302C58.7594 12.8328 59.1171 10.9493 59.8411 9.19521C60.5651 7.44115 61.6401 5.85363 63 4.5302C64.323 3.16274 65.9128 2.08168 67.6708 1.35403C69.4288 0.626394 71.3176 0.267699 73.22 0.300195H80.8V29.1302H73.17ZM76.45 4.6502H73.22C71.8929 4.63893 70.5776 4.89927 69.3549 5.41518C68.1321 5.9311 67.0279 6.6917 66.11 7.6502C65.1592 8.57294 64.4078 9.68086 63.9021 10.9055C63.3964 12.1301 63.1473 13.4455 63.17 14.7702C63.1502 16.0901 63.4008 17.4 63.9064 18.6194C64.4121 19.8387 65.162 20.9416 66.11 21.8602C67.0279 22.8187 68.1321 23.5793 69.3549 24.0952C70.5776 24.6111 71.8929 24.8715 73.22 24.8602H76.45V4.6502Z"
          fill="#325743"
        />
      </SvgIcon>
    </>
  )
}

export default Logo
