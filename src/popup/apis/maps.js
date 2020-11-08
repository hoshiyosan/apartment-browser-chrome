import axios from 'axios'

const MAPS_API_KEY = 'AIzaSyBIymNUN-8etI5yh64efTuJeC7by0cpQuk';
const MAPS_API_BASE_URL = 'https://maps.googleapis.com/maps/api';

/**
 * Object to abstract interactions with Google Maps API.
 */
export class MapsApi {
    /**
     * Return first matching places for a given search.
     */
    static searchPlace(string, fields = ['formatted_address', 'geometry']) {
        return new Promise((resolve) => {
            axios.get(
                MAPS_API_BASE_URL + '/place/findplacefromtext/json?'
                + 'input=' + encodeURIComponent(string)
                + '&fields=' + fields.join(',')
                + '&key=' + MAPS_API_KEY
                + '&inputtype=textquery'
            )
                .then(response => {
                    resolve(response.data.candidates)
                })
        })
    }
}

export default MapsApi