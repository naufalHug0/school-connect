import React from 'react'
import { Svg, SvgProps } from 'react-native-svg'

type IconProps = SvgProps & {
    color: string; 
    width: number; 
    height: number;
}

const Icon = (
    viewBox: string,
    path: React.ReactElement
): React.FC<IconProps> => {
    return ({ width = 24, height = 24, color = "black", ...props }) => (
        <Svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={color}
        {...props}
        >
            {path}
        </Svg>
    )
}

export default Icon