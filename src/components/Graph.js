import React, { Component } from 'react'
import { range, compile } from 'mathjs';
//import { Plot } from 'react-plotly.js';

export default class Graph extends Component {
    render() {
        const Plot = require('react-plotly.js').default;
        let { fx, title } = this.props;
        return (
            <Plot
                data={[
                    {
                        x: range(-10, 10, 0.5).toArray(),
                        y: range(-10, 10, 0.5).toArray().map(function (x) {
                            return compile(fx).evaluate({ x: x })
                        }),
                        type: 'scatter',
                        marker: { color: '#ff6699' },
                    },
                ]}
                layout={{ title: title }}
            />
        )
    }
}
