import React, {useState, useEffect} from 'react';
import './CountryPicker.css';
import { NativeSelect, FormControl } from '@material-ui/core'
import { fetchCountries} from '../../api';



function CountryPicker({handleCountryChange}) {

    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() => {
        fetchAPI();
    }, [setFetchedCountries]);

    const fetchAPI = async() =>{
        setFetchedCountries(await fetchCountries());
    };


    return (
        <FormControl className="formControl">
            <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)} >
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country} >{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;
