import {LineChart} from "react-native-chart-kit";
import React, {useState} from 'react';
import { View, Text, Dimensions} from 'react-native';

// Custom chart through "react-native-chart-kit". Consult "https://www.npmjs.com/package/react-native-chart-kit" for more info.

const Chart = () => {
    const [selectedValue, setSelectedValue] = useState(null);
    const daysOfWeek = ["Monday", "Tuesday", "Wedsday", "Thursday", "Friday", "Saturday", "Sunday"]
    const daysOfWeekShort = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

    return (
        <View>
        <LineChart
            data={{
            labels: daysOfWeekShort,
            datasets: [
                {
                data: [
                    14,
                    56,
                    23,
                    62,
                    10,
                    0,
                    100
                ]
                }
            ]
            }}
            width={Dimensions.get("window").width*(11/12)} // from react-native
            height={220}
            yAxisSuffix=" km"
            yAxisInterval={1} // optional, defaults to 1
            yLabels={[0, 10, 20, 30, 40, 50]}
            chartConfig={{
                backgroundColor: "#1A1A47",
                backgroundGradientFrom: "#1A1A47",
                backgroundGradientTo: "#1A1A47",
                decimalPlaces: 0, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(124, 124, 255, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                style: {
                    borderRadius: 16
                },
                propsForDots: {
                    r: "8",
                    strokeWidth: "2",
                    stroke: "#1A1A47"
                }
            }}
            bezier
            // withHorizontalLines={false}
            withVerticalLines={false}
            style={{
            borderRadius: 16
            }}
            onDataPointClick={(value) => setSelectedValue(value)}
        />
        {selectedValue && (
        <View
          style={{
            position: "absolute",
            top: selectedValue.y,
            left: selectedValue.x,
            backgroundColor: "#1A1A47",
            borderRadius: 4,
            padding: 8,
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: "600"}}>{daysOfWeek[selectedValue.index]}</Text>
          <Text style={{ color: "#7C7CFF", fontWeight: "500" }}>{selectedValue.value} km</Text>
        </View>
      )}
        </View>
    )
}

export default Chart