import { ResponsiveRadar } from '@nivo/radar'
import theme from './radarTheme.json'

const StatsGraphicComponent = ({ data }) => {

    return (
        <div className="championStatsRadar">
            <ResponsiveRadar
                data={data}
                keys={['']}
                indexBy="label"
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                gridLabelOffset={36}
                enableDotLabel={true}
                theme={theme}
                dotSize={10}
                dotBorderWidth={8}
                motionConfig="wobbly"
            />
        </div>
    )

}

export default StatsGraphicComponent