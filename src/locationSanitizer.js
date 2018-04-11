const citySanitizer = (data => data.map(place => place.split(', ')[0]));

const stateSanitizer = (data => data.map(place => place.split(', ')[1]));

export { citySanitizer, stateSanitizer};