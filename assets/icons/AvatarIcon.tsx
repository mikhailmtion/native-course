import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"

const AvatarIcon = () => (
  <Svg  width={72} height={72} fill="none">
    <Path
      stroke="#AFB2BF"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M56.892 64C56.335 53.88 53.236 46.5 36 46.5c-17.237 0-20.335 7.38-20.892 17.5"
    />
    <Circle cx={36} cy={36} r={35} stroke="#AFB2BF" strokeWidth={1.5} />
    <Circle cx={36} cy={25.5} r={10.5} stroke="#AFB2BF" strokeWidth={1.5} />
  </Svg>
)
export default AvatarIcon
