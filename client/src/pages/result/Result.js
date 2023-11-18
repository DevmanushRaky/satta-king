import React from 'react'
import Helmet from '../../components/helmet/Helmet';
import LiveChart from "../live/LiveChart"
import Livetable from '../live/Livetable';


export default function Result() {
    return (
        <>
            <Helmet title="Result" />
            <LiveChart />
            <Livetable />


            <div>
                <p> Result will be show here </p>
            </div>

        </>
    )
}
