import {sendrequest, upload} from 'perfect-fetch';

export function test(){
    return sendrequest(`${nodeserver}/xx/xx/xx`, {
		id: 1,
		name: "jnotnull"
    })
}