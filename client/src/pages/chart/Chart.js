import React from 'react'
import Helmet from '../../components/helmet/Helmet';
import LiveChart from "../live/LiveChart"
import LiveTable from '../live/Livetable';

function Chart() {
    return (
        <>
            <Helmet title="Chart" />
            <LiveChart />
           <LiveTable/>

            <div>
                <p> Chart will be show here </p>
            </div>

        </>
    )
}

export default Chart