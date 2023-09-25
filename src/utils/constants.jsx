export const getToken = () => {
    if (localStorage.getItem("token")) {

        return JSON.parse(
            localStorage.getItem("token")
        );
    } else if (sessionStorage.getItem("token")) {

        return JSON.parse(
            sessionStorage.getItem("token")
        );
    }
};
// export const base_url_candor = "https://candor.heapbyte.com/candor/"
 export const base_url_candor = "http://192.168.1.189:8000/candor/"
export const root_url = "http://localhost:3000/"//for local env change it to http://localhost:3000/
export const root_url_fe = "http://localhost:5173/"; //for local env change it to http://localhost:5173/
