import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import {COLORS, FONTS} from '../constants';


/**
 * @desc 데이터 차트 func.
 * @param navigation
 * @returns {JSX.Element}
 * @constructor
 */
const Chart = ({ navigation }) => {
    return(
        <View
            style={{
                flex: 1, alignItems: 'center', justifyContent: 'center'
            }}
        >
            <Text style={{...FONTS.h2}}>Bezier Line Chart</Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April", "May", "June"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={500}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: COLORS.black, //"#fb8c00",
                    backgroundGradientTo: COLORS.black, //"#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 20
                    },
                    propsForDots: {
                        r: "10",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 10
                }}
            />
        </View>
    )
}

export default Chart;
