import React from 'react'
import { COMPONENT_MAP } from '../constants/cms'

const renderZones = (zones) => {
    return zones.map((zone) => {
        const component = COMPONENT_MAP[zone.__component]
        console.log('component', component)
        if (component) {
            return React.createElement(component, {
                key: zone.id,
                data: zone
              });
        }
        return null
    })
}

export default renderZones