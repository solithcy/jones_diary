import { env } from '$env/dynamic/public';
import {browser, dev} from "$app/environment";

export const API_URL = (browser && !dev) ? "/api" : env?.PUBLIC_SERVER_URL || "http://localhost:3000/api"
