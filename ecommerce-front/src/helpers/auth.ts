import { Jwt } from './../store/modules/auth';
export function isAuth(): Jwt | false {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
        try {
            return JSON.parse(jwt);
        } catch {
            return false;
        }
    }
    return false;
}
