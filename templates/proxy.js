import {nodeserver} from '../common/config';
import {sendrequest} from './request';

export function test(){
    return sendrequest(`${nodeserver}/xx/xx/xx`, {

    })
}