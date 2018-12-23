
export default function parseLatLng(job) {

    if (job.company.location) {
        longitude = job.company.location.lng === undefined ? 0 : parseFloat(job.company.location.lng);
        latitude = job.company.location.lat === undefined ? 0 : parseFloat(job.company.location.lat);
    } else {
        longitude = 0;
        latitude = 0;
    }

    return initialRegion = {
        longitude,
        latitude,
        latitudeDelta: 0.045,
        longitudeDelta: 0.02
    }
}