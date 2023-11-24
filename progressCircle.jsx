import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

// Function that creates a dynamic custom progress bar 

const ProgressCircle = ({ progress, size, strokeWidth, color }) => {
  const [circumference, setCircumference] = useState(0);
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;


  useEffect(() => {
    setCircumference(2 * Math.PI * radius);
  }, []);

  const progressOffset = circumference - (progress / size) * circumference;
  return (
    <View>
      <Svg width={size} height={size}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          stroke={color}
          fill="none"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default ProgressCircle;
