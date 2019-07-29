import React from 'react';

const CityList = ({city}) => {
        return (
            // Using Google's Get Lucky feature just in case the formatting of the city is wrong
            <a target="_blank" rel="noopener noreferrer" href={'http://www.google.com/search?q=https://www.numbeo.com/cost-of-living/in/' + city.replace(' ', '-') + '&btnI'}>Cost of living data for {city}⇢</a>
        )
}

export default CityList;
