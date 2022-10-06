import { ResponsiveRadar } from '@nivo/radar'
import theme from './radarTheme.json'


const StatsGraphicComponent = ({ data, champs }) => {


    return (
        <div className="championStatsRadar">
            <ResponsiveRadar
                data={data}
                keys={champs}
                indexBy="label"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                gridLabelOffset={36}
                enableDotLabel={false}
                theme={theme}
                colors={{ scheme: 'category10' }}
                borderColor={{ from: 'color' }}
                dotSize={8}
                dotBorderWidth={8}
                blendMode="multiply"
                motionConfig="wobbly"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        translateX: -50,
                        translateY: -40,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemTextColor: '#999',
                        symbolSize: 12,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    )

}

export default StatsGraphicComponent