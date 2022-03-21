import React from 'react';
import {View} from 'react-native';
import {VictoryChart, VictoryTheme, VictoryAxis, VictoryCandlestick } from "victory-native";

export function Example() {

    const data = [
        {x: new Date(2016, 6, 1), open: 10, close: 14.45454648500, high: 15, low: 4},
        {x: new Date(2016, 6, 2), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 3), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 4), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 5), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 6), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 7), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 8), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 9), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 10), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 11), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 12), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 13), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 14), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 15), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 16), open: 10, close: 15, high: 16, low: 5},
        {x: new Date(2016, 6, 17), open: 10, close: 15, high: 16, low: 5}
    ];

    return(
        <View>
            <VictoryChart
                theme={VictoryTheme.material}
                domainPadding={{ x: 25 }}
                scale={{ x: "time" }}
            >
                <VictoryAxis tickFormat={(t) => `${t.getDate()}/${t.getMonth()}`}/>
                <VictoryAxis dependentAxis
                             domain={[0.062, 30]} // TODO: should pick numbers automatically
                />
                <VictoryCandlestick
                    candleColors={{ positive: "#3dcc3d", negative: "#c43a31" }}
                    data={
                        data
                    }
                />
            </VictoryChart>
        </View>
    )
}