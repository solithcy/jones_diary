import { env } from '$env/dynamic/public';
import {browser} from "$app/environment";

export const API_URL = browser ? "/api" : env?.PUBLIC_SERVER_URL || "http://localhost:3000/api"
