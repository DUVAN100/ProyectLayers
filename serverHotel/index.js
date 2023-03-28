import {API} from './API.js';
import * as dotenv from 'dotenv';

dotenv.config();

let serverHotel = new API();
serverHotel.raiseServer();



