import React from 'react';
import { useNavigate } from 'react-router-dom';


const Homepage = () => {
    return (
        <div className='homepage-container'>
            
            <div>

            <h1>Solar Resource Potential</h1>
            <p>Solar irradiation data is needed at all levels of solar power development, from initial government planning through to large-scale project development or the calculations needed to size smaller systems.
               In the past such data was provided at a relatively course level from NASA and other global providers, but more recently specialist models have been developed to more precisely calculate global horizontal irradiation (GHI) and direct normal irradiation (DNI) using primarily cloud cover data from satellites. 
               A number of firms now offer such data as a commercial service. Based on this, it is possible to calculate average annual power output from a theoretical photovoltaic power plant (PVOUT), taking into account temperature, tilt, and the efficiency of the equipment being used (solar panels and balance of system components).
               Solar resource data, including GHI, DNI and PVOUT is now available globally, for free, via the Global Solar Atlas, which is provided by the World Bank Group. 
               The same website has downloadable global, regional and country maps available in high resolution.</p>

            <h1>Solar Technologies and Techniques</h1>
            <p>Solar energy technologies refer primarily to the use of solar radiation for practical ends. All other renewable energies other than geothermal derive their energy from energy received from the sun.

Solar technologies are broadly characterized as either passive solar or active solar depending on the way they capture, convert and distribute sunlight. Active solar techniques include the use of photovoltaic modules (also called photovoltaic panels) and solar thermal collectors (with electrical or mechanical equipment) to convert sunlight into useful outputs. Passive solar techniques include orienting a building to the Sun, selecting materials with favorable thermal mass or light dispersing properties, and designing spaces that naturally circulate air.

Active solar technologies increase the supply of energy and are considered supply side technologies, while passive solar technologies reduce the need for alternate resources and are generally considered demand side technologies.[1]</p>
            

            <h1>Solar Thermal Technologies</h1>
            <p>Solar thermal technologies are harnessing solar energy for thermal energy (heat). Solar thermal technologies comprise flat collectors for low- and medium temperatures and high temperature collectors concentrating sunlight using mirrors and lenses.

There are even solar thermal system for cooling purposes that work with adsorption, absorption or desiccant cooling[2].</p>

            <h1>Solar Electric Technologies</h1>
            <p>Sunlight can be directly converted into electricity using photovoltaics (PV) and various experimental technologies.</p>

            <h1>OTEC - Ocean Thermal Energy Conversion</h1>
            <p>Ocean Thermal Energy Conversion taps into the stored solar energy in the ocean through the difference between the sea-surface temperatures and under 300m depth, which can be harnessed for extracting work through a Rankine cycle.</p>

            <h1></h1>
            <p></p>
            
            
            
            </div>




        </div>
    );
};

export default Homepage;